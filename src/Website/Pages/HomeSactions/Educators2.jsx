import React from 'react'

export default function Educators2() {
  return (
    <>
    <div className="max-w-[1575px] text-center mx-auto">
        <div className="font-bold text-6xl">
            Kitchik for Educators
        </div>
        <div className="my-10">
            Effortlessly create, customize, and enhance lessons with AI-powered tools. Kitchik empowers educators to craft engaging, interactive, <br /> and effective learning  experiences for every student.
        </div>
        <div className="grid grid-cols-3 gap-20 text-left">
            <div className="border border-[#00000080] overflow-hidden rounded-[40px] px-10 py-2 flex flex-col justify-evenly">
                <div className="">
                    <img src="./img/" alt="" />
                </div>
                <div className="font-bold text-4xl">
                    Pick a topic
                </div>
                <div className="font-normal text-md ">
                    Select any topic or concept you want your child to learn. 
                </div>
            </div>
            <div className="border border-[#00000080] overflow-hidden rounded-[40px] px-10 py-2 flex flex-col justify-evenly">
                <div className="">
                    <img src="./img/" alt="" />
                </div>
                <div className="font-bold text-4xl">
                    Give a prompt
                </div>
                <div className="font-normal text-md ">
                    Add a simple text or voice prompt for our AI.
                </div>
            </div>
            <div className="border border-[#00000080] overflow-hidden rounded-[40px] px-10 py-2 flex flex-col justify-evenly">
                <div className="">
                    <img src="./img/" alt="" />
                </div>
                <div className="font-bold text-4xl">
                    Generate with AI
                </div>
                <div className="font-normal text-md ">
                    Instantly get a fun, customized topic ready for your child to explore!
                </div>
            </div>
        </div>
        <div className="bg-[#3ECDC7] text-white capitalize w-max mx-auto my-8 font-semibold px-12 py-3 rounded-full">
            learn more
        </div>
    </div>
    </>
  )
}
