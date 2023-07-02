import { createSlice } from "@reduxjs/toolkit";
import { SaveInLocalStorage, themeInLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isTheme: themeInLocalStorage,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isTheme = !state.isTheme;
      SaveInLocalStorage();
    },
  },
});

export const selectThemeState = (state) => state.isTheme;
export const { toggleTheme } = themeSlice.actions;
export const selectLightTheme = (state) => selectThemeState(state).isTheme;
export default themeSlice.reducer;
