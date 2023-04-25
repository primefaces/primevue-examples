import { createClient } from "https://esm.sh/@supabase/supabase-js@2.11.0";

function supbaseClient(jwtKey: string) {
  const client = createClient(
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
