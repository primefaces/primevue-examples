export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      admin: {
        Row: {
          created_at: string | null
          first_name: string | null
          id: string
          last_name: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          user_id?: string | null
        }
      }
      client: {
        Row: {
          created_at: string | null
          full_name: string | null
          id: string
          location: string | null
          phone: string | null
        }
        Insert: {
          created_at?: string | null
          full_name?: string | null
          id?: string
          location?: string | null
          phone?: string | null
        }
        Update: {
          created_at?: string | null
          full_name?: string | null
          id?: string
          location?: string | null
          phone?: string | null
        }
      }
      command: {
        Row: {
          client_id: string | null
          created_at: string | null
          id: string
          location: string | null
          state: string | null
        }
        Insert: {
          client_id?: string | null
          created_at?: string | null
          id?: string
          location?: string | null
          state?: string | null
        }
        Update: {
          client_id?: string | null
          created_at?: string | null
          id?: string
          location?: string | null
          state?: string | null
        }
      }
      command_menu: {
        Row: {
          command_id: string | null
          created_at: string | null
          id: string
          menu_id: string | null
          quantity: number
        }
        Insert: {
          command_id?: string | null
          created_at?: string | null
          id?: string
          menu_id?: string | null
          quantity?: number
        }
        Update: {
          command_id?: string | null
          created_at?: string | null
          id?: string
          menu_id?: string | null
          quantity?: number
        }
      }
      menu: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          isAvailable: boolean | null
          likes: number | null
          name: string | null
          price: number | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          isAvailable?: boolean | null
          likes?: number | null
          name?: string | null
          price?: number | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          isAvailable?: boolean | null
          likes?: number | null
          name?: string | null
          price?: number | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
