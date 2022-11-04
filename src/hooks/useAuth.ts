import React from 'react';
import { AuthContext } from '../context/AuthContext';

function useAuth () {
  const auth = React.useContext(AuthContext)
  return auth
}

export { useAuth };