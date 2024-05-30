import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Right(props) {
    var [apidata,setapidata] = useState();
   useEffect(function(){
    if(props.p2 != ""){
        var apipath = `https://fakestoreapi.com/products/category/${props.p2}`;
        console.log(apipath);
        var ans = axios.get(`https://fakestoreapi.com/products/category/${props.p2}`);
        ans.then(function(response){
            // console.log(response);
            console.log(response.data);
            setapidata(response.data);
        })
    }

   },[props.p2]) //call this on basis of conditionals elements
  return (
    <div>Right,{ props.p2}
    <div className='row'>
            {
                apidata && apidata.length > 0 && apidata.map(value =>
                    <div className='col-3'>
                        <h2>{value.price}</h2>
                        <p>{value.title}</p>
                        <img src={value.image} className='img-fluid' alt=''></img>
                    </div>
                )
            }
        </div>
    </div>
  )
}
