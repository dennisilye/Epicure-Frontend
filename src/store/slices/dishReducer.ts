import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { dishService } from "../../services/dishService";

export const getDishes = createAsyncThunk("dishes/getDishes", async () => {
  try {
    let dishes = await dishService.query();
    return dishes;
  } catch (err) {
    console.log(err);
  }
});

export interface DishState {
  value: Dish[];
  status: string;
}
const initialState: DishState = {
  value: [],
  status: "",
};

export const dishSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDishes.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getDishes.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.value = action.payload;
    });
    builder.addCase(getDishes.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export default dishSlice.reducer;
