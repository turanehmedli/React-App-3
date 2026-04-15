import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-full flex flex-col'>
        
            <marquee className="w-full h-[100px] flex justify-center items-center bg-zinc-200 mt-20" behavior="" direction="">
                <div className='flex gap-10'>
                    <img className='h-5 w-full' src="/public/Frame 172.png" alt="" />
                </div>
            </marquee>

            <div className='w-full h-full flex flex-col justify-center items-center bg-[#3D3D3D] py-10'>
                <div>
                    <div className='flex flex-col justify-center items-center p-3'>
                    <img className='w-[144px] h-[58px]' src="/public/logo-70 (2).png" alt="" />
                    <div className='text-white p-5 flex justify-center items-center flex-col gap-10'>
                        <p className='text-2xl text-center'>Subscribe To Your Newsletter to Stay <br /> Updated About Discounts</p>

                        <input className='w-[344px] h-[65px] rounded-full px-5 py-3 border border-zinc-300' type="text" placeholder='person@email.com' />
                    </div>
                </div>
                <div className='w-full lg:flex h-[265px] gap-20 hidden'>
                    <div className='text-[#9a9a9a]'>
                        <h2>PRODUCTS</h2>
                    </div>

                    <div className='text-[#9a9a9a]'>
                        <h2>LEGAL PAGES</h2>
                    </div>

                    <div className='text-[#9a9a9a]'>
                        <h2>PRODUCTS</h2>
                    </div>

                    <div className='text-[#9a9a9a]'>
                        <h2>PRODUCTS</h2>
                    </div>

                    <div className='text-[#9a9a9a]'>
                        <h2>LEGAL PAGES</h2>
                    </div>
                </div>
                </div>
            </div>
            <div className='w-full py-3 bg-[#3d3d3d] text-center border-t border-white text-white'>
                <p>Copyright © 2023 Renew Bariatrics, Inc </p>
            </div>
        
    </div>
  )
}

export default Footer