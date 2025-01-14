import React from "react";
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Cta from "./Cta";

function Footer() {
    return (
        <>
            <div className="bg-white h-1/2 w-full flex md:flex-row flex-col justify-around items-start md:p-20">
                <div className="p-5">
                    <ul>
                        <div className='w-[10rem]'>
                            <Link href="/">
                                <Image src="https://res.cloudinary.com/dllddjxkf/image/upload/t_bf_logo/ybxz4hjyp7bcayaqenqa.jpg" alt="Description" width={200} height={100} />
                            </Link>
                        </div>
                        <div className="flex gap-6 pb-5">
                            <a href="https://www.instagram.com/ontop_groups/"><FaInstagram className="text-2xl cursor-pointer text-black hover:text-yellow-600" /></a>
                            <a href="https://www.instagram.com/ontop_groups/"><FaTwitter className="text-2xl cursor-pointer text-black hover:text-blue-600" /></a>
                            <a href="https://www.instagram.com/ontop_groups/"><FaLinkedin className="text-2xl cursor-pointer text-black hover:text-blue-600" /></a>
                            <a href="https://www.instagram.com/ontop_groups/"><FaYoutube className="text-2xl cursor-pointer text-black hover:text-red-600" /></a>
                        </div>
                    </ul>
                </div>
                <div className="flex">
                    <div className="p-5">
                        <ul>
                            <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Sofa Set
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Sofa Cum-Bed
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Wooden Sofa
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Leather Sofa
                            </li>
                        </ul>
                    </div>
                    <div className="p-5">
                        <ul>
                            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                <a href="/">Home</a>
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                <a href="/about">About</a>
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                <a href="/contact">Contact</a>
                            </li>
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                <a href="/careers">Careers</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-xl font-bold text-black flex flex-col justify-end items-end p-5">
                    <h1 className="p-2">Transform Your Home with Beauty Furniture</h1>
                    <Cta />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center  p-5 bg-white">
                <h1 className=" text-gray-800 font-semibold">
                    © 2024-2025 All rights reserved | Build with ❤ by{" "}
                    <span className="hover:text-blue-600 font-semibold cursor-pointer">
                        ontopgroups{""}
                    </span>
                </h1>
            </div>
        </>
    );
}

export default Footer;