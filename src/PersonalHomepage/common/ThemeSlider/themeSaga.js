import { takeEvery, select, call } from "redux-saga/effects";
import { saveInLocalStorage } from "./themeLocalStorage";
import { selectThemeState } from "./themeSlice";

function* fetchThemeHandler() {
  const setTheme = yield select(selectThemeState);
  yield call(saveInLocalStorage, setTheme);
}

export function* saveThemeSaga() {
  yield takeEvery("*", fetchThemeHandler);
}
