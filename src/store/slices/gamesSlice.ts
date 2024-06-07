import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { gamesThunks } from "../../shared/api/gamesThunks";
import { Game } from "../../types/api";

export interface GamesState {
  games: Game[];
  loading: boolean;
  error: string | null;
}

export const initialState: GamesState = {
  games: [],
  loading: false,
  error: null,
};

interface ErrorPayload {
  message: string;
}

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(gamesThunks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        gamesThunks.fulfilled,
        (state, action: PayloadAction<Game[]>) => {
          state.games = action.payload;
          state.loading = false;
        }
      )
      .addCase(
        gamesThunks.rejected.type,
        (
          state,
          action: PayloadAction<
            ErrorPayload,
            string,
            { rejectedWithValue: true }
          >
        ) => {
          state.loading = false;
          if (action.payload) {
            state.error = action.payload.message || "Something went wrong";
          } else {
            state.error = "Something went wrong";
          }
        }
      );
  },
});

export default gamesSlice.reducer;
