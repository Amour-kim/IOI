'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// Context for accordion state
const AccordionContext = React.createContext<{
  openItems: Record<string, boolean>;
  toggleItem: (value: string) => void;
}>({
  openItems: {},
  toggleItem: () => {},
});

// Custom hook to use accordion context
function useAccordion() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be wrapped in an <Accordion>');
  }
  return context;
}

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue?: string | string[];
}

export function Accordion({
  children,
  className,
  type = 'single',
  collapsible = true,
  defaultValue,
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<Record<string, boolean>>(() => {
    if (!defaultValue) return {};
    
    if (Array.isArray(defaultValue)) {
      return defaultValue.reduce((acc, val) => ({ ...acc, [val]: true }), {});
    }
    
    return { [defaultValue]: true };
  });

  const toggleItem = React.useCallback((value: string) => {
    setOpenItems(prev => {
      const newState = { ...prev };
      
      if (type === 'single') {
        // Close all items first
        Object.keys(newState).forEach(key => {
          newState[key] = false;
        });
        // Toggle the clicked item if collapsible
        newState[value] = collapsible ? !prev[value] : true;
      } else {
        // Toggle the clicked item
        newState[value] = collapsible ? !prev[value] : true;
      }
      
      return newState;
    });
  }, [type, collapsible]);

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={cn('w-full', className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

// Type pour les composants enfants qui acceptent isOpen et onToggle
type AccordionChildProps = {
  isOpen?: boolean;
  onToggle?: () => void;
  children?: React.ReactNode;
  [key: string]: any;
};

// Type guard pour vérifier si un composant est un élément React avec des props
type AnyElement = React.ReactElement<AccordionChildProps>;

// Type pour les props des composants enfants
type AccordionChildElement = React.ReactElement<{
  isOpen?: boolean;
  onToggle?: () => void;
  value?: string;
  [key: string]: any;
}>;

// Composant AccordionItem avec typage amélioré
export function AccordionItem({ children, value, className }: AccordionItemProps) {
  const { openItems, toggleItem } = useAccordion();
  const isOpen = !!openItems[value];
  
  // Gestion des enfants avec typage explicite
  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        const childElement = child as AccordionChildElement;
        return React.cloneElement(childElement, {
          ...childElement.props,
          isOpen,
          onToggle: () => toggleItem(value),
          value, // Passer la valeur au composant enfant
        });
      }
      return child;
    });
  };

  return (
    <div 
      className={cn('border-b border-gray-200 dark:border-gray-700', className)}
      data-state={isOpen ? 'open' : 'closed'}
    >
      {renderChildren()}
    </div>
  );
}

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onToggle?: () => void;
  value?: string; // Ajout de la propriété value
}

export function AccordionTrigger({
  children,
  className,
  isOpen = false,
  onToggle,
  value = 'accordion-item', // Valeur par défaut plus descriptive
  ...props
}: AccordionTriggerProps) {
  return (
    <button
      type="button"
      className={cn(
        'flex w-full items-center justify-between py-4 font-medium transition-all hover:underline',
        'focus:outline-none',
        className
      )}
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`accordion-content-${value}`}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          'h-4 w-4 transition-transform duration-200',
          isOpen ? 'rotate-180' : ''
        )}
        aria-hidden={isOpen ? false : true}
      />
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  value?: string; // Ajout de la propriété value
}

export function AccordionContent({
  children,
  className,
  isOpen = false,
  value = 'accordion-content', // Valeur par défaut plus descriptive
}: AccordionContentProps) {
  return (
    <div
      id={`accordion-content-${value}`}
      className={cn(
        'overflow-hidden transition-all duration-200',
        isOpen ? 'max-h-[1000px]' : 'max-h-0',
        className
      )}
      aria-hidden={!isOpen}
      role="region"
    >
      <div className="pb-4 pt-0">
        {children}
      </div>
    </div>
  );
}

// Default export for backward compatibility
export default {
  Accordion,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
};
