import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Cart() {
    var [apidata,setapidata] = useState([])
    useEffect(function(){
        var ans = axios.get("http://localhost:8000/users")
        console.log(ans);
        ans.then(function(response){
            setapidata(response.data);
        });
    },[]);
  return (
    <div className='container'>
        <h1>Data from Node Js</h1>
        <table className='table'>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
            {
                apidata && apidata.length > 0 && apidata.map(value =>
                    <tr>
                        <td>{ value._id}</td>
                        <td>{ value.name}</td>
                        <td>{ value.age}</td>
                    </tr>
                )
            }
        </table>
    </div>
  )
}
