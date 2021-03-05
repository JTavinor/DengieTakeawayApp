import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "order",
  initialState: {
    delivery: "delivery",
    basket: [],
    subTotal: 0,
    restaurant: "",
  },
  reducers: {
    deliveryToggled: (order, action) => {
      order.delivery = action.payload.delivery;
    },

    restaurantAdded: (order, action) => {
      if (order.restaurant !== action.payload.restaurant) {
        order.restaurant = action.payload.restaurant;
        order.basket = [];
        order.subTotal = 0;
      } else {
        order.restaurant = action.payload.restaurant;
      }
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
      order.subTotal += action.payload.price;
    },

    itemQuantityUpdated: (order, action) => {
      const index = order.basket.findIndex(
        (item) => item.itemName === action.payload.itemName
      );
      order.subTotal +=
        (action.payload.price / order.basket[index].quantity) *
        action.payload.quantity;
      order.basket[index].price +=
        (action.payload.price / order.basket[index].quantity) *
        action.payload.quantity;
      order.basket[index].quantity =
        order.basket[index].quantity + action.payload.quantity;
    },

    incrementItem: (order, action) => {
      const index = order.basket.findIndex(
        (item) => item.itemName === action.payload.itemName
      );
      order.subTotal += action.payload.price / order.basket[index].quantity;
      order.basket[index].price +=
        action.payload.price / order.basket[index].quantity;
      order.basket[index].quantity += 1;
    },

    decrementItem: (order, action) => {
      const index = order.basket.findIndex(
        (item) => item.itemName === action.payload.itemName
      );

      if (order.basket[index].quantity <= 1) {
        order.subTotal -= order.basket[index].price;
        const basket = [...order.basket];
        const deleted = basket.filter(
          (item) => item.itemName !== action.payload.itemName
        );
        order.basket = deleted;
        return;
      }

      order.subTotal -= action.payload.price / order.basket[index].quantity;
      order.basket[index].price -=
        action.payload.price / order.basket[index].quantity;
      order.basket[index].quantity -= 1;
    },

    itemRemoved: (order, action) => {
      const index = order.basket.findIndex(
        (item) => item.itemName === action.payload.itemName
      );
      order.subTotal -= order.basket[index].price;
      const basket = [...order.basket];
      const deleted = basket.filter(
        (item) => item.itemName !== action.payload.itemName
      );
      order.basket = deleted;
    },
  },
});

export const {
  deliveryToggled,
  basketAdded,
  customerDetailsAdded,
  itemAdded,
  itemQuantityUpdated,
  itemRemoved,
  incrementItem,
  decrementItem,
  restaurantAdded,
} = slice.actions;

export default slice.reducer;
