import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiResponse, Game } from "../../types/api";
import { axiosInstance } from "./axiosInstance";

export const gamesThunks = createAsyncThunk<
  Game[],
  void,
  { rejectValue: unknown }
>("games/gamesThunks", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<ApiResponse>("games");
    return response.data.results;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return rejectWithValue(err);
    } else {
      throw err;
    }
  }
});
