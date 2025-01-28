import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import SettingsPage from "./pages/SettingsPage"
import ProfilePage from "./pages/ProfilePage"
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react'
import { Loader } from "lucide-react"

const App = () => {
  const {authUser,checkAuth,isCheckingAuth} = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [])

  console.log({authUser});
  if(isCheckingAuth && !authUser) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader className='size-10 animate-spin'/>
      </div>
    )
  }

  return (
    <div>
      <Navbar/>
      <main>
        <Routes>
          <Route path='/' element={ authUser ? <HomePage/> : <LoginPage/>} />
          <Route path='/signup' element={ !authUser ? <SignUpPage/> : <HomePage/>} />
          <Route path='/login' element={!authUser ? <LoginPage/> : <HomePage/>} />
          <Route path='/settings' element={<SettingsPage/>} />
          <Route path='/profile' element={ authUser ? <ProfilePage/> : <LoginPage/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App