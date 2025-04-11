import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoCartOutline } from "react-icons/io5"

const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2'>
            <div className="logo mx-5">
                <Image src="/logo.png" alt="Logo" width={150} height={40} />
            </div>
            <div className="nav">
                <ul className='flex items-center space-x-2 font-bold md:text-xl'>
                    <Link href={'/'}><li>Tshirts</li></Link>
                    <Link href={'/'}><li>Hoodies</li></Link>
                    <Link href={'/'}><li>Mugs</li></Link>
                    <Link href={'/'}><li>Stickers</li></Link>
                </ul>
            </div>

            <div className="cart absolute right-0 mx-5 top-4">
                <IoCartOutline className='text-2xl md:text-4xl'/>
            </div>
        </div>
    )
}

export default Navbar
