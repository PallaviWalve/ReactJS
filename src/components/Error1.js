import React from 'react'
import Img from './Img'
import ErrorBoundary from '../ErrorBoundary'

export default function Error1() {
  return (
    <div className='container'>
        <h1>Error Boundary Example</h1>
        <div className='row'>
            <div className="col-4">
               <Img p1="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70"></Img>
            </div>
            <div className="col-4">
            <Img p1="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/9/i/m6-pro-5g-mzb0eqjin-poco-original-imags3e7dazavyje.jpeg?q=70"></Img>
            </div>
            <div className="col-4">
              <ErrorBoundary>
            <Img p1=""></Img>
            </ErrorBoundary>
            </div>
        </div>
    </div>
  )
}
