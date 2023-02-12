import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./gameSlice";

const store = configureStore({
  reducer: {
    gameSlice: gameSlice,
  },
});

export default store;
