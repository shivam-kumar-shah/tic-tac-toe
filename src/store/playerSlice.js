import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    player: 0,
    history: {
        winCount: 0,
        loseCount: 0,
        ties: 0,
    },
}

const playerSlice = createSlice({
    initialState,
    name: "playerSlice",
    reducers: {
        setPlayer(state, action) {
            state.player = Number(action.payload);
        },
        addToHistory(state, action) {
            const result = action.payload;
            if (result === "win") {
                state.history.winCount += 1;
            }
            else if (result == + "lose") {
                state.history.loseCount += 1;
            }
            else {
                state.history.ties += 1;
            }
        },
        resetHistory(state, action) {
            state.history = {
                winCount: 0,
                loseCount: 0,
                ties: 0,
            }
        }
    }
})

export const actions = playerSlice.actions;

export default playerSlice.reducer;