import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font bg-gray-100">



                <div className="container px-5 py-10 mx-auto flex flex-col md:flex-row md:items-start items-center">
                    <div className="w-64 mb-6 md:mb-0 text-center md:text-left">

                        <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <Image src="/logo.png" alt="Logo" width={200} height={36} />
                        </Link>

                        <p className="mt-2 text-sm text-gray-500">Making the world a better place, one block at a time.</p>
                    </div>


                    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">




                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>




                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>


                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>


                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>


                    </div>


                </div>








                <div className="bg-white">
                    <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row items-center">
                        <p className="text-gray-500 text-sm text-center sm:text-left">
                            © 2020 Tailblocks —
                            <a
                                href="https://twitter.com/knyttneve"
                                rel="noopener noreferrer"
                                className="text-gray-600 ml-1"
                                target="_blank"
                            >
                                @knyttneve
                            </a>
                        </p>

                        {/* <span className="flex sm:ml-auto mt-2 sm:mt-0 justify-center sm:justify-start">
            {[
              "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", // Facebook
              "M23 3a10.9 10.9 0 01-3.14 1.53...", // Twitter (shortened)
              "M16 11.37A4 4 0 1112.63 8...", // Instagram (shortened)
              "M16 8a6 6 0 016 6v7h-4v-7a2 2...", // LinkedIn (shortened)
            ].map((d, i) => (
              <a key={i} className="ml-3 text-gray-500 cursor-pointer">
                <svg
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d={d}></path>
                </svg>
              </a>
            ))}
          </span> */}
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            {/* Facebook */}
                            <a className="text-gray-500 hover:text-gray-700" href="#" aria-label="Facebook">
                                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8v-2.88h2.5V9.5c0-2.47 1.49-3.83 3.77-3.83 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.88h-2.34v6.99A10 10 0 0022 12z" />
                                </svg>
                            </a>

                            {/* Twitter */}
                            <a className="ml-3 text-gray-500 hover:text-gray-700" href="#" aria-label="Twitter">
                                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a className="ml-3 text-gray-500 hover:text-gray-700" href="#" aria-label="Instagram">
                                <svg fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                    <path d="M17.5 6.5h.01" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a className="ml-3 text-gray-500 hover:text-gray-700" href="#" aria-label="LinkedIn">
                                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </span>







                    </div>
                </div>
            </footer>
        </div>

    );
};

export default Footer;
