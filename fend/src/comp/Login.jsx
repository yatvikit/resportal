import React, { useContext,useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Ct from "./Ct"
import axios from 'axios'
import Cookies from "js-cookie"
const Login = () => {
    let [data,setData]=useState({"uid":"","pwd":""})
    let [msg,setMsg]=useState("")
    let navigate=useNavigate()
    let obj=useContext(Ct)
    let fun=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
    }
    let login=()=>{
      axios.post("http://localhost:5000/login",data).then((res)=>{
        if(res.data.token==undefined)
        {
          setMsg(res.data.msg)
        }
        else{
          obj.updstate(res.data)
          Cookies.set("lgdet",JSON.stringify(res.data),{"expires":3})

          res.data.role=="admin"?navigate("/disp"):navigate("/search")
        }
      })
    }
    useEffect(()=>{
     if( obj.state.role=="admin")
      {
         navigate("/disp")
      }
      if( obj.state.role=="user")
      {
        navigate("/search")
      }
     
    })
  return (
    <div className='form'>
      <h2>{msg}</h2>
       <input type='text' placeholder='Enter e-mail/phno/hno' onChange={fun} name="uid" value={data.uid}/>
         <input type='password' placeholder='Enter password' onChange={fun} name="pwd" value={data.pwd}/>
         <button onClick={login}>Login</button>
    </div>
  )
}

export default Login