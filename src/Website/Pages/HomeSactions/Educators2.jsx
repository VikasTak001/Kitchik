import React from 'react'

export default function Educators2() {
    return (
        <>
            <div className="max-w-[1375px] text-center mx-auto">
                <div className="font-bold text-6xl">
                    Kitchik for Educators
                </div>
                <div className="my-10">
                    Effortlessly create, customize, and enhance lessons with AI-powered tools. Kitchik empowers educators to craft engaging, interactive, <br /> and effective learning  experiences for every student.
                </div>
                <div className="grid grid-cols-3 gap-28 text-left">
                    <div className="border border-[#00000080] overflow-hidden rounded-[40px] px-10 py-5 flex flex-col hover:shadow-2xl transition-all duration-300">
                        <div className="self-center my-auto">
                            <img src="./img/Home/teacher.png" alt="" />
                        </div>
                        <div className='relative bottom-0'>
                            <div className="font-bold text-4xl">
                                Pick a topic
                            </div>
                            <div className="font-semibold text-md mt-4 ">
                                Select any topic or concept you want your child to learn.
                            </div>
                        </div>
                    </div>
                    <div className="border border-[#00000080] overflow-hidden rounded-[40px] px-10 py-5 flex flex-col hover:shadow-2xl transition-all duration-300">
                        <div className="self-center my-auto">
                            <img src="./img/Home/note&music.png" alt="" />
                        </div>
                        <div className="realative bottom-0">
                            <div className="font-bold text-4xl">
                                Give a prompt
                            </div>
                            <div className="font-semibold text-md mt-4">
                                Add a simple text or voice prompt for our AI.
                            </div>
                        </div>
                    </div>
                    <div className="border border-[#00000080] overflow-hidden rounded-[40px] px-10 py-5 flex flex-col hover:shadow-2xl transition-all duration-300 ">
                        <div className="self-center my-auto">
                            <img src="./img/Home/robo&book.png" alt="" />
                        </div><div className="relative bottom-0">
                            <div className="font-bold text-4xl">
                                Generate with AI
                            </div>
                            <div className="font-semibold text-md mt-4">
                                Instantly get a fun, customized topic ready for your child to explore!
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="bg-[#3ECDC7] text-white capitalize w-max mx-auto my-8 text-lg font-semibold px-12 py-4 rounded-full">
                    learn more
                </div> */}
                <div class="button-container-3">
                    <span class="mas capitalize">
                    learn more
                    </span>
                    <button type="button" className='capitalize ' name="Hover">
                    learn more
                    </button>
                </div>
            </div>
        </>
    )
}
