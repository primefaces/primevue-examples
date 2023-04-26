// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { typeToJson } from "../_shared/models.ts";
import { createNewClient, getCommandMenu, getHistory, makeOrder } from "./functions.ts";

serve(async (req) => {
  const { url, method } = req;
  if (method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const taskPattern = new URLPattern({ pathname: "/client-app/:action" });
    const matchingPath = taskPattern.exec(url);
    const action = matchingPath ? matchingPath.pathname.groups.action : null;

    console.log(`server url : ${req.url}`);
    const queries = new URLSearchParams(req.url.split("?")[1]);

    const param_id = queries.get("param_id");
    console.log(`client id : ${param_id}`);

    
    let requestBody = null;
    if (method === "POST" || method === "PUT") {
      const body = await req.json();
      console.log(body);
      requestBody = body;
    }
    switch (true) {
      case method === "POST" && action === "new-client":
        return createNewClient(requestBody);
      case method === "POST" && action === "new-command":
        return makeOrder(requestBody);
      case method === "GET" && action === "types":
        return new Response(JSON.stringify({ models: typeToJson() }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        });
      case method === "GET" && action === "history" && param_id !== null:
        return getHistory(param_id!);
      case method === "GET" && action === "command-menu" && param_id !== null:
        return getCommandMenu(param_id!);
      default:
        return new Response(JSON.stringify({ requestBody }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
