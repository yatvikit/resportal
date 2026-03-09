import React, { useState } from 'react'
import axios from "axios"

const Reg = () => {
  let [data,setData]=useState({"name":"","phno":"","email":"","pwd":""})
  let [msg,setMsg]=useState("")
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  let reg=()=>{
    axios.post("http://localhost:5000/reg",data).then((res)=>{
      setMsg(res.data.msg)
    })
  }
  return (
    <div className='form'>
      <h2>{msg}</h2>
      <input type='text' placeholder='Enter Name' onChange={fun} name="name" value={data.name}/>
       <input type='text' placeholder='Enter phno' onChange={fun} name="phno" value={data.phno}/>
        <input type='text' placeholder='Enter e-mail' onChange={fun} name="email" value={data.email}/>
         <input type='password' placeholder='Enter password' onChange={fun} name="pwd" value={data.pwd}/>
         <button onClick={reg}>Register</button>

    </div>
  )
}

export default Reg