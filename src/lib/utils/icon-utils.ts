import { LucideIcon } from 'lucide-react';
import {
  Globe,
  Briefcase,
  Code2,
  Lightbulb,
  Paintbrush,
  Megaphone,
  GraduationCap,
  Settings2,
  Headset,
  Video,
  ShieldCheck,
  Network,
  Wrench,
  Server,
  ShieldAlert,
  Cloud,
  LockKeyhole,
  Brain,
  // Ajoutez d'autres icônes Lucide selon vos besoins
} from 'lucide-react';

type IconName = 
  | 'GLOBE'
  | 'BRIEFCASE'
  | 'CODE_2'
  | 'LIGHTBULB'
  | 'PAINTBRUSH'
  | 'MEGAPHONE'
  | 'GRADUATION_CAP'
  | 'SETTINGS_2'
  | 'HEADSET'
  | 'VIDEO'
  | 'SHIELD_CHECK'
  | 'NETWORK'
  | 'WRENCH'
  | 'SERVER'
  | 'SHIELD_ALERT'
  | 'CLOUD'
  | 'LOCK_KEYHOLE'
  | 'BRAIN';

const ICONS: Record<IconName, LucideIcon> = {
  GLOBE: Globe,
  BRIEFCASE: Briefcase,
  CODE_2: Code2,
  LIGHTBULB: Lightbulb,
  PAINTBRUSH: Paintbrush,
  MEGAPHONE: Megaphone,
  GRADUATION_CAP: GraduationCap,
  SETTINGS_2: Settings2,
  HEADSET: Headset,
  VIDEO: Video,
  SHIELD_CHECK: ShieldCheck,
  NETWORK: Network,
  WRENCH: Wrench,
  SERVER: Server,
  SHIELD_ALERT: ShieldAlert,
  CLOUD: Cloud,
  LOCK_KEYHOLE: LockKeyhole,
  BRAIN: Brain,
};

export const getIconComponent = (iconName: string): LucideIcon => {
  const iconKey = iconName.toUpperCase() as IconName;
  return ICONS[iconKey] || Globe; // Retourne Globe comme icône par défaut
};
