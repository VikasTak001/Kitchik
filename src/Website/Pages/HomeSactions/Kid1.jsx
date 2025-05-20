import React from 'react'
import { FaPlay } from "react-icons/fa";

export default function Kid1() {
    return (
        <>
            <div className="bg-[#fff2e3] flex items-center justify-center border-[white] border-[15px] mb-14 rounded-[55px] px-10 py-20 max-w-[1575px] mt-[-15vh] mx-5 xl:mx-auto">
                <div className="w-1/2 flex flex-col justify-center">
                    <div className="font-bold text-6xl">
                        Kitchik Kids
                    </div>
                    <div className="my-5 text-lg w-4/5 font-semibold">
                        Unlock a world of interactive learning with AI-powered lessons, gamified activities, and real-world exploration. Kitchik makes education fun, engaging, and personalized for every child
                    </div>
                    <div className="mt-5 flex gap-10 items-center">
                        <div className="bg-[#3ECDC7] px-7 py-3 w-max text-white rounded-full font-bold">
                            Learn More
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-black text-white flex items-center justify-center size-12 rounded-full">
                                <FaPlay />
                            </div>
                            Lobby
                        </div>
                    </div>
                </div>
                <div className="rounded-[35px] py-10 bg-white w-max overflow-hidden">
                    <img src="./img/Home/kid1.png" className='hover:scale-105 transition-all duration-300' alt="" />
                </div>
            </div>
        </>
    )
}
