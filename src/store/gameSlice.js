import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentState: new Array(9).fill(-1),
  currentPlayer: 0,
  winner: -1,
};

const resultLogic = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const gameSlice = createSlice({
  initialState,
  name: "gameSlice",
  reducers: {
    setGameBit(state, action) {
      const newState = state.currentState.map((item, index) => {
        if (index == action.payload) {
          return Number(state.currentPlayer);
        }
        return item;
      });

      let newWinner = -1;
      for (let i = 0; i < resultLogic.length; i++) {
        const [a, b, c] = resultLogic[i];
        if (newState[a] === newState[b] && newState[b] === newState[c]) {
          newWinner = newState[a];
        }
      }
      return {
        currentPlayer: !state.currentPlayer,
        currentState: newState,
        winner: newWinner,
      };
    },
  },
});

export const actions = gameSlice.actions;
export default gameSlice.reducer;
