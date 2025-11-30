import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  // Für dev: klare Fehlermeldung
  console.warn(
    "[Kids-Social] Supabase-Umgebungsvariablen fehlen. Bitte .env setzen."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);