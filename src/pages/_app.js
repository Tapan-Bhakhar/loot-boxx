import "@/styles/globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [ cart, setCart ] = useState({});
  const [ subTotal, setSubTotal ] = useState(0);

useEffect(() => {
  // try {
  //   if(localStorage.getItem('cart')) {
  //     setCart(JSON.parse(localStorage.getItem('cart')));
  //   }    
  // } catch (error) {
  //   console.error("Error parsing cart from localStorage:", error);
  //   localStorage.clear()
  // }
  try {
    const cartData = localStorage.getItem('cart');
    if (typeof cartData === 'string') {
      setCart(JSON.parse(cartData));
    }
  } catch (error) {
    console.error("Error parsing cart:", error);
    localStorage.removeItem('cart'); // Instead of clearing everything
  }
  
  }, []);

  const saveCart = (myCart) => {
localStorage.setItem('cart', JSON.stringify(myCart)); // ✅ MUST be stringified
    let subtotal = 0;
    // for (const item in myCart) {
    //   subtotal += myCart[item].price * myCart[item].qty;
    // }
    let keys = Object.keys(myCart);
    for (let i = 0; i< keys.length; i++) {
      subtotal += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subtotal);  
  }

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart =  cart;
    if(itemCode in cart) {
      // newCart[itemCode].qty += qty;
      // newCart[itemCode].price += price;
      // newCart[itemCode].size = size;
      // newCart[itemCode].varian = variant;
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant}
    }
    setCart(newCart);
    saveCart(newCart);
  }

  const clearCart = () => {
    setCart({});
    saveCart({});
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if(itemCode in cart) {
      // newCart[itemCode].qty += qty;
      // newCart[itemCode].price += price;
      // newCart[itemCode].size = size;
      // newCart[itemCode].varian = variant;
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    } 
    // if (newCart[itemCode].qty <= 0) {
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  }
  return <>
    <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}/>
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}{...pageProps} />
    <Footer />
  </>
}
