/* eslint-disable react-hooks/exhaustive-deps */

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { SupaUser } from "@/types/auth";
import { supabase } from "@/lib/supabase";
import { useAppDispatch } from "@/redux/store";
import { setUser } from "@/redux/auth.slice";

export default function useSubscription() {
  const dispatch = useAppDispatch();
  const redirect = useNavigate();

  React.useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_e, session) => {
      if (session) {
        dispatch(setUser(session.user as SupaUser));
      } else {
        dispatch(setUser(null));
        redirect("login", { replace: true });
      }
    });

    return () => subscription.unsubscribe();
  }, []);
}
