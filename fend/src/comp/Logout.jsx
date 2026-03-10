import React, { useContext, useEffect } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Logout = () => {
  let obj=useContext(Ct)
  let navigate=useNavigate()
  useEffect(()=>{
    obj.updstate({"token":"","hno":"","name":"","role":""})
Cookies.remove("lgdet")
    navigate("/")


  },[])
  return (
    <div>Logout</div>
  )
}

export default Logout