import React, { createContext, ReactNode, useEffect, useState } from "react";
import { auth, database, storage } from '../services/firebase'

type AuthFirebaseContextType = {
  user: object | undefined
  // SignInWithGoogle: () => Promise<void>
  LoginWithEmailAuth: (email: string, password: string) => Promise<void>
  // SignInWithEmail: (email: string, password: string) => Promise<void>
}
type User = {
  id: string | null
  name: string | null
  avatar: string | null
}
interface AuthFirebaseProviderProps{
  children: ReactNode
}

export const AuthFirebaseContext = createContext({} as AuthFirebaseContextType)

export function AuthFirebaseProvider({children} : AuthFirebaseProviderProps){
  const [ user, setUser ] = useState<User>()

  async function LoginWithEmailAuth(email: string, password: string){
    auth.signInWithEmailAndPassword(email, password).then(result => {
      if(result.user){
        const { displayName, photoURL, uid, } = result.user
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        })
      }
    })
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        const { displayName, photoURL, uid} = user
        if(!displayName){
          throw new Error('Missing information from Google Account.')
        }
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        })
      }
    })
    return () => {
      unsubscribe()
    }
  },[])

  return (
    <AuthFirebaseContext.Provider value={{
      user,
      // SignInWithGoogle,
      // SignInWithEmail,
      LoginWithEmailAuth
    }}>
      {children}
    </AuthFirebaseContext.Provider>
  )
}
