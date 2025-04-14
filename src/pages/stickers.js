import Link from 'next/link'
import React from 'react'

const Stickers = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-4">
              <Link href={"/product/wear-the-look"}>
                <p className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="mx-auto h-[200px] w-[200px] object-contain p-2 bg-white rounded"
                    src="https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-sticker/x/i/n/large-decorative-wall-sticker-100-woa-116-modern-creations-original-imah8zfw4hzxzhg9.jpeg?q=70&crop=false" />
                </p>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-shirts</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Wear the Look</h2>
                  <p className="mt-1">₹499.00</p>
                  <p className="mt-1">S, M, L, XL, XXL</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Stickers
