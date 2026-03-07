import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './comp/Nav'
import Login from './comp/Login'
import Reg from './comp/Reg.Jsx'
import Logout from './comp/Logout'
import Disp from './comp/Disp'
import Dispmarks from './comp/Dispmarks'
import Addmarks from './comp/Addmarks'
import { useState } from 'react'
import Ct from './comp/Ct.Jsx'

const App = () => {
  let [state,setState]=useState({"token":"fghfg","hno":"","name":"","role":"admin"})
  let updstate=(obj)=>{
    setState({...state,...obj})
  }
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