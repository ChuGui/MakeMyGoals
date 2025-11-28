import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let supabase: SupabaseClient | null = null

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const url = config.public.supabaseUrl as string | undefined
  const anonKey = config.public.supabaseAnonKey as string | undefined

  if (!url || !anonKey) {
    console.warn('[Supabase] supabaseUrl ou supabaseAnonKey manquant dans runtimeConfig.public')
  }

  if (!supabase && url && anonKey) {
    supabase = createClient(url, anonKey)
  }

  return {
    provide: {
      supabase,
    },
  }
})
