export const saveInLocalStorage = (isTheme) => {
  localStorage.setItem("theme", JSON.stringify(isTheme));
};

export const themeInLocalStorage = () => {
  return JSON.parse(localStorage.getItem("theme"));
};
