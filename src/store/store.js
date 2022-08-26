import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "./property/propertySlice";

export const store = configureStore({
  reducer: {
    property: propertyReducer,
  },
});
