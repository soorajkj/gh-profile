import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SupaUser } from "@/types/auth";
import { supabase } from "@/lib/supabase";
import { AppThunk } from "./store";

export const authSlice = createSlice({
  name: "auth",
  initialState: { user: null as SupaUser | null },
  reducers: {
    setUser: (state, action: PayloadAction<SupaUser | null>) => {
      state.user = action.payload;
    },
  },
});

export const login = async () => {
  const { error: _error, data: _data } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: { redirectTo: window.location.origin },
  });
};

export const logout = (): AppThunk => async (dispatch) => {
  const { error } = await supabase.auth.signOut();
  if (!error) dispatch(setUser(null));
};

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
