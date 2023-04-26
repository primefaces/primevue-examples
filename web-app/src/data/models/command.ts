
export interface Order {
  id: string
  created_at: string
  location: string
  state: string
  items: Item[]
}

export interface Item {
  quantity: number
  menu: Menu
}

export interface Menu {
  id: string
  name: string
}


// export interface Order {
//   id: string
//   created_at: string
//   client_id: string
//   state: string
//   location: string
// }
export interface OrderRequest {
  clientId: string;
  location: string | null;
  items: { menu_id: string; quantity: number }[];
}
