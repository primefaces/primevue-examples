import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Database } from "./supabase.ts";
function supabaseAdmin() {
  const client = createClient<Database>(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ROLE_KEY") ?? "",
  );
  return client;
}

export { supabaseAdmin };
