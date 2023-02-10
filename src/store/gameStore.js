import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./gameSlice";
import playerSlice from "./playerSlice";

const store = configureStore({
  reducer: {
    gameSlice: gameSlice,
    playerSlice: playerSlice,
  },
});

export default store;
