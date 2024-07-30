import React from 'react'
import banner from '../Assests/banner.png'


export const Hero = () => {
      return (
            <div className="p-10 h-screen bg-gradient-to-r from-violet-600 to-indigo-600 overflow-hidden">
                  <div className="h-full flex flex-col-reverse lg:flex-row justify-between items-center max-w-[1200px] mx-auto p-10 mt-10">
                        <div className="text-left lg:mb-0">
                              <h1 id='banner-text' className="text-4xl md:text-6xl lg:text-6xl font-bold text-yellow-400 mb-4">NEW ARRIVALS</h1>
                              <p className="md:text-lg lg:text-xl text-white mb-4 text-[14px]">
                                    Experience uninterrupted music with the Nura 450 Pro Bluetooth Wireless On Ear Headphones, featuring an impressive 70 hours of playback on a single charge.
                              </p>
                              <div className="flex gap-4 justify-start mt-4">
                                    <button className="border-2 text-white hover:bg-indigo-800 py-2 px-4 rounded">Read More</button>
                                    <button className="bg-white text-indigo-600 hover:bg-indigo-800 hover:text-white py-2 px-4 rounded">Shop Now</button>
                              </div>
                        </div>
                        <img class="w-[250px] md:w-[300px] lg:w-[400px]" src={banner} alt="Headphones" />


                  </div>
            </div>


      );
}
