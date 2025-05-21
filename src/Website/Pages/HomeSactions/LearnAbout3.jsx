import React from 'react'

export default function LearnAbout3() {
    return (
        <>
            <div className="max-w-[1475px]  mx-auto my-16 justify-between grid grid-flow-col">
                <div className="col-span-3">
                    <div className="font-bold text-[#3ECDC7] text-6xl">
                        Learn, Play & Explore with AI
                    </div>
                    <div className="flex flex-col gap-3 mt-16 justify-between h-3/4">
                        <div className="flex gap-3 items-center">
                            <div className="" flex gap-2 items-center>
                                <img src="./img/Home/book.png" className='h-[100px]' alt="" />
                            </div>
                            <div className="h-full flex-col gap-2 flex mt-3">
                                <div className="font-bold">Story-Based Learning</div>
                                <div className="">
                                    Every topic begins with a fun and simple story that <br /> introduces the concept in an engaging  way.
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="">
                                <img src="./img/Home/book2.png" className='h-[100px] w-[75px]' alt="" />
                            </div>
                            <div className="h-full flex-col gap-2 flex mt-3">
                                <div className="font-bold">Interactive Prompts & Responses</div>
                                <div className="">
                                    Kids answer questions using multiple choice, drawing, speaking, or <br /> simple inputs—guided by our friendly character, Kitchy.
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="">
                                <img src="./img/Home/camera.png" className='h-[100px] w-[75px]' alt="" />
                            </div>
                            <div className="h-full flex-col flex gap-2 mt-3">
                                <div className="font-bold">AI Picture Verification</div>
                                <div className="">
                                    At the end, kids take a real-world picture based on what they’ve learned. Our AI <br /> checks if the photo matches the concept—turning learning into discovery!
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="border relative rounded-3xl pb-24 col-span-2  w-max border-black">
                    <div className="absolute flex items-center pr-10 bottom-7 shadow-[5px_5px_10px_0px_rgba(0,0,0,0.15)] rounded-3xl p-3 bg-white right-0 translate-x-[50%]">
                        <div className="">
                            <img src="./img/Home/KitchikAppIcon 1.svg" alt="" />
                        </div>
                        <div className="text-[#3ECDC7] font-bold">
                            Play With Kitchy
                        </div>
                    </div>
                    <img src="./img/Home/camera2.png" className='mt-10' alt="" />
                </div>
            </div>
        </>
    )
}
