import React from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"
import { BsBagCheckFill } from "react-icons/bs";
import Link from 'next/link';

const Checkout = ({ cart, subTotal, addToCart, removeFromCart }) => {
  return (
    <div className='max-w-6xl mx-auto px-4 py-8 bg-gray-50'>
      {/* Improved heading with decorative elements */}
      <div className="text-center mb-12">
        <h1 className='relative inline-block font-bold text-4xl text-gray-800'>
          <span className="relative z-10">Checkout</span>
          <div className="absolute bottom-0 left-0 w-full h-3 bg-pink-200 opacity-50 -z-10 transform -rotate-1"></div>
        </h1>
        <div className="w-24 h-1 bg-pink-500 mx-auto mt-4"></div>
      </div>
      
      <div className='bg-white shadow-md rounded-lg p-6 mb-8'>
        <h2 className='font-bold text-2xl mb-6 text-pink-600 border-b pb-2'>1. Delivery Details</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded-md border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded-md border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <textarea id="address" name="address" className="w-full bg-white rounded-md border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out" rows={3}></textarea>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input type="phone" id="phone" name="phone" className="w-full bg-white rounded-md border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out" />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input type="text" id="city" name="city" className="w-full bg-white rounded-md border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
            <input type="text" id="state" name="state" className="w-full bg-white rounded-md border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out" />
          </div>

          <div>
            <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
            <input type="text" id="pincode" name="pincode" className="w-full bg-white rounded-md border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>

      <div className='bg-white shadow-md rounded-lg p-6'>
        <h2 className='font-bold text-2xl mb-6 text-pink-600 border-b pb-2'>2. Review Cart Items & Pay</h2>
        
        <div className="bg-pink-50 rounded-lg p-6 mb-6">
          {cart && Object.keys(cart).length === 0 && 
            <div className='py-8 text-lg font-medium text-center text-gray-600'>
              Bruh... even ghosts carry more in their carts. Add something!
            </div>
          }
          
          {Object.keys(cart).length > 0 && (
            <ol className='list-decimal pl-5 space-y-4'>
              {Object.keys(cart).map((k) => (
                <li key={k} className="pl-2">
                  <div className="flex items-center justify-between border-b border-gray-200 py-3">
                    <div className='font-medium text-gray-800'>{cart[k].name}</div>
                    <div className='flex items-center space-x-3'>
                      <button 
                        onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }}
                        className='text-pink-600 hover:text-pink-800 transition-colors'
                      >
                        <IoRemoveCircleOutline size={22} />
                      </button>
                      <span className='font-medium text-gray-800 w-6 text-center'>{cart[k].qty}</span>
                      <button 
                        onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }}
                        className='text-pink-600 hover:text-pink-800 transition-colors'
                      >
                        <IoAddCircleOutline size={22} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          )}
          
          <div className='mt-6 text-right'>
            <span className='font-bold text-xl text-gray-800'>Subtotal: <span className="text-pink-600">₹{subTotal}</span></span>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href={"/checkout"}>
            <button className="flex items-center text-white bg-pink-600 hover:bg-pink-700 transition-colors py-3 px-6 rounded-md font-medium text-lg shadow-sm">
              <BsBagCheckFill className='mr-2' />
              Pay ₹{subTotal}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Checkout