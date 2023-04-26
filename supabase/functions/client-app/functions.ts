import { corsHeaders } from "../_shared/cors.ts";
import { supabaseAdmin } from "../_shared/supabaseAdmin.ts";
import { Client, Order } from "../_shared/models.ts";
import { OrderRequest } from "../_shared/request-model.ts";
import { makeResponse } from "../_shared/helpers.ts";
async function createNewClient(client: Client) {
  const { data: profiles, error } = await supabaseAdmin()
    .from("client")
    .insert(
      client
      //    JSON.stringify(client)
    )
    .select();
  if (error) {
    if (error.code == "23505") {
      supabaseAdmin()
        .from("client")
        .update({
          full_name: client.full_name,
          location: client.location,
          phone: client.phone,
        })
        .eq("phone", client.phone);
      return new Response(
        JSON.stringify({ message: "Ce numéro existe déjà" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    } else {
      throw error;
    }
  }

  return new Response(JSON.stringify({ profiles }), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
    status: 200,
  });
}
async function makeOrder(params: OrderRequest) {
  // create commande
  const { data, error } = await supabaseAdmin()
    .from("command")
    .insert({
      client_id: params.clientId,
      location: params.location,
      state: "En attente",
    })
    .select();

  if (error) {
    return new Response(
      JSON.stringify({
        message: "Une erreur s'est produite",
        error: error.code,
      }),
      {
        status: 400,
      }
    );
  }
  const command_menus: {
    menu_id: string;
    command_id: string;
    quantity: number;
  }[] = [];
  params.items.forEach((i) => {
    command_menus.push({
      menu_id: i.menu_id,
      command_id: data[0].id,
      quantity: i.quantity,
    });
  });
  const res = await supabaseAdmin().from("command_menu").insert(command_menus);
  if (res.error) {
    return new Response(
      JSON.stringify({
        message: "Nous n'avons pas pu ajouter de menu",
        error: res.error.code,
      }),
      { status: 400 }
    );
  }

  return new Response(
    JSON.stringify({ message: "Votre commande a été bien enregistrée" }),
    {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    }
  );
}

async function getHistory(client_id: string) {
  //   const orders: {
  //     id: string;
  //     dateOrder: string;
  //     location: string | null;
  //     state: string;
  //   }[] = [];
  const res = await supabaseAdmin()
    .from("command")
    .select("*")
    .eq("client_id", client_id);

  const order: {
    id: string;
    created_at: string | null;
    location: string | null;
    state: string | null;
    items:
      | {
          menu:
            | { id: string; name: string | null }
            | { id: string; name: string | null }[]
            | null;
          quantity: number;
        }[]
      | null;
  }[] = [];
  await Promise.all(
    res.data!.map(async (val) => {
      const menuList = await supabaseAdmin()
        .from("command_menu")
        .select("menu(id,name),quantity").eq("command_id",val.id);
      order.push({
        id: val.id,
        created_at: val.created_at,
        location: val.location,
        state: val.state,
        menuList: menuList.data,
      });
    })
  );

  //   res.data?.forEach((val) => {

  //   });

  return makeResponse(JSON.stringify(order), 200);
}

async function getCommandMenu(command_id: string) {
  const item = await supabaseAdmin()
    .from("command_menu")
    .select("menu(id,name),quantity")
    .eq("command_id", command_id);

  return makeResponse(JSON.stringify(item.data), 200);
}

export { createNewClient, makeOrder, getHistory, getCommandMenu };
