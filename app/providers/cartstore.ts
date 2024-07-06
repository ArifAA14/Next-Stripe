import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ItemArray {
  title: string,
  price: number,
  size: string,
  id: any,
  thumbnail: string,
  desc: string | null,
}

type State = {
  items: ItemArray[],
  addItem: (item: ItemArray) => void,
  removeItem: (title: string) => void,
};

const cartStore = (set: (fn: (state: State) => State) => void): State => ({
  items: [],
  addItem: (item: ItemArray) => {
    set((state) => {
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
});

const useStore = create(
  persist(cartStore, {
    name: 'user-storage',
  })
);

export default useStore;
