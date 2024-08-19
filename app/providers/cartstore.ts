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
  quantity: number,
}

type State = {
  items: ItemArray[],
  addItem: (item: ItemArray) => void,
  removeItem: (item: ItemArray) => void,
  updateItem: (id: string, quantity: number) => void,
  clearCart: () => void,
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
  updateItem: (id: string, quantity: number) => {
    set((state) => ({
      ...state,
      items: state.items.map((i) =>
        i.id === id ? { ...i, quantity: quantity } : i
      ),
    }));
  },
  removeItem: (item: ItemArray) => {
    set((state) => {
      const existingItem = state.items.find(
        (i) => i.title === item.title && i.size === item.size && i.price === item.price
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          return {
            ...state,
            items: state.items.map((i) =>
              i.title === item.title && i.size === item.size && i.price === item.price
                ? { ...i, quantity: i.quantity - 1 }
                : i
            ),
          };
        } else {
          return {
            ...state,
            items: state.items.filter(
              (i) =>
                !(i.title === item.title && i.size === item.size && i.price === item.price)
            ),
          };
        }
      } else {
        return state;
      }
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
