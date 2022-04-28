import { configureStore } from "@reduxjs/toolkit";

import toggleReducer from "./toggle";

export default configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});
