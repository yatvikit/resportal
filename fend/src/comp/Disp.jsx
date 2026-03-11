import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Disp = () => {
  let [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/data").then((res)=>{
      setData(res.data)
    })
  })
  return (
    <div>
      <table border={1}>
        <tr><th>HNO</th><th>Name</th><th>E-mail</th><th>phno</th><th>sub1</th><th>sub2</th><th>sub3</th><th>sub4</th><th></th></tr>
        {
          data.map((obj)=>{
            return(<tr>
              <td>{obj._id}</td>
              <td>{obj.name}</td>
              <td>{obj.email}</td>
              <td>{obj.phno}</td>
              {
                obj.marks.length>0?<>
                <td>{obj.marks[0]}</td>
                <td>{obj.marks[1]}</td>
                <td>{obj.marks[2]}</td>
                <td>{obj.marks[3]}</td>
                </>:<>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <button><Link to={`/addmarks/${obj._id}`}>AddMArks</Link></button>
                </>
              }
            </tr>)
          })
        }

      </table>
    </div>
  )
}

export default Disp