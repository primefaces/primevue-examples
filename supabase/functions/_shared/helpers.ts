import { corsHeaders } from "./cors.ts";

function makeResponse(body: any, status: number) {
  return new Response(body, {
    status: status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

export{makeResponse}