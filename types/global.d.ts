// types/global.d.ts
export {}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (args: { url: string }) => void
    }
  }
}
