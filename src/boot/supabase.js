import {createClient} from
'@supabase/supabase-js'

const supabaseUrl = 'https://eskcpbvuvcrbebhhvwoe.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVza2NwYnZ1dmNyYmViaGh2d29lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTYyODE0NjQsImV4cCI6MTk3MTg1NzQ2NH0.kssBrx-3L_gKeMYImbB6FpRqqWg-_uAGERMPzQfUF5c'
const supabase = createClient(supabaseUrl, supabaseKey)

//console.log('init supabase',supabase)

//exportar uma funcao
export default function useSupabase(){
  return {supabase}
}
