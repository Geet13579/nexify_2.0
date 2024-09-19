"use client"

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import Link from "next/link";
import { CATEGORY } from '../config';
import axios from "axios";

const MobileNavbar = () => {
    const [sideNav, setSideNav] = useState(false);

    const [menu, setMenu] = useState([]);
    const [error, setError] = useState(null);

    const emptyArray = menu.length === 0;

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("response")
                const response = await axios.get(CATEGORY);
                setMenu(response.data.data);
                
            } catch (error) {
                console.log(error)
                setError(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="lg:hidden sticky top-0 bg-white z-50">
            <div className="flex justify-between items-center p-4">
                <Link href={"/"}><img src="/logo/logo.png" alt="" className="w-[110px] h-[45px]" /></Link>
                <span
                    className="bg-primary fill-white rounded-md p-2"
                    onClick={() => setSideNav(true)}
                >
                    <img src="/icons/hamburger.png" alt="" />
                </span>
            </div>

            <AnimatePresence>
                {sideNav && (
                    <motion.div
                        key="sideNav"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 1 }}
                        onClick={() => setSideNav(false)}
                        className="lg:hidden z-30 fixed top-0 left-0 h-screen w-full flex justify-end bg-black/50"
                    >
                        <motion.div
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100vw" }}
                            transition={{
                                ease: "linear",
                                duration: 0.2,
                            }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-md w-3/4 lg:hidden overflow-hidden"
                            style={{ background: "white" }}
                        >
                            <ul className="flex flex-col text-bhura px-8 pt-4">
                               
                                {menu?.map((category, index) => (
                                    <li className="hover-bg-bhura" key={category.id} >
                                        <Link href={`/categories/${category.slug}`} className={`block hover:text-primary ${index === 0 ? '' : 'border-t'} cursor-pointer py-3 px-5 text-sm font-medium`}>{category.mcat_name}</Link>
                                    </li>
                                ))}

                                <li className="hover-bg-bhura">
                                    <Link
                                        href="about-us"
                                        className="block hover:text-primary cursor-pointer py-3 px-5 border-t text-sm font-medium"
                                    >
                                        About Us
                                    </Link>
                                </li>

                                <li className="hover-bg-bhura">
                                    <Link
                                        href="contact"
                                        className="block hover:text-primary cursor-pointer py-3 px-5 border-t text-sm font-medium"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>

                            <div className="mt-6 mx-8">
                                <Button title="Get In Touch" />
                            </div>

                            <p className="text-2xl font-bold px-12 pt-6 text-bhura">
                                Contact Us
                            </p>

                            <div className='flex lg:flex-row px-12 mt-8 flex-col lg:gap-8 gap-2'>
                                <div className='flex gap-4'>
                                    <img src="/icons/phone.png" alt="" className='w-[18px] h-[18px]' />
                                    <p className='text-bhura'>+91-9826600655</p>
                                    <p className='text-bhura'>+91-9827844278</p>
                                </div>
                                <div className='flex gap-4'>
                                    <img src="/icons/whatsapp.png" alt="" className='w-[18px] h-[18px]' />
                                    <p className='text-bhura'>+91-9826600655</p>
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileNavbar;