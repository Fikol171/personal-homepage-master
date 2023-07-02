import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { saveThemeSaga } from "../PersonalHomepage/common/ThemeSlider/themeSaga";
import themeReducer from "../PersonalHomepage/common/ThemeSlider/themeSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: themeReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saveThemeSaga);

export default store;
