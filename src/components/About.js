import React, { useEffect, useState } from 'react'

export default function About() {
    var [counter,setcounter] = useState(100)

    function f1(){
        setcounter(counter + 10);
    }
    // useEffect will be called on component load as well as change in the state variable
    // useEffect(function(){
    //     console.log(Math.random());
    // })

    //secone behavior of useEffect
    // useEffect(function(){
    //     console.log(Math.random());
    // },[])

    // third behavior of useEffect
    useEffect(function(){
        console.log(Math.random());
        return()=>{
            console.log("Success!");
        }
    },[])
  return (
    <div className='container'>
        <h1>Use Effect Example</h1>
        <p>{ counter }</p>
        <button onClick={f1}>Enter</button>
    </div>
  )
}
