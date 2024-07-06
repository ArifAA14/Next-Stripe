import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ItemArray {
  title: string,
  price: number,
  size: string,
  id: any,
  thumbnail: string,
  desc: string | null,
  priceId: any,
}

type State = {
  items: ItemArray[],
  addItem: (item: ItemArray) => void,
  removeItem: (title: string) => void,
  clearCart: () => void,
};

const cartStore = (set: (fn: (state: State) => State) => void): State => ({
  items: [],
  addItem: (item: ItemArray) => {
    set((state) => {
      if (state.items.some((i) => i.title === item.title && i.size === item.size)) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, item],
      };
    });
  },
  removeItem: (id: string) => {
    set((state) => {
      return {
        ...state,
        items: state.items.filter((i) => i.id !== id),
      };
    });

  },
  clearCart: () => {
    set((state) => {
      return {
        ...state,
        items: [],
      };
    });
  }
});

const useStore = create(
  persist(cartStore, {
    name: 'user-storage',
  })
);

export default useStore;
