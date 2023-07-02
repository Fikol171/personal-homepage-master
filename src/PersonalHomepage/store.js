import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../PersonalHomepage/common/ThemeSlider/themeSlice";

const store = configureStore({ reducer: themeReducer });

export default store;
