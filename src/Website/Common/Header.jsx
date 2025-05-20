import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  return (
    <>
      {/* <div className="fixed w-[80vw] self-center top-7 rounded-[500px] bg-header-bg p-5 z-50 overflow-hidden">
        <div className="w-full h-full z-0 absolute top-0 left-0 backdrop-blur-lg"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div className="ml-5">
            <img src="./img/logo.svg" alt="" />
          </div>
          <div className="text-white flex items-center gap-16">
            <div className="flex items-center gap-2">
              Product
              <MdKeyboardArrowDown />
            </div>
             <div className="flex items-center gap-2">
                About us 
              <MdKeyboardArrowDown />
            </div>
            <div className="">
              Concept Paper
            </div>
            <div className="">
              Lobby
            </div>
            <div className="text-white font-bold h-full px-5 py-4 flex items-center bg-[#3ECDC7] rounded-[100px]">
              Download App 
            </div>
          </div>
        </div>
      </div> */}
      <div className="absolute flex gap-3 w-max mx-auto top-7 self-center z-50 text-xl">
        {/* header left section start */}
        <div className="flex flex-col items-center gap-2">
          {/* content of left icon of header start */}
          <div className="size-24 relative bg-header-bg overflow-hidden flex justify-center items-center rounded-full">
            <div className="relative z-[1]">
              <img src="./img/KitchikLogo-8 1.svg" alt="" />

            </div>
            {/* blur the left icon bg start  */}
            <div className="size-24 z-0 absolute top-0 left-0 backdrop-blur-lg"></div>
            {/* blur end */}
          </div>
          {/* content of left icon of header end */}
          <div className="">
            Home
          </div>
        </div>
        {/* header left section end */}
        {/* header mid section start */}
        <div className="h-24 w-full relative rounded-full">
          {/* blur start */}
          <div className="h-full overflow-hidden rounded-full w-full z-0 absolute top-0 left-0 backdrop-blur-lg"></div>
          {/* blur end */}
          {/* main content of header start */}
          <div className="w-full relative z-[1] rounded-full bg-header-bg flex items-center gap-14 px-12 justify-around h-full ">
            {/* product */}
            <div className="relative group">  
              {/* main content */}
              <div className="flex items-center gap-2 cursor-pointer">
                <img src="./img/header/header img (5).png" alt="" />
                Product
                <div className="mt-1 group-hover:rotate-[-90deg] transition-all duration-300">
                  <IoIosArrowDown />
                </div>
              </div>
              {/* menu content */}
              <div className="absolute overflow-hidden backdrop-blur-lg group-hover:opacity-100 group-hover:visible invisible  delay-200 group-hover:delay-0 opacity-0 transition-all duration-300  bg-header-bg p-5 top-[calc(100%+15px)]  w-max rounded-xl">
                {/* <div className="h-full overflow-hidden w-full z-[1] absolute top-0 left-0 backdrop-blur-lg"></div> */}
                {/*  main content */}
                <div className="relative z-[2] flex flex-col gap-3 ">
                    <div className="">
                      Kitchik Kids
                    </div>
                  <div className="">
                    Kitchik Educator
                  </div>
                </div>
              </div>
            </div>
            {/* about us */}
            <div className="relative group">
              {/* main content */}
              <div className="flex items-center gap-2 cursor-pointer">
                <img src="./img/header/header img (4).png" alt="" />
                About us
                <div className="mt-1 group-hover:rotate-[-90deg] transition-all duration-300">
                  <IoIosArrowDown />
                </div>
              </div>
              {/* menu content */}
              <div className="absolute backdrop-blur-lg overflow-hidden bg-header-bg p-5 top-[calc(100%+20px)] w-max rounded-xl group-hover:visible invisible transition-all duration-300 delay-200 group-hover:delay-0 group-hover:opacity-100 opacity-0">
                {/*  main content */}
                <div className="relative z-[1] flex flex-col gap-3">
                  <div className="">
                    What We Do
                  </div>
                  <div className="">
                    Our mission and vision
                  </div>
                  <div className="">
                    Our Unique Model
                  </div>
                  <div className="">
                    Our Team
                  </div>
                </div>
              </div>
            </div>
            {/* Learning Path */}
            <div className="flex items-center gap-2">
              <img src="./img/header/header img (1).png" alt="" />
              Learning Path
            </div>
            {/* Concept Paper */}
            <a href="./docs/Concept Paper_ Kitchik Learning.pdf" target='_blank'>
            <div className="flex items-center gap-2">
              <img src="./img/header/header img (2).png" alt="" />
              Concept Paper
            </div>
            </a>
            {/* lobby  */}
            <a href="https://kitchik.app/" target='_blank'>
            <div className="flex items-center gap-2">
              <img src="./img/header/header img (3).png" alt="" />
              Lobby
            </div>
            </a>
          </div>
          {/* main content of header end */}
        </div>
        {/* header mid section end */}
        {/* header right section start */}
        <div className="flex flex-col items-center gap-2">
          {/* content of left icon of header start */}
          <div className="size-24 relative bg-header-bg overflow-hidden flex justify-center items-center rounded-full">
            <div className="relative z-[1]">
              <img src="./img/Kitchy 1.svg" alt="" />
            </div>
            {/* blur the left icon bg start  */}
            <div className="size-24 z-0 absolute top-0 left-0 backdrop-blur-lg"></div>
            {/* blur end */}
          </div>
          {/* content of left icon of header end */}
          <div className="">
            Kitchy
          </div>
        </div>
        {/* header right section end */}
      </div>
    </>
  )
}
