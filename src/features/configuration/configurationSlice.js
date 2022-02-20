import { createSlice } from "@reduxjs/toolkit";
import { formatConfig } from "../../utils/helpers/functions";

const initialState = {
  value: {},
};

export const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    fetchSiteConfig: (state, action) => {
      state.value = formatConfig(action.payload.data);
    },
  },
});

export const { fetchSiteConfig } = configurationSlice.actions;

export default configurationSlice.reducer;
