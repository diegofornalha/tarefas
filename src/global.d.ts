/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "svelte-easy-toast";
declare module "@vercel/analytics";
