import React from 'react'
import { IoHome } from "react-icons/io5";
import { LuLayers } from "react-icons/lu";
import { RiBarChartBoxLine } from "react-icons/ri";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { LiaChartPieSolid } from "react-icons/lia";
import { BsPeople } from "react-icons/bs";
import { TbWheel } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

function Layout() {
    return (
        <div className=' flex  bg-slate-600'>
            <div className=" h-screen px-5  bg-gray-800 w-[6%]">
                <div className='mb-7  mt-4 text-gray-50'>logo</div>
                <div className='flex flex-col'>
                    <div>
                        <div className='h-[48px] w-[48px] rounded-md flex justify-center items-center hover:bg-white'>
                            <IoHome className='text-2xl text-gray-100 hover:text-gray-800' />
                        </div>
                        <div className='h-[48px] w-[48px] rounded-md flex justify-center items-center hover:bg-white'>
                            <LuLayers className='text-2xl text-gray-100 hover:text-gray-800' />
                        </div>
                        <div className='h-[48px] w-[48px] rounded-md flex justify-center items-center hover:bg-white'>
                            <RiBarChartBoxLine className='text-2xl text-gray-100 hover:text-gray-800' />
                        </div>
                        <div className='h-[48px] w-[48px] rounded-md flex justify-center items-center hover:bg-white'>
                            <RiCheckboxMultipleLine className='text-2xl text-gray-100 hover:text-gray-800' />
                        </div>
                        <div className='h-[48px] w-[48px] rounded-md flex justify-center items-center hover:bg-white'>
                            <LiaChartPieSolid className='text-2xl text-gray-100 hover:text-gray-800' />
                        </div>
                        <div className='h-[48px] w-[48px] rounded-md flex justify-center items-center hover:bg-white'>
                            <BsPeople className='text-2xl text-gray-100 hover:text-gray-800' />
                        </div>
                    </div>

                    <div className='mt-36'>
                        <div className='h-[48px] w-[48px] rounded-md flex justify-center items-center hover:bg-white'>
                            <TbWheel className='text-2xl text-gray-100 hover:text-gray-800' />
                        </div>
                        <div className='h-[48px] w-[48px] rounded-md flex justify-center items-center hover:bg-white '>
                            <IoSettingsOutline className='text-2xl text-gray-100 hover:text-gray-800' />
                        </div>
                    </div>
                </div>




            </div>
            <div className= "h-[68px] w-full">
                 <div className="flex justify-between items-center bg-gray-800 p-4 rounded-md border-2 border-blue-500">
                <span className="text-white text-lg font-semibold">Welcome, Nikhil</span>
                <div className="flex items-center space-x-4">
                    <div className="bg-green-500 px-2 py-1 rounded-md text-sm font-bold">
                        Credits: 5 USD
                    </div>
                    <a href="#" className="text-white hover:text-gray-300">
                        Docs
                    </a>
                </div>
            </div>
            </div>
           
        </div>
    )
}

export default Layout