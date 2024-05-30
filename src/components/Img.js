import React from 'react'

export default function Img(props) {
    if(props.p1 == "")
        {
            throw new Error("Image Empty");
        }
  return (
    <div>
        <img src={props.p1} className='img-fluid' alt=''></img>
    </div>
  )
}
