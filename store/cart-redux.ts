import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ItemType = {
  image: string;
  name: string;
  id: string;
  amount: number;
  price: number;
};

interface InitialType {
  items: ItemType[];
  totalPrice: number;
}

const initialState = {
  items: [],
  totalPrice: 0,
} as InitialType;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ItemType>) => {
      const existedItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existedItem) {
        state.items.map((item) =>
          item.id === existedItem.id ? item.amount++ : item,
        );
      } else {
        state.items.push(action.payload);
      }
      state.totalPrice += action.payload.price;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const existedItem = state.items.find(
        (item) => item.id === action.payload,
      );
      if (existedItem) {
        const price = existedItem.price;
        if (existedItem.amount === 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload,
          );
        } else {
          state.items.map((item) =>
            item.id === action.payload ? item.amount-- : item,
          );
        }
        state.totalPrice -= price;
      }
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
