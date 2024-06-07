import { describe, expect, it } from "vitest";
import { gamesThunks } from "../../shared/api/gamesThunks";
import gamesReducer, { initialState } from "../slices/gamesSlice";

describe("gamesSlice", () => {
  it("should handle gamesThunks.pending", () => {
    const action = { type: gamesThunks.pending.type };
    const state = gamesReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      loading: true,
      error: null,
    });
  });

  it("should handle gamesThunks.fulfilled", () => {
    const games = [
      { id: 1, name: "Game 1" },
      { id: 2, name: "Game 2" },
    ];
    const action = { type: gamesThunks.fulfilled.type, payload: games };
    const state = gamesReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      games,
      loading: false,
    });
  });

  it("should handle gamesThunks.rejected with payload", () => {
    const error = { message: "Something went wrong" };
    const action = {
      type: gamesThunks.rejected.type,
      payload: error,
      error: true,
      meta: { rejectedWithValue: true },
    };
    const state = gamesReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      loading: false,
      error: error.message,
    });
  });

  it("should handle gamesThunks.rejected without payload", () => {
    const action = {
      type: gamesThunks.rejected.type,
      payload: undefined,
      error: true,
      meta: { rejectedWithValue: true },
    };
    const state = gamesReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      loading: false,
      error: "Something went wrong",
    });
  });
});
