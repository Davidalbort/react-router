import { useForm, SubmitHandler} from "react-hook-form";
import { Navigate, NavigationType, useNavigate } from "react-router-dom";
import { useAuth} from "../../hooks/useAuth";

interface LoginPageState {
  Inputs: {
    userName: string
  }
}

const LoginPage = () => {
  const navigate = useNavigate();
  const auth=useAuth();
  const { register, handleSubmit}= useForm<LoginPageState['Inputs']>();
  const onSubmit: SubmitHandler<LoginPageState['Inputs']> = data => {
        auth?.login(data.userName)
        navigate('/profile')
  }
  if(auth?.user?.userName) return <Navigate to='/profile'/>
  return(
    <>
      <h1> Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("userName")}/>
        <input type="submit"/>
      </form>
    </>
  )
}

export { LoginPage };