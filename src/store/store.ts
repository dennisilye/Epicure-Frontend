import { configureStore } from "@reduxjs/toolkit";
import chefReducer from "./slices/chefReducer";
import dishReducer from "./slices/dishReducer";
import restaurantReducer from "./slices/restaurantReducer";

// import contactReducer from "./slices/contactSlice";
// import userReducer from "./slices/userSlice";
// import commentReducer from "./slices/commentSlice";

export const store = configureStore({
  reducer: {
    dish: dishReducer,
    restaurant: restaurantReducer,
    chef: chefReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
