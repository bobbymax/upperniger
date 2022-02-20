import { configureStore } from "@reduxjs/toolkit";
import configurationReducer from "../features/configuration/configurationSlice";

export const store = configureStore({
  reducer: {
    configuration: configurationReducer,
  },
});
