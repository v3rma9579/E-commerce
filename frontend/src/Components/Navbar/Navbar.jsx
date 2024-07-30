import React from 'react'
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import logo from '../Assests/hero.png'
import Hamburger from 'hamburger-react'
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";

export const Navbar = () => {

      const [showmenu, setShowMenu] = useState(false);
      const [isOpen, setOpen] = useState(false);

      function toggleMenu() {
            setShowMenu(prev => !prev)
      }
      return (
            <>
                  <div className='hidden fixed md:block w-full'>
                        <nav className='w-full h-20 bg-slate-950 flex justify-evenly items-center'>
                              <div className=''>
                                    <ul className='text-white flex gap-10 cursor-pointer font-medium'>
                                          <li className='hover:text-gray-500'>Home</li>
                                          <li className='hover:text-gray-500'>About</li>
                                          <li className='hover:text-gray-500'>Categories</li>
                                    </ul>
                              </div>

                              <div className='flex items-center cursor-pointer'>
                                    <img className='w-[300px] logo' src={logo} alt="" />
                              </div>

                              <div className='text-white flex gap-10 text-xl cursor-pointer'>
                                    <FaSearch />
                                    <FaRegHeart />
                                    <div className='cart-icon'>
                                          <FaShoppingCart />
                                          <span>5</span>

                                    </div>


                              </div>
                        </nav>
                  </div>

                  <div className='md:hidden w-full absolute'>
                        <nav className='w-full h-20 bg-slate-950 flex items-center justify-between'>

                              <div className='text-white text-xl cursor-pointer ml-8'>
                                    <Hamburger toggled={isOpen} toggle={setOpen}  size={21} onToggle={toggleMenu}/>
                              </div>
                              <div className='flex items-center cursor-pointer'>
                                    <img className='w-[210px] translate-x-6 translate-y-1' src={logo} alt="" />
                              </div>

                              <div className='text-white flex gap-4 text-xl cursor-pointer mr-5'>
                                    <FaSearch />
                                    <FaRegHeart />
                                    <div className='cart-icon'>
                                          <FaShoppingCart />
                                          <span>5</span>
                                    </div>
                              </div>
                        </nav>

                        <div className={showmenu ? "fixed bg-slate-950 w-[50%] h-full " : "fixed hidden bg-white w-[50%] h-full"}   >
                              <div className='mt-10 cursor-pointer'>
                                    <ul className='text-white text-[18px] flex flex-col gap-10'>
                                    <li className='flex gap-5 items-center hover:text-gray-500'><AiOutlineHome className='text-xl ml-8' />Home</li>
                                    <li className='flex gap-5 items-center hover:text-gray-500'><FaRegUser className='text-xl ml-8' />About</li>
                                    <li className='flex gap-5 items-center hover:text-gray-500'><BiCategory className='text-xl ml-8' />Categories</li>
                                    <li className='flex gap-5 items-center hover:text-gray-500'><IoMdSettings className='text-xl ml-8' />Settings</li>
                                    </ul>
                              </div>
                        </div>
                  </div>


            </>

      )
}
