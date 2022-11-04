import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface PropsAuthRoute {
  children: JSX.Element| React.ReactNode
}

const AuthRoute = ({children}:PropsAuthRoute) => {
  const auth = useAuth();
  if(!auth?.user) {
    return <Navigate to='/login' />
  }
  return(
    <>
     {children}
    </>
  )
}

export { AuthRoute };