import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextState {
  user: StateAuthProvider['user'] | null
  login: (userName: string) => void
  logout: () => void
}

const AuthContext = React.createContext<AuthContextState | null>(null);

interface PropsAuthProvider {
  children: JSX.Element| React.ReactNode
}
interface StateAuthProvider {
  user: {
    userName: string
    isAdmin: Boolean
  }
}
const adiminList = ['Irisval','ReataxMaster','Freddier'];
function AuthProvider ({children}:PropsAuthProvider ) {
  const navigate = useNavigate();
  const [user,setUser]= useState<StateAuthProvider['user']| null>(null);
  const login = (userName: string) => {
    const isAdmin: boolean = adiminList.some(admin => admin===userName);
    setUser({userName,isAdmin});
    navigate('/profile')
    
  }
  const logout = () => {
    setUser(null)
    navigate('/')
  }
  const auth: AuthContextState = {
    user:user,
    login:login,
    logout:logout
  }
  return (

    <AuthContext.Provider value={auth} > {children} </AuthContext.Provider>
  )

  
    


    
  ;
}


export{
  AuthProvider,
  AuthContext
};   



