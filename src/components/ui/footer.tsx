'use client';

import dynamic from 'next/dynamic';

// Chargement dynamique côté client uniquement
const ClientFooter = dynamic(
  () => import('./ClientFooter'),
  { ssr: false }
);

export default function Footer() {
  return <ClientFooter />;
}
