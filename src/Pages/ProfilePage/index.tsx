import { useAuth } from "../../hooks/useAuth";


const ProfilePage = () => {
  const auth = useAuth();
  console.log(auth?.user)
  return(
    <>
      <h2>ProfilePage</h2>
      <p>Welcome, {auth?.user?.userName}</p>
    </>
  )
}

export { ProfilePage };