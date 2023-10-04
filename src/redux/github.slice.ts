import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GithubUser, GithubUserArr } from "@/types/github";

const github = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_URL!,
  headers: { Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN!}` },
});

const initialState: {
  users: GithubUserArr[];
  userData: GithubUser | null;
  userRepos: [];
  userFollowers: [];
  loading: boolean;
  error: boolean;
} = {
  users: [],
  userData: null,
  userRepos: [],
  userFollowers: [],
  loading: false,
  error: true,
};

export const fetchUsers = createAsyncThunk(
  "github/fetchUsers",
  async (userName: string) => {
    const params = new URLSearchParams({ q: userName });
    const { data } = await github.get(`/search/users?${params}`);
    return data.items;
  }
);

export const fetchUserData = createAsyncThunk(
  "github/fetchUserData",
  async (userName: string) => {
    const [userData, userRepos, userFollowers] = await Promise.all([
      github.get(`/users/${userName}`),
      github.get(`/users/${userName}/repos`),
      github.get(`/users/${userName}/followers`),
    ]);
    return {
      userData: userData.data,
      userRepos: userRepos.data,
      userFollowers: userFollowers.data,
    };
  }
);

const githubSlice = createSlice({
  name: "github",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload.userData;
        state.userRepos = action.payload.userRepos;
        state.userFollowers = action.payload.userFollowers;
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });

    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default githubSlice.reducer;
