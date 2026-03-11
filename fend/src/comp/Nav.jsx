import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Ct from './Ct.Jsx'
import './Nav.css'

const Nav = () => {
    let obj=useContext(Ct)
  return (
    <div className='nav'>
     {obj.state.token==""?<>
     <Link to="/">Login</Link>
     <Link to="/reg">Register</Link>
     </>:<>
     {obj.state.role=="user"?<Link to="/search">Search</Link>:<>
     <Link to="/disp">Disp</Link>
     <Link to="/addmarks/''">AddMarks</Link></>}
     <Link to="/logout">Logout</Link>
     </>}   

    </div>
  )
}

export default Nav