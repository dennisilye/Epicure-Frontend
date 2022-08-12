import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { chefService } from "../../services/chefService";

export const getChefs = createAsyncThunk("chef/getChefs", async () => {
  try {
    let chefs = await chefService.query();
    return chefs;
  } catch (err) {
    console.log(err);
  }
});
export const getChefById = createAsyncThunk(
  "chef/getChefById",
  async (resId: string) => {
    try {
      let chef = await chefService.getById(resId);
      return chef;
    } catch (err) {
      console.log(err);
    }
  }
);

export interface ChefsState {
  value: Chef[];
  singleChef: Chef | null;
  status: string;
}
const initialState: ChefsState = {
  value: [],
  singleChef: null,
  status: "",
};

export const chefSlice = createSlice({
  name: "chefs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getChefs.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getChefs.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.value = action.payload;
    });
    builder.addCase(getChefs.rejected, (state, action) => {
      state.status = "rejected";
    });
    builder.addCase(getChefById.fulfilled, (state, action) => {
      state.singleChef = action.payload;
    });
  },
});

export default chefSlice.reducer;
