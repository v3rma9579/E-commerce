import React from 'react'
import { SocialIcon } from 'react-social-icons'

export const Newsletter = () => {
      return (
            <>
                  <div id='newsletter-main' className='hidden md:block'>
                        <div className='flex items-center align-middle justify-center flex-col'>
                              <div className='flex flex-col justify-center align-middle gap-3'>
                                    <span className='text-gray-400 uppercase'>Newsletter</span>
                                    <span className='text-2xl uppercase font-medium'>Sign Up for latest updates and offers</span>
                              </div>

                              <div className='flex gap-5 mt-5'>
                                    <input className='w-72' type="text" placeholder='Email Address'/>
                                    <button className='w-24 h-10 bg-violet-800 text-white rounded-xl'>Subscribe</button>
                              </div>

                              <div className='mt-5'>
                                    <span className='text-gray-600 text-[12px]'>Will be used in accordance with our Privacy Policy</span>
                              </div>

                              <div className='flex gap-4 mt-3 cursor-pointer'>
                              <SocialIcon url="https://linkedin.com/in/couetilc" />
                              <SocialIcon url="https://facebook.com/in/couetilc" />
                              <SocialIcon network="twitter" bgColor="#1D9BF0" />
                              <SocialIcon url="https://instagram.com/in/couetilc" />
                              </div>
                        </div>
                  </div>



                  <div className='md:hidden'>
                        Mobile
                  </div>
            </>
      )
}
