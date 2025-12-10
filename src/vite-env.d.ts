/// <reference types="vite/client" />

// vite-plugin-svgr
declare module '*.svg?react' {
  import { FunctionComponent, SVGProps } from 'react';
  const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

// vite-imagetools
/// <reference types="vite/client" />
declare module '*?w=*' {
  const src: string;
  export default src;
}

declare module '*?h=*' {
  const src: string;
  export default src;
}

declare module '*?format=*' {
  const src: string;
  export default src;
}

declare module '*?w=*&h=*&format=*' {
  const src: string;
  export default src;
}
