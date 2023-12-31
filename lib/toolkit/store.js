import { configureStore } from "@reduxjs/toolkit";
import { rootSlices } from "./rootSlices";

export const store = configureStore({
  reducer: rootSlices,
});
