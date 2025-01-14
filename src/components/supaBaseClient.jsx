import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SB_URL
const supabaseAnonKey = import.meta.env.VITE_SB_PUBLIC_KEY

export const supabase = createClient(
    supabaseUrl, 
    supabaseAnonKey
)