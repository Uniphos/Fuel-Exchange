import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.SB_URL
const supabaseAnonKey = import.meta.env.SB_PUBLIC_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)