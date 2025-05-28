// global.d.ts
declare global {
    interface Window {
      Quill: any;
      gtag: (...args: any[]) => void;
    }
  }

  export {};
