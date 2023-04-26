export interface OrderRequest {
  clientId: string;
  location: string;
  items: { menu_id: string; quantity: number }[];
}
