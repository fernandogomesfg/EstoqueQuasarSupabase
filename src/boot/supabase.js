import {createClient} from '@supabase/supabase-js'
import useAuthUser from 'src/composable/UseAuthUser'

const supabaseUrl = 'https://eskcpbvuvcrbebhhvwoe.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVza2NwYnZ1dmNyYmViaGh2d29lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTYyODE0NjQsImV4cCI6MTk3MTg1NzQ2NH0.kssBrx-3L_gKeMYImbB6FpRqqWg-_uAGERMPzQfUF5c'
const supabase = createClient(supabaseUrl, supabaseKey)

//console.log('init supabase',supabase)

//actualizar o usuario depois de receber uma modificacao
supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()

  user.value = session?.user || null
})

//exportar uma funcao
export default function useSupabase(){
  return {supabase}
}
