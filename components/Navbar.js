import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { IoCartOutline, IoCloseCircleSharp, IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"
import { BsBagCheckFill } from "react-icons/bs";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
    // console.log(cart)
    console.log(subTotal)
    // console.log(addToCart)
    // console.log(removeFromCart)
    // console.log(clearCart)
    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else {
            ref.current.classList.add('translate-x-full')
            ref.current.classList.remove('translate-x-0')
        }

    }
    const ref = useRef()

    return (
        <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md'>
            <div className="logo mx-5">
                <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <Image src="/logo.png" alt="Logo" width={150} height={40} />
                </Link>
            </div>
            <div className="nav">
                <ul className='flex items-center space-x-4 font-bold md:text-lg'>
                    <Link href={'/tshirts'}><li>Tshirts</li></Link>
                    <Link href={'/hoodies'}><li>Hoodies</li></Link>
                    <Link href={'/mugs'}><li>Mugs</li></Link>
                    <Link href={'/stickers'}><li>Stickers</li></Link>
                </ul>
            </div>

            <div onClick={toggleCart} className="CART absolute right-0 mx-5 top-4 cursor-pointer text-pink-500">
                <IoCartOutline className='text-2xl md:text-4xl' />
            </div>

            <div ref={ref} className="SLIDECART w-75 h-full absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform translate-x-full">
                <h2 className='font-bold text-xl text-center pt-3'>Shopping cart </h2>
                <span onClick={toggleCart} className="absolute top-4 right-4 cursor-pointer text-3xl text-pink-500"><IoCloseCircleSharp /></span>
                <ol className='list-decimal font-semibold'>
                    {/* <li>
                        <div className="item flex my-5">
                            <div className='w-2/3 font-semibold'>T-shirt Wear the look.</div>
                            <div className='w-1/3 flex justify-center items-center font-semibold text-lg'><IoRemoveCircleOutline className='cursor-pointer text-pink-500' /><span className='mx-2'>1</span><IoAddCircleOutline className='cursor-pointer text-pink-500' /></div>
                        </div>
                    </li> */}
                    {cart && Object.keys(cart).length === 0 && <div className='my-4 font-semibold text-center'>Bruh... even ghosts carry more in their carts. Add something! </div>}
                    {Object.keys(cart).map((k) => {
                        return (
                            <li key={k}>
                                <div className="item flex my-5">
                                    <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                                    <div className='w-1/3 flex justify-center items-center font-semibold text-lg'><IoRemoveCircleOutline onClick={() => {removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='cursor-pointer text-pink-500' /><span className='mx-2'>{cart[k].qty }</span><IoAddCircleOutline onClick={() => {addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='cursor-pointer text-pink-500' /></div>
                                </div>
                            </li>
                        )
                    })}
                </ol>
                {Object.keys(cart).length !== 0 &&
                    <div className="flex">

                        <button className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-3 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsBagCheckFill className='m-1' />Checkout</button>
                        <button onClick={clearCart} className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-3 focus:outline-none hover:bg-pink-600 rounded text-sm">Clear Cart</button>
                    </div>
                }
            </div>

        </div>
    )
}

export default Navbar
