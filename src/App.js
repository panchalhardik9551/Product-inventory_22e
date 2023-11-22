import { createContext, createFactory, useState } from 'react';
import './App.css';
import Product from './comp/Product';
import Header from './comp/Header';
import Cart from './comp/Cart';

// export const pitem = createContext()

function App() {

  const [prod, setprod] = useState([
    {
      img: "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?cs=srgb&dl=pexels-pixabay-280250.jpg&fm=jpg",
      name: "watch",
      price: 200
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcPn14DM0l3mRW9QUOZJS65BJgDGXr_AN6IA&usqp=CAU",
      name: "t-shirt",
      price: 1200
    },
    {
      img: "https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/7/2/m/6-tm-12-6-trm-white-original-imagjqyzz8z9jrgf.jpeg?q=90&crop=false",
      name: "shoes",
      price: 11000
    }
  ])


  const [cart, setcart] = useState([])
  const [showCart, setshowCart] = useState(false)

  
  const addToCart = (data) => {
    setcart([...cart, { ...data, quantity: 1 }])
  }
  
  const show = (value) => {
    setshowCart(value)
  }

  return (
    <>
      <Header count={cart.length} handleShow={show} />
      {
        showCart ? <Cart cart={cart} /> : <Product prod={prod} addToCart={addToCart} />
      }
    </>
  );
}

export default App;
