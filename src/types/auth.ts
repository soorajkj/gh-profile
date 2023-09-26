import type { AuthError, Session, SupabaseClient } from "@supabase/supabase-js";

export interface AuthState {
  session: Session | null;
  loading: boolean;
  error: AuthError | null;
  supabaseClient: SupabaseClient;
}
