declare module 'modern-normalize';

// vite-imagetools type declarations
/// <reference types="vite/client" />

declare module '*&format=webp' {
  const src: string;
  export default src;
}

declare module '*&format=avif' {
  const src: string;
  export default src;
}

declare module '*?*' {
  const src: string;
  export default src;
}
