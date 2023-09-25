import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { useAppDispatch } from "@/redux/store";
import { setUser, SupaUser } from "@/redux/auth.slice";

export default function useSubscription() {
  const history = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const subscribe = supabase.auth.onAuthStateChange(async (_e, session) => {
      dispatch(setUser((session?.user as SupaUser) ?? null));

      if (!session?.user) history("login");
    });

    return () => {
      if (subscribe.data && subscribe.data.subscription) {
        subscribe.data.subscription.unsubscribe();
      }
    };
  }, [dispatch, history]);
}
