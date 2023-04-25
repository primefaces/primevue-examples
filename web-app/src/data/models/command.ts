import type { Item } from "./items";

export interface Order {
  id: string;
  dateOrder: string;
  state: string;
  items: OrderItem[];
}
export interface OrderItem {
  item: Item;
  quantity: number;
}
