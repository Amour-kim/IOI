import { LucideIcon } from 'lucide-react';
import { ComponentType } from 'react';

export interface SubMenuItem {
  id: string;
  label: string;
  href: string;
  icon?: ComponentType<any> | string; // Accepte un composant React ou une chaîne
  description?: string;
  disabled?: boolean;
  className?: string;
  [key: string]: any; // Pour les propriétés supplémentaires
}

export interface MenuItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  subItems: SubMenuItem[];
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface CompanyInfo {
  email: string;
  phone: string;
  address: string;
  hours: string;
}

export interface ModernNavbarProps {
  logo?: string | React.ReactNode;
  activeItem?: string | null;
  activeSubItem?: string | null;
  onItemClick?: (item: MenuItem) => void;
  onSubItemClick?: (subItem: SubMenuItem) => void;
  className?: string;
  variant?: 'default' | 'transparent' | 'blurred' | 'glass' | 'dark';
  showTopBar?: boolean;
  companyInfo?: CompanyInfo;
  socialLinks?: SocialLink[];
  menuItems?: MenuItem[];
  showSearch?: boolean;
  showLanguageSwitcher?: boolean;
  showThemeToggle?: boolean;
  showCtaButton?: boolean;
  ctaButtonText?: string;
  onCtaClick?: () => void;
  mobileMenuOpen?: boolean;
  onMobileMenuToggle?: (open: boolean) => void;
}
