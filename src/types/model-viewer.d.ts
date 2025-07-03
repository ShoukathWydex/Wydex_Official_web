declare namespace JSX {
  interface IntrinsicElements { 
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      alt?: string;
      'auto-rotate'?: boolean;
      'camera-controls'?: boolean;
      'background-color'?: string;
      'exposure'?: string;
      'tone-mapping'?: string;
      'shadow-intensity'?: string;
      'shadow-softness'?: string;
      'environment-image'?: string;
      'skybox-image'?: string;
      loading?: string;
      style?: React.CSSProperties;
      className?: string;
    };
  }
}

// Trick to make this a module so TS includes it automatically
export {};
