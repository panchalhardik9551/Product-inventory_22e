import React, { useEffect, useReducer, useState } from 'react'

// const reducer = (state, action) => {
//   if (action.type == "increase") {
//       return state +=1 ;
//   }
//   if (action.type == "decrease") {
//       return state - 1;
//   }
//   return state;
// }


export default function Cart({ cart }) {

  const [list, setlist] = useState([])

  useEffect(() => {
    setlist(cart)
  }, [cart])

  // const [state, dispatch] = useReducer(reducer,0)


  return (
    <>
      {
        list.map((cartitem, index) => {
          return (
            <div key={index}>
              <img src={cartitem.img} alt="" />
              <span>{cartitem.name}</span>
              <span>{cartitem.price}</span>
            </div>
          )
        })
      }

    </>
  )
}
