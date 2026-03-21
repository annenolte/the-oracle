import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

function isPlaceholder(value) {
  if (!value) return true
  return (
    value.startsWith('YOUR_') ||
    value.includes('YOUR_SUPABASE_URL') ||
    value.includes('YOUR_SUPABASE_ANON_KEY')
  )
}

function validateSupabaseConfig(url, anonKey) {
  if (isPlaceholder(url) || isPlaceholder(anonKey)) {
    return 'Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in frontend/.env and restart the dev server.'
  }

  try {
    // eslint-disable-next-line no-new
    new URL(url)
  } catch {
    return 'VITE_SUPABASE_URL is not a valid URL. Update frontend/.env and restart the dev server.'
  }

  return null
}

export const supabaseConfigError = validateSupabaseConfig(
  supabaseUrl,
  supabaseAnonKey
)

export const supabase = supabaseConfigError
  ? null
  : createClient(supabaseUrl, supabaseAnonKey)
