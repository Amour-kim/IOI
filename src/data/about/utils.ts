import type { AboutHistory, AboutTimelinePeriod } from "../types";

export type PeriodControl = Pick<AboutTimelinePeriod, "id" | "title" | "startDate" | "endDate" | "color">;

// Extract unique timeline periods (ignore standalone milestones)
export function getAboutTimelinePeriods(history: AboutHistory): AboutTimelinePeriod[] {
  const items = history.detailedTimeline ?? [];
  const periods = items.filter((x: any): x is AboutTimelinePeriod => Array.isArray(x?.milestones));
  // Ensure uniqueness by id while preserving order
  const seen = new Set<string>();
  const unique: AboutTimelinePeriod[] = [];
  for (const p of periods) {
    if (!seen.has(p.id)) {
      seen.add(p.id);
      unique.push(p);
    }
  }
  return unique;
}

// Build lightweight controls data for a period carousel/navigation
export function getAboutTimelinePeriodControls(history: AboutHistory): PeriodControl[] {
  return getAboutTimelinePeriods(history).map((p) => ({
    id: p.id,
    title: p.title,
    startDate: p.startDate,
    endDate: p.endDate,
    color: p.color,
  }));
}
