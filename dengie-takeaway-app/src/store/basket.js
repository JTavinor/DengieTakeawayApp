import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    itemAdded: (basket, action) => {
      const itemInBasket = basket.filter(
        (item) => item.itemName === action.payload.itemName
      );
      if (itemInBasket.length === 0) {
        basket.push({
          itemName: action.payload.itemName,
          quantity: action.payload.quantity,
          price: action.payload.price,
        });
      } else {
        const index = basket.findIndex(
          (item) => item.itemName === action.payload.itemName
        );
        basket[index].quantity =
          basket[index].quantity + action.payload.quantity;

        basket[index].price = basket[index].price + action.payload.price;
      }
    },

    itemQuantityUpdated: (basket, action) => {
      const index = basket.findIndex(
        (item) => item.itemName === action.payload.itemName
      );
      basket[index].price +=
        (action.payload.price / basket[index].quantity) *
        action.payload.quantity;
      basket[index].quantity = basket[index].quantity + action.payload.quantity;
    },

    itemRemoved: (basket, action) => {
      return basket.filter((item) => item.itemName !== action.payload.itemName);
    },
  },
});

export const { itemAdded, itemQuantityUpdated, itemRemoved } = slice.actions;

export default slice.reducer;
