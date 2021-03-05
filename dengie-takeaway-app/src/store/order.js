import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "order",
  initialState: { delivery: "delivery", basket: [] },
  reducers: {
    deliveryToggled: (order, action) => {
      order.delivery = action.payload.delivery;
    },

    basketAdded: (order, action) => {
      order.basket = action.payload.basket;
    },

    customerDetailsAdded: (order, action) => {
      order.customerDetails = action.payload.customerDetails;
    },

    itemAdded: (order, action) => {
      const itemInBasket = order.basket.filter(
        (item) => item.itemName === action.payload.itemName
      );
      if (itemInBasket.length === 0) {
        order.basket.push({
          itemName: action.payload.itemName,
          quantity: action.payload.quantity,
          price: action.payload.price,
        });
      } else {
        const index = order.basket.findIndex(
          (item) => item.itemName === action.payload.itemName
        );
        order.basket[index].quantity =
          order.basket[index].quantity + action.payload.quantity;

        order.basket[index].price =
          order.basket[index].price + action.payload.price;
      }
    },

    itemQuantityUpdated: (order, action) => {
      const index = order.basket.findIndex(
        (item) => item.itemName === action.payload.itemName
      );
      order.basket[index].price +=
        (action.payload.price / order.basket[index].quantity) *
        action.payload.quantity;
      order.basket[index].quantity =
        order.basket[index].quantity + action.payload.quantity;
    },

    itemRemoved: (order, action) => {
      return order.basket.filter(
        (item) => item.itemName !== action.payload.itemName
      );
    },
  },
});

export const {
  deliveryToggled,
  basketAdded,
  customerDetailsAdded,
} = slice.actions;

export default slice.reducer;
