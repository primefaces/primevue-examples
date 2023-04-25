import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

function supabaseAdmin() {
  const client = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ROLE_KEY") ?? "",

    // {
    //   global: {
    //     headers: {
    //       Authorization: jwtKey,
    //     },
    //   },
    // }
  );
  return client;
}

export { supabaseAdmin };
