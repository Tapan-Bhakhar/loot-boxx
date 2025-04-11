import Link from 'next/link'
import React from 'react'

const Tshirts = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-4">
            <Link href={"/product/wear-the-look"}>
              <p className="block relative rounded overflow-hidden">
                <img alt="ecommerce" className="m-auto md:mx-0 md:h-[36vh] block" src="https://m.media-amazon.com/images/I/31I6THUNl8L._SY445_SX342_.jpg" />
              </p>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-shirts</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Wear the Look</h2>
                <p className="mt-1">₹499.00</p>
                <p className="mt-1">S, M, L, XL, XXL</p>
              </div>
              </Link>
            </div>








            {/* <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative rounded overflow-hidden">
                <img alt="ecommerce" className="h-[36vh]ull block" src="https://m.media-amazon.com/images/I/31I6THUNl8L._SY445_SX342_.jpg" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tshirts
