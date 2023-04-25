import { createClient } from "@supabase/supabase-js";
const supabaseClient = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);
export default { supabaseClient };
