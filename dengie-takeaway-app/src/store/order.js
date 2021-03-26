import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "order",
  initialState: {
    basket: [],
    restaurant: "",
    restaurantAddress: null,
    subTotal: 0,
    deliveryOption: "delivery",
    error: null,
    loading: false,
    paymentOption: null,
  },
  reducers: {
    // Actions for handling radio group selections for delivery and payment
    deliveryOptionToggled: (order, action) => {
      order.deliveryOption = action.payload.delivery;
    },

    paymentOptionToggled: (order, action) => {
      order.paymentOption = action.payload.paymentOption;
    },

    // Resets the order if the user navigates to a different restaurants menu
    // Adds the current restaurant name to the store
    restaurantAdded: (order, action) => {
      if (order.restaurant !== action.payload.restaurant) {
        order.basket = [];
        order.deliveryOption = "delivery";
        order.paymentOption = null;
        order.customerDetails = {};
        order.subTotal = 0;
        order.restaurant = action.payload.restaurant;
        order.orderId = null;
      } else {
        order.restaurant = action.payload.restaurant;
      }
    },

    // Adds the restaurants address to the order
    restaurantAddressAdded: (order, action) => {
      order.restaurantAddress = { ...action.payload };
    },

    // In the checkout the user fills in a form witht their details.
    // On submission dispatch this action
    customerDetailsAdded: (order, action) => {
      order.customerDetails = action.payload.customerDetails;
    },

    // Checks to see if item exists in basket already
    // If no such item, adds the item including quantity being added and total price
    // If item already in basket, updates the quantity, price, and subtotal
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
        order.basket[index].quantity += action.payload.quantity;
        order.basket[index].price += action.payload.price;
      }
      order.subTotal += action.payload.price;
    },

    // Finds an item in the basket and increments it by one
    incrementItem: (order, action) => {
      const index = order.basket.findIndex(
        (item) => item.itemName === action.payload.itemName
      );
      order.subTotal += action.payload.price / order.basket[index].quantity;
      order.basket[index].price +=
        action.payload.price / order.basket[index].quantity;
      order.basket[index].quantity += 1;
    },

    // Finds an item in the basket and decements it by one
    // If the item quantity gets decremented to zero, removes it from the basket
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

    // Handles the API call for posting the users order to the database
    orderPostStarted: (order, action) => {
      order.loading = true;
      order.error = null;
    },

    orderPostFailed: (order, action) => {
      order.error = action.payload;
      order.loading = false;
    },

    // Resets the order if posted successfully
    orderPostSuccess: (order, action) => {
      order.loading = false;
      order.orderId = action.payload._id;
      order.basket = [];
      order.deliveryOption = "delivery";
      order.paymentOption = null;
      order.customerDetails = {};
      order.subTotal = 0;
      order.restaurant = action.payload.restaurant;
    },
  },
});

export const {
  customerDetailsAdded,
  deliveryOptionToggled,
  decrementItem,
  incrementItem,
  itemAdded,
  paymentOptionToggled,
  orderPostSuccess,
  orderPostStarted,
  orderPostFailed,
  restaurantAdded,
  restaurantAddressAdded,
} = slice.actions;

export default slice.reducer;

// Starts an API POST request for adding an order to the DB
export const submitOrder = (order) => (dispatch, getState) => {
  let url = "/orders";

  dispatch(
    apiCallBegan({
      url,
      method: "post",
      data: order,
      onStart: orderPostStarted.type,
      onSuccess: orderPostSuccess.type,
      onError: orderPostFailed.type,
    })
  );
};
