import { LucideIcon } from 'lucide-react';
import { Handshake, Lightbulb, Shield } from "lucide-react";

export interface ValeurType {
  icone: LucideIcon;
  titre: string;
  description: string;
  couleur: string;
}

export const valeursData: ValeurType[] = [
  {
    icone: Handshake,
    titre: "Intégrité",
    description: "Nous maintenons les plus hauts standards d'éthique et de professionnalisme dans toutes nos interventions.",
    couleur: "from-yellow-400 to-orange-500"
  },
  {
    icone: Lightbulb,
    titre: "Innovation",
    description: "Nous restons à la pointe des dernières technologies pour vous offrir des solutions modernes et efficaces.",
    couleur: "from-blue-400 to-cyan-500"
  },
  {
    icone: Shield,
    titre: "Engagement",
    description: "Votre satisfaction est notre priorité absolue. Nous nous engageons à dépasser vos attentes.",
    couleur: "from-green-400 to-emerald-500"
  }
];
