import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Navbar from './components/navbar/Navbar';
import { projectAuth } from './firebase/config';

function App() {
  const [user, setUser]=useState(null)
  const [isReady, setIsReady]=useState(false)

  useEffect(()=>{
    projectAuth.onAuthStateChanged((item)=>{
      setUser(item)
      setIsReady(true)
    })
  },[])
  return (
    <>
      <BrowserRouter>
        <Navbar setUser={setUser} user={user}/>
        {isReady &&
        (<Routes>
          {user && <Route path='/' element={<Home/>}/>}
          {!user && <Route path='/' element={<Navigate to={"/login"}/>}/>}
          {user && <Route path='/login' element={<Navigate to={"/"}/>}/>}
          {!user && <Route path='/login' element={<Login setUser={setUser}/>}/>}
          {user && <Route path='/signup' element={<Navigate to={"/"}/>}/>}
          {!user && <Route path='/signup' element={<Signup setUser={setUser}/>}/>}
        </Routes>)
        }
      </BrowserRouter>
    </>
  )
}

export default App
