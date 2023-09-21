/// <reference types="vite-plugin-svgr/client" />

declare module "*.svg" {
  const content: unknown;
  export default content;
}
