import React from 'react'

const Order = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">LOOTBOXX</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">ORDER ID: #89777</h1>
            <p className="leading-relaxed mb-4">Boom! Order placed. We'll handle the rest.</p>

            {/* <p className="leading-relaxed">Your order is getting dressed and packing its bags. Headed to [your address] real soon!</p> */}

            {/* <div className="flex mb-4">
              <div className="flex-grow border-b border-gray-300 py-2 focus-within:border-pink-500">
                <label htmlFor="name" className="text-sm text-gray-600 leading-7">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-transparent appearance-none border-none text-gray-900 focus:outline-none focus:ring-0 focus:border-pink-500" placeholder="John Doe" required />
              </div>
            </div> */}

            <div className="flex mb-auto">
              <a className="flex-grow py-2 text-lg px-1">Item Description</a>
              <a className="flex-grow py-2 text-lg px-1">Quantity</a>
              <a className="flex-grow py-2 text-lg px-1">Price</a>
            </div>

            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Loot the Look (xl/black)</span>
              <span className="ml-auto text-gray-900">1</span>
              <span className="ml-auto text-gray-900">499</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Loot the Look (xl/black)</span>
              <span className="ml-auto text-gray-900">1</span>
              <span className="ml-auto text-gray-900">499</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Loot the Look (xl/black)</span>
              <span className="ml-auto text-gray-900">1</span>
              <span className="ml-auto text-gray-900">499</span>
            </div>


            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">SubTotal: ₹588.00</span>
              <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Track Order</button>

            </div>
          </div>
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/lootboxx.png" />
        </div>
      </div>
    </section>
  )
}

export default Order
