import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'
const Addmarks = () => {
  let [hnos,setHnos]=useState([])
  let obj=useContext(Ct)
  let navigate=useNavigate()
  let [rollno,setRoll]=useState("")
  let [data,setData]=useState({})
  let [marks,setMarks]=useState({"sub1":"","sub2":"","sub3":"","sub4":""})
  useEffect(()=>{
    let x=Cookies.get("lgdet")
    if(x==undefined)
    {
      navigate("/")
    }
    else{
      axios.get("http://localhost:5000/gethnos").then((res)=>{
        
        setHnos(res.data)
      })
    }

  },[])
  let getdata=(e)=>{
    setRoll(e.target.value)
    axios.get(`http://localhost:5000/getdet/${e.target.value}`).then((res)=>{
setData(res.data)
    })
  }
  let updmarks=(e)=>{
    setMarks({...marks,[e.target.name]:e.target.value})
  }
  let add=()=>{
    axios.put("http://localhost:5000/updmarks",{...marks,"_id":rollno}).then(()=>{
      setRoll("")
      setData({})
    })
  }
  return (
    <div>
      <select value={rollno} onChange={getdata}>
        <option value="" disabled>---select HNO---</option>
        {
          hnos.map((obj)=><option value={obj._id}>{obj._id}</option>)
        }
      </select>

     {data._id!=undefined&&<table border={1}>
        <tr>
          <th>HNO</th><td>{data._id}</td>
        </tr>
        <tr>
          <th>Name</th><td>{data.name}</td>
        </tr>
        <tr>
          <th>E-mail</th><td>{data.email}</td>
        </tr>
        <tr>
          <th>Phno</th><td>{data.phno}</td>
        </tr>
        {
          data.marks.length==0?<>
          <input type='text' placeholder='sub1' name="sub1" onChange={updmarks}/>
          <input type='text' placeholder='sub2' name="sub2" onChange={updmarks}/>
          <input type='text' placeholder='sub3' name="sub3" onChange={updmarks}/>
          <input type='text' placeholder='sub4' name="sub4" onChange={updmarks}/>
          <button onClick={add}>AddMarks</button>

          </>:
          <>
          {
            data.marks.map((m,ind)=>{
              return(<tr>
                <th>sub {ind+1}</th>
                <td>{m}</td>
              </tr>)
            })
          }
          </>
        }
       

      </table>}
    </div>
  )
}

export default Addmarks