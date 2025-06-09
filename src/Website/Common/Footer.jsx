import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* <div className="w-full bg-black p-7 text-white">
        <div className="w-max mx-auto font-bold text-[42px]">
          Let's Make Learning Better Together
        </div>
        <div className="">
          <div className="">

          </div>
          <div className="">
            <img src="./img/logo.svg" alt="" className="" />
          </div>
        </div>
      </div> */}
      <div className="bg-black text-white flex items-center flex-col mt-[-100px] pt-[130px] pb-[40px] relative z-[1]">
        <div className="px-12 max-w-[1575px] w-[100%] grid grid-cols-5 border-b border-[#FFFFFF80] pb-11 ">
          {/* left foooter */}
          <div className="my-24 col-span-3 flex px-5 justify-between items-center">
            <div className="flex capitalize flex-col gap-10">
              <div className="flex gap-2 items-center">
                product
                <div className="mt-1 group-hover:rotate-[-90deg] transition-all duration-300">
                  <IoIosArrowDown />
                </div>
              </div>
              <div className="flex gap-2 items-center">
                About us
                <div className="mt-1 group-hover:rotate-[-90deg] transition-all duration-300">
                  <IoIosArrowDown />
                </div>
              </div>
              <div className="">
                Concept Paper
              </div>
              <div className="">
                Lobby
              </div>
              <div className="">
                Why open source?
              </div>
              <div className="">
                Cookies
              </div>
              <div className="">
                Privacy Policy
              </div>
            </div>
            <div className="w-4/5 flex justify-end">
              <div className="backdrop-blur-lg bg-header-bg w-[92%] grid grid-flow-col justify-between items-center rounded-full px-4 py-3">
                <input type="text" className='bg-transparent outline-none col-span-10 pl-2' placeholder='Enter your email address here' name="" id="" />
                <button className='bg-[#3ECDC7] px-7 py-2 rounded-full '>Subscribe Now</button>
              </div>
            </div>
          </div>
          {/* right footer */}
          <div className="col-span-2 flex justify-center py-12 border-l border-[#FFFFFF80]">
            <div className="">
              <img src="./img/logo.svg" className='w-[250px]' alt="" />
              <div className="my-16">
                <span className='font-semibold'>Live updates:</span><br />
                <div className="my-3 flex gap-3">
                  <div className="bg-white hover:bg-[#ffffff21] group transition-all duration-300 flex items-center justify-center cursor-pointer size-12 rounded-full">
                    <FaFacebookF className='text-black text-lg group-hover:text-white transition-all duration-300' />
                  </div>
                  <div className="bg-white hover:bg-[#ffffff21] group transition-all duration-300 flex items-center justify-center cursor-pointer size-12 rounded-full">
                    <FaInstagram className='text-black text-lg group-hover:text-white transition-all duration-300' />
                  </div>
                  <div className="bg-white hover:bg-[#ffffff21] group transition-all duration-300 flex items-center justify-center cursor-pointer size-12 rounded-full">
                    <FaTwitter className='text-black text-lg group-hover:text-white transition-all duration-300' />
                  </div>
                  <div className="bg-white hover:bg-[#ffffff21] group transition-all duration-300 flex items-center justify-center cursor-pointer size-12 rounded-full">
                    <FaLinkedinIn className='text-black text-lg group-hover:text-white transition-all duration-300' />
                  </div>
                </div>
                <div className="mt-9">
                  <span className='font-semibold'>
                    Write to us:
                  </span><br /><br />
                  <span className='text-[#3ECDC7]'>
                    mayicomein@kitchik.in
                  </span><br />
                </div>
                <div className=''>
                  <div className="font-semibold mt-11">
                    Discover our app:
                  </div>
                  <div className="my-3 flex gap-3">
                    <div className="bg-[#3ECDC7] flex items-center gap-3 px-5 rounded-full w-max py-2">
                      <img src="./img/googleplay.svg" alt="" />
                      <div className="">
                        <span className='font-semibold'>
                          GET IT ON
                        </span><br />
                        <span className='font-light'>
                          GOOGLE PLAY
                        </span>
                      </div>
                    </div>
                    <div className="bg-[#3ECDC7] flex items-center gap-3 px-5 rounded-full w-max py-2">
                      <img src="./img/apple.svg" alt="" />
                      <div className="">
                        <span className='font-semibold text-xs'>
                          Avalible on the
                        </span><br />
                        <span className='font-light capitalize'>
                          APPLE STORE
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-12 max-w-[1575px] mt-10 w-[100%] flex justify-between">
          <div className="">
            Copyright © 2024- Kitchik Learning
          </div>
          <div className="">
            Website Developed:&nbsp;
            <span className='font-semibold text-[#3ECDC7]'>Vikas Tak</span>
          </div>
        </div>
      </div>
    </>
  )
}
