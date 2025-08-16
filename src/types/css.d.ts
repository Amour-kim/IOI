import 'react';

declare module 'react' {
  interface CSSProperties {
    '--transform'?: string;
    '--width'?: string;
    '--slide-width'?: string;
  }
}
