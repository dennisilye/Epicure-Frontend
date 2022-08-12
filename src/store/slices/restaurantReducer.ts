import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { restaurantService } from "../../services/restaurantService";

export const getRestaurants = createAsyncThunk(
  "restaurant/getRestaurants",
  async () => {
    try {
      let restaurants = await restaurantService.query();
      return restaurants;
    } catch (err) {
      console.log(err);
    }
  }
);
export const getRestaurantById = createAsyncThunk(
  "restaurant/getRestaurantById",
  async (resId: string) => {
    try {
      let restaurant = await restaurantService.getById(resId);
      return restaurant;
    } catch (err) {
      console.log(err);
    }
  }
);

export interface RestaurantState {
  value: Restaurant[];
  status: string;
}
const initialState: RestaurantState = {
  value: [],
  status: "",
};

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRestaurants.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getRestaurants.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.value = action.payload;
    });
    builder.addCase(getRestaurants.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export default restaurantSlice.reducer;
