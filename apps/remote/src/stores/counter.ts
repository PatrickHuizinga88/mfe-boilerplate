
// import type { useCounterStore as _useCounterStore } from '../../../host/stores/counter'

declare global {
  interface Window {
    useCounterStore: any;
  }
}


export const useCounterStore = window.useCounterStore;