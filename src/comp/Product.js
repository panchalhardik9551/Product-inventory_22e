import React, { useContext, useState } from 'react'
// import { pitem } from '../App'


export default function Product({prod, addToCart}) {

    // const [cart, setcart] = useContext(pitem)


    return (
        <>
        


           
                {
                    prod.map((item, index) => {
                        return (
                            <>
                                <div className="product"><br />
                                    <div><img src={item.img} /></div>
                                    <div>{item.name}</div>
                                    <div>{item.price}</div><br />
                                    <button onClick={()=>addToCart(item)} >Add To Cart</button>
                                </div>
                            </>
                        )
                    })
                }
        
        

        </>
    )
}
