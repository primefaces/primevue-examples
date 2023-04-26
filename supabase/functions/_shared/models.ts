export interface Client {
  id: string;
  full_name: string;
  location: string;
  phone: string;
}
export interface Item {
  id: string;
  name: string;
  price: number;
  likes: number;
  description: string;
  images: string[];
}
export interface Order {
  id: string;
  dateOrder: string;
  state: string;
  items: OrderItem[];
  clientId: string;
  location: string | null;
}
export interface OrderItem {
  item: Item;
  quantity: number;
}

function typeToJson() {
  return {
    client: {
      id: "string",
      full_name: "string",
      location: "string",
    },
    item: {
      id: "string",
      name: "string",
      price: "number",
      likes: "number",
      description: "string",
      images: [],
    },
  };
}

export { typeToJson };
