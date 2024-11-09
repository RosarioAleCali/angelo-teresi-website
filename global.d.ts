// global.d.ts
interface Window {
  fbq: ((command: 'init', pixelId: string) => void)
      & ((command: 'track', eventName: string, params?: Record<string, unknown>) => void)
      & ((command: 'trackCustom', customEventName: string, params?: Record<string, unknown>) => void);
}
