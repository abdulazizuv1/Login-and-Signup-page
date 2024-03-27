import React from 'react'
import "./Navbar.css"
import {NavLink,Link} from 'react-router-dom'
import { projectAuth } from '../../firebase/config';

function Navbar({user, setUser}) {
  console.log(user);
  return (
    <nav>
      <div className="container">
        <h1><Link to={"/"}>MyMoney</Link></h1>
        {user && 
        (<div className="links">
          <h1>{user?.displayName}</h1>
          <button onClick={()=>{
            projectAuth.signOut()
            setUser(null)
          }} className='logout_button'>Log Out</button>      
        </div>)
        }
        {!user && 
          (<div className="links">
          <NavLink to={"/signup"}>
            Signup
          </NavLink>
          <NavLink to={"/login"}>
            Login
          </NavLink>          
      </div>)}
      </div>
    </nav>
  )
}

export default Navbar