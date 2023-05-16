import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  increment: (delta) => set((state) => ({ count: state.count + delta })),
  decrement: (delta) =>
    set((state) => ({
      count: state.count - delta < 0 ? 0 : state.count - delta,
    })),
}));

export default useStore;
