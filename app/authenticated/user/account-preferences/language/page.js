'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Language = () => {
  const router = useRouter();
  const isHome = router.pathname === '/home';

  return (
    <>
      {!isHome && <Navbar />}
      <div className='py-10 px-6 md:px-16 lg:px-32 bg-slate-100 w-full'>
        <div className="text-6xl font-semibold">
          Account Preferences
        </div>

        <div className="bg-white w-full px-6 lg:px-10 border lg:w-[1603px] h-[370px] mt-10 rounded-[60px] flex flex-col shadow-xl">
          
          <div className='h-full py-4 flex items-center justify-between text-4xl border-b border-black/50 w-full'>
            <span>English</span>
            <label className="relative flex items-center justify-center">
              <input type="radio" name="language" className="sr-only peer" />
              <div className="w-8 h-8 rounded-full border-8 border-black/50 cursor-pointer flex items-center justify-center peer-checked:border-[#017BFC] transition-all duration-300 ease-in-out">
                <div className="w-3 h-3 rounded-full bg-[#017BFC] scale-0 peer-checked:scale-100 transition-all duration-300 ease-in-out"></div>
              </div>
            </label>
          </div>
          
          <div className='h-full py-4 flex items-center justify-between text-4xl border-b border-black/50 w-full'>
            <span>Hindi</span>
            <label className="relative flex items-center justify-center">
              <input type="radio" name="language" className="sr-only peer" />
              <div className="w-8 h-8 rounded-full border-8 border-black/50 cursor-pointer flex items-center justify-center peer-checked:border-[#017BFC] transition-all duration-300 ease-in-out">
                <div className="w-3 h-3 rounded-full bg-[#017BFC] scale-0 peer-checked:scale-100 transition-all duration-300 ease-in-out"></div>
              </div>
            </label>
          </div>
          
          <div className='h-full py-4 flex items-center justify-between text-4xl w-full'>
            <span>Kannada</span>
            <label className="relative flex items-center justify-center">
              <input type="radio" name="language" className="sr-only peer" />
              <div className="w-8 h-8 rounded-full border-8 border-black/50 cursor-pointer flex items-center justify-center peer-checked:border-[#017BFC] transition-all duration-300 ease-in-out">
                <div className="w-3 h-3 rounded-full bg-[#017BFC] scale-0 peer-checked:scale-100 transition-all duration-300 ease-in-out"></div>
              </div>
            </label>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Language;
