import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "order",
  initialState: {
    basket: [],
    delivery: "delivery",
    error: null,
    loading: false,
    payment: null,
    restaurant: "",
    restaurantAddress: null,
    subTotal: 0,
  },
  reducers: {
    resetBasket: (order, action) => {
      order.basket = [];
      order.delivery = "delivery";
      order.payment = null;
      order.customerDetails = {};
      order.subTotal = 0;
      order.restaurant = action.payload.restaurant;
      order.orderId = null;
    },

    deliveryToggled: (order, action) => {
      order.delivery = action.payload.delivery;
    },

    paymentToggled: (order, action) => {
      order.payment = action.payload.payment;
    },

    restaurantAdded: (order, action) => {
      if (order.restaurant !== action.payload.restaurant) {
        order.basket = [];
        order.delivery = "delivery";
        order.payment = null;
        order.customerDetails = {};
        order.subTotal = 0;
        order.restaurant = action.payload.restaurant;
        order.orderId = null;
        // order.restaurantAddress = { ...action.payload.restaurantAddress };
      } else {
        // order.restaurantAddress = { ...action.payload.restaurantAddress };
        order.restaurant = action.payload.restaurant;
      }
    },

    restaurantAddressAdded: (order, action) => {
      order.restaurantAddress = { ...action.payload };
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

    orderPostStarted: (order, action) => {
      order.loading = true;
      order.error = null;
    },

    orderPostFailed: (order, action) => {
      order.error = action.payload;
      order.loading = false;
    },

    orderPostSuccess: (order, action) => {
      order.loading = false;
      order.orderId = action.payload._id;
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
  paymentToggled,
  orderPostSuccess,
  orderPostStarted,
  orderPostFailed,
  restaurantAddressAdded,
  resetBasket,
} = slice.actions;

export default slice.reducer;

export const submitOrder = (restaurantName) => (dispatch, getState) => {
  let url = "/orders";

  dispatch(
    apiCallBegan({
      url,
      method: "post",
      data: restaurantName,
      onStart: orderPostStarted.type,
      onSuccess: orderPostSuccess.type,
      onError: orderPostFailed.type,
    })
  );
};
