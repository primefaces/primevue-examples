import { createClient } from "https://esm.sh/@supabase/supabase-js@2.11.0";
import { Database } from "./supabase.ts";

function supbaseClient(jwtKey: string) {
  const client = createClient<Database>(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    {
      global: {
        headers: {
          Authorization: jwtKey,
        },
      },
    }
  );
  return client;
}

export { supbaseClient };
