import { configureStore } from "@reduxjs/toolkit";
import theme from "./theme/themeSlice";
import auth from "./auth/authSlice";

const store = configureStore({
  reducer: {
    theme,
    auth,
  },
});

export default store;
