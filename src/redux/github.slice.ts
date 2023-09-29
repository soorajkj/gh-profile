import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GitHubUser } from "@/types/github";

const github = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_URL!,
  headers: { Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN!}` },
});

const initialState: {
  loggedUser: GitHubUser | null;
  loggedUserRepos: [];
  loading: boolean;
  error: boolean;
} = {
  loggedUser: null,
  loggedUserRepos: [],
  loading: false,
  error: true,
};

export const getLoggedUser = createAsyncThunk(
  "github/getLoggedUser",
  async (userName: string) => {
    const [user, repos] = await Promise.all([
      github.get(`/users/${userName}`),
      github.get(`/users/${userName}/repos`),
    ]);

    return { user: user.data, repos: repos.data };
  }
);

const githubSlice = createSlice({
  name: "github",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLoggedUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLoggedUser.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedUser = action.payload.user;
        state.loggedUserRepos = action.payload.repos;
      })
      .addCase(getLoggedUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default githubSlice.reducer;
