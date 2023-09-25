import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { AppThunk } from "@/redux/store";

export interface ExtendedUserMetadata {
  avatar_url: string;
  email: string;
  email_verified: boolean;
  full_name: string;
  iss: string;
  name: string;
  picture: string;
  provider_id: string;
  sub: string;
  user_name: string;
}

export interface SupaUser extends User {
  user_metadata: ExtendedUserMetadata;
}

interface AuthState {
  isLoading: boolean;
  user: SupaUser | null;
  error?: string | null;
}

const initialState: AuthState = {
  isLoading: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SupaUser | null>) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const login = (): AppThunk<Promise<void>> => async (dispatch) => {
  dispatch(setLoading(true));
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
  if (error) dispatch(setError(error.message));
  dispatch(setLoading(false));
};

export const logout = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  const { error } = await supabase.auth.signOut();
  if (error) dispatch(setError(error.message));
  dispatch(setLoading(false));
};

export const { setUser, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
