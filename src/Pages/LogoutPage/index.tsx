import React from "react";
import { useAuth } from "../../hooks/useAuth";

const LogoutPage = () => {
  const auth = useAuth();
  const logout = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    auth?.logout()
  }
  return (
    <>
      <h1>Logout</h1>
      <form action="" onSubmit={logout}>
        <label>Seguro quieres salir?</label>
        <button type="submit">Salir</button>
      </form>
    </>
  )
}

export { LogoutPage };