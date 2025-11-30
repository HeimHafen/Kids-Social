// src/hooks/useSupabaseAuth.ts
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export interface AuthUser {
  id: string;
  email: string | null;
}

export function useSupabaseAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      const { data, error } = await supabase.auth.getSession();
      if (!isMounted) return;
      if (error) {
        console.error("[Kids-Social] Error loading session", error);
      }
      const sessionUser = data.session?.user ?? null;
      setUser(
        sessionUser ? { id: sessionUser.id, email: sessionUser.email } : null
      );
      setLoading(false);
    }

    load();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const sUser = session?.user ?? null;
      setUser(sUser ? { id: sUser.id, email: sUser.email } : null);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  async function signOut() {
    await supabase.auth.signOut();
  }

  return { user, loading, signOut };
}