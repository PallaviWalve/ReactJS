import React from 'react'
import Comp22 from './Comp22'
import CONTEXT from '../contextapi'

export default function Comp21(props) {
  return (
    <div>Comp21
        <hr />
        {/* now comp21 is become a provider for 22 and indirectly for 23 */}
        <CONTEXT.Provider value="100"> 
        <Comp22 p2={ props.p1}></Comp22>
        </CONTEXT.Provider>
    </div>
  )
}
