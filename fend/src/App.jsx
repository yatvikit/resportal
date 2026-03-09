import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import Nav from './comp/Nav'
import Login from './comp/Login'
import Reg from './comp/Reg.Jsx'
import Logout from './comp/Logout'
import Disp from './comp/Disp'
import Dispmarks from './comp/Dispmarks'
import Addmarks from './comp/Addmarks'
import { useEffect, useState } from 'react'
import Ct from './comp/Ct.Jsx'
import './App.css'
import Cookies from 'js-cookie'

const App = () => {
  let [state,setState]=useState({"token":"","hno":"","name":"","role":""})
  let updstate=(obj)=>{
    setState({...state,...obj})
  }
  
  useEffect(()=>{
    let x=Cookies.get("lgdet")
    if(x!=undefined)
    {
      updstate(JSON.parse(x))
      
    }

  },[])
  let obj={"state":state,"updstate":updstate}
  return (
    <BrowserRouter>
    <Ct.Provider value={obj}>
    <Nav/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path="/reg" element={<Reg/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path="/disp" element={<Disp/>}/>
      <Route path='/search' element={<Dispmarks/>}/>
      <Route path="/addmarks" element={<Addmarks/>}/>
    </Routes>
    </Ct.Provider>
    </BrowserRouter>
  )
}

export default App