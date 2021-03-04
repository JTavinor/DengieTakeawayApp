import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "order",
  initialState: { delivery: "", basket: [] },
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
  },
});

export const {
  deliveryToggled,
  basketAdded,
  customerDetailsAdded,
} = slice.actions;

export default slice.reducer;
