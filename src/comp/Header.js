import React from 'react'

export default function Header(props) {
  return (
        <>
         <div className="main">
                <div className="navbar">
                    <div style={{cursor:"pointer"}} onClick={()=>props.handleShow(false)} >Hardik's Store</div>
                    <div style={{cursor:"pointer"}} onClick={()=>props.handleShow(true)}  >Cart<sup>{props.count}</sup></div>
                </div>
                </div>
        </>
  )
}
