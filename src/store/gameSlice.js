import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentState: new Array(9).fill(-1),
  currentPlayer: 0,
  winner: -1,
  player: 0,
  history: {
    winCount: 0,
    loseCount: 0,
    ties: 0,
  },
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
      if (state.currentState[action.payload] != -1) return;
      const newState = state.currentState.map((item, index) => {
        if (index === action.payload) {
          return Number(state.currentPlayer);
        }
        return item;
      });

      let newWinner = -1;
      for (let i = 0; i < resultLogic.length; i++) {
        const [a, b, c] = resultLogic[i];
        if (newState[a] === newState[b] && newState[b] === newState[c]) {
          newWinner = newState[a];
          break;
        }
      }
      const isTie = newState.findIndex((item) => item === -1) === -1;
      return {
        currentPlayer: !state.currentPlayer,
        currentState: newState,
        winner: newWinner,
        player: state.player,
        history: {
          winCount:
            newWinner !== -1 && newWinner === state.player
              ? state.history.winCount + 1
              : state.history.winCount,
          loseCount:
            newWinner !== -1 && newWinner !== state.player
              ? state.history.loseCount + 1
              : state.history.loseCount,
          ties: isTie ? state.history.ties + 1 : state.history.ties,
        },
      };
    },
    resetState(state) {
      return {
        currentState: initialState.currentState,
        winner: initialState.winner,
        currentPlayer: state.currentPlayer,
        player: state.player,
        history: state.history,
      };
    },
    resetHistory(state, action) {
      state.history = {
        winCount: 0,
        loseCount: 0,
        ties: 0,
      };
    },
  },
});

export const actions = gameSlice.actions;
export default gameSlice.reducer;
