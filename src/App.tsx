import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { HomePage } from './Pages/HomePage';
import { BlogPage } from './Pages/BlogPage';
import { ProfilePage } from './Pages/ProfilePage';
import { Menu } from './components/Menu';
import { BlogPost } from './Pages/BlogPost';
import { LoginPage } from './Pages/LoginPage';
import { LogoutPage } from './Pages/LogoutPage';
import {  AuthProvider } from './context/AuthContext';
import { AuthRoute } from './components/AuthRoute';
import './App.css'


function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/blog/:slug' element={<BlogPost />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/logout' 
              element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
              } 
            />
            <Route path='/profile' 
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              } 
            />
            <Route path='*' element={<p>No found</p>} />


          </Routes>

        </AuthProvider>
      </HashRouter>

    </>
  )
}

export default App
