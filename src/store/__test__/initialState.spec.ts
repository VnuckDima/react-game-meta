import gamesReducer, { initialState } from "../slices/gamesSlice";
import { describe, expect, it } from 'vitest'

describe("initial state", () => {
    it('check initial state', () => {
        const state = gamesReducer(undefined, { type: "unknown" });

        expect(state).toEqual(initialState);
    })
});
