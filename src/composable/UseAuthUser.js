import { ref } from 'vue'
import useSupabase from 'src/boot/supabase'


const user = ref(null)

export default function useAuthUser(){

  const {supabase} = useSupabase()

  //metodo resposavel pelo login
  const login = async ({email, password}) => {
    const {user, error} = await supabase.auth.signIn({email, password})
    if(error) throw error
    return user
  }

  //metodo responsavel por fazer login atraves de um providor (rede social, google....)
  const loginWithSocialProvider = async (provider) => {
    const {user, error} = await supabase.auth.signIn({provider})
    if(error) throw error
    return user
  }

  //metodo responsavel pelo logout
  const logout = async () => {
    const {error} = await supabase.auth.signOut()
    if(error) throw error
  }

  //verifica se o usuario esta logado
  const isLoggedIn = () => {
    return !!user.value
  }

  //para cadastrar um novo usuario
  const register = async({email, password, ...meta}) => {
    const {user, error} = await supabase.auth.signUp(
      { email, password },
      {
      data: meta,
      redirectTo:`${window.location.origin}/me?fromEmail=registrationConfirmation`
      }
    )
    if(error) throw error
    return user
  }

  //metodo para actualizar um a informacao
  const update = async (data) => {
    const {user, error} = await supabase.auth.update(data)
    if(error) throw error
    return user

  }

  const sendPasswordResetEmail = async(email) => {
    const {user, error} = await supabase.auth.api.resetPasswordForEmail(email)
    if(error) throw error
    return user
  }

  return{
    user,
    login,
    loginWithSocialProvider,
    logout,
    isLoggedIn,
    register,
    update,
    sendPasswordResetEmail
  }
}
