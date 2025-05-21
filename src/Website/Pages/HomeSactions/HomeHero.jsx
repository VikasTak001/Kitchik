import React from 'react'

export default function HomeHero() {
  return (
    <>
      {/* <div className="relative">
        <img src="./img/hero.png" className="w-full absolute z-0 top-0 left-0 h-screen" height="" alt="" />
        <div className="relative z-10 h-screen justify-center max-w-[80%] mx-auto flex flex-col">
          <div className="text-white font-bold text-lg ">
            Welcome to Kitchik Learning
          </div>
          <div className="text-[#3ECDC7] font-bold text-[64px]">
            AI-ducation  <br />
            for everyone
          </div>
          <div className="text-lg text-white mt-3">
            We believe every learner deserves a personalised learning experience,<br /> powered by the creativity of educators and the intelligence of AI.
          </div>
        </div>
      </div> */}
      <div className="w-full  pb-[500px] pt-[250px] flex flex-col items-center bg-[url('../img/herobgg.png')] bg-cover bg-[center_center]">
        <div className="font-bold xs:text-xl text-lg w-max">
          Welcome to Kitchik Learning
        </div>
        <div className="font-bold xs:text-7xl text-5xl text-white text-center w-max">
          AI-ducation <br />
          for everyone
        </div>
        <div className="font-semibold mt-5 text-center xs:text-base text-md">
          We believe every learner deserves a personalised learning <br />
          experience powered by educators' creativity and AI's intelligence.
        </div>
        <div className="text-white hover:scale-105 transition-all duration-300 py-4 px-20 font-bold mt-28 rounded-full bg-[#3ECDC7]">
          Download App
        </div>
      </div>
    </>

  )
}
