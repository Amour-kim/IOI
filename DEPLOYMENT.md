# Guide de Déploiement sur Vercel

## Prérequis

- Compte Vercel (gratuit sur [vercel.com](https://vercel.com))
- Projet Git (GitHub, GitLab, ou Bitbucket)
- Node.js 18+ installé localement

## Étapes de Déploiement

### 1. Préparation du Projet

Assurez-vous que votre projet est prêt :

```bash
# Installer les dépendances
npm install

# Tester le build localement
npm run build

# Tester le démarrage
npm start
```

### 2. Déploiement sur Vercel

#### Option A : Via l'Interface Web Vercel (Recommandé)

1. Connectez-vous à [vercel.com](https://vercel.com)
2. Cliquez sur "New Project"
3. Importez votre repository Git
4. Vercel détectera automatiquement que c'est un projet Next.js
5. Configurez les variables d'environnement si nécessaire
6. Cliquez sur "Deploy"

#### Option B : Via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter à Vercel
vercel login

# Déployer
vercel

# Pour la production
vercel --prod
```

### 3. Configuration des Variables d'Environnement

Dans le dashboard Vercel, allez dans Settings > Environment Variables et ajoutez :

```
NEXT_PUBLIC_API_URL=https://your-api-domain.com
NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app
```

### 4. Configuration des Domaines Personnalisés (Optionnel)

1. Dans le dashboard Vercel, allez dans Settings > Domains
2. Ajoutez votre domaine personnalisé
3. Suivez les instructions pour configurer les DNS

## Optimisations Incluses

Le projet est configuré avec les optimisations suivantes :

- **Compression** : Activée pour réduire la taille des fichiers
- **Optimisation des images** : Formats WebP et AVIF supportés
- **Headers de sécurité** : Protection XSS, clickjacking, etc.
- **Optimisation des packages** : Import optimisé pour lucide-react et framer-motion
- **Cache** : Configuration optimale pour Vercel

## Monitoring et Analytics

### Vercel Analytics (Optionnel)

Pour activer Vercel Analytics :

1. Dans le dashboard Vercel, allez dans Settings > Analytics
2. Activez Vercel Analytics
3. Ajoutez le script dans votre `layout.tsx` :

```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## Dépannage

### Erreurs Courantes

1. **Build Failed** : Vérifiez les logs dans Vercel Dashboard
2. **Images non chargées** : Vérifiez la configuration `next.config.ts`
3. **Variables d'environnement manquantes** : Ajoutez-les dans Vercel Dashboard

### Commandes Utiles

```bash
# Voir les logs de déploiement
vercel logs

# Redéployer
vercel --prod

# Tester localement avec la configuration Vercel
vercel dev
```

## Support

Pour plus d'aide :
- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Next.js](https://nextjs.org/docs)
- [Support Vercel](https://vercel.com/support) 