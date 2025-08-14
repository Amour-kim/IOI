import type { FAQItems, FAQCategory, DocumentationItems, TutorialItems } from '@/data/ressources/resources.types';

export function getUniqueCategories(items: FAQItems): FAQCategory[] {
  const set = new Set<FAQCategory>();
  items.forEach(i => set.add(i.category));
  return Array.from(set.values());
}

// Generic unique by key helper
export function uniqueBy<T, K extends keyof T>(arr: T[], key: K): T[] {
  const seen = new Set<T[K]>();
  const out: T[] = [];
  for (const item of arr) {
    const v = item[key];
    if (!seen.has(v)) {
      seen.add(v);
      out.push(item);
    }
  }
  return out;
}

// Docs: extract unique categories
export function getUniqueDocCategories(items: DocumentationItems): string[] {
  return Array.from(new Set(items.map(i => i.category)));
}

// Docs: extract unique versions (flatten array field)
export function getUniqueDocVersions(items: DocumentationItems): string[] {
  const set = new Set<string>();
  for (const d of items) {
    d.version.forEach(v => set.add(v));
  }
  return Array.from(set.values());
}

// Docs: extract unique doc types
export function getUniqueDocTypes(items: DocumentationItems): string[] {
  return Array.from(new Set(items.map(i => i.docType)));
}

// Docs: extract unique audiences (flatten array field)
export function getUniqueDocAudiences(items: DocumentationItems): string[] {
  const set = new Set<string>();
  for (const d of items) {
    d.audience.forEach(a => set.add(a));
  }
  return Array.from(set.values());
}

// Docs: extract unique domains
export function getUniqueDocDomains(items: DocumentationItems): string[] {
  return Array.from(new Set(items.map(i => i.domain)));
}

// Tutorials: unique categories
export function getUniqueTutorialCategories(items: TutorialItems): string[] {
  return Array.from(new Set(items.map(i => i.category)));
}

// Tutorials: unique formats
export function getUniqueTutorialFormats(items: TutorialItems): string[] {
  return Array.from(new Set(items.map(i => i.format)));
}

// Tutorials: unique audiences (flatten)
export function getUniqueTutorialAudiences(items: TutorialItems): string[] {
  const set = new Set<string>();
  for (const t of items) {
    (t.audience || []).forEach(a => set.add(a));
  }
  return Array.from(set.values());
}

// Tutorials: unique domains
export function getUniqueTutorialDomains(items: TutorialItems): string[] {
  return Array.from(new Set(items.map(i => i.domain).filter(Boolean))) as string[];
}

// Tutorials: unique tags (flatten)
export function getUniqueTutorialTags(items: TutorialItems): string[] {
  const set = new Set<string>();
  for (const t of items) t.tags.forEach(tag => set.add(tag));
  return Array.from(set.values());
}
