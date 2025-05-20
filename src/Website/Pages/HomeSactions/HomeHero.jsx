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
      <div className="w-full h-[115vh] py-[9%] flex flex-col items-center bg-[url('img/herobgg.png')] bg-cover bg-[center_center]">
        <div className="font-bold text-xl w-max">
          Welcome to Kitchik Learning
        </div>
        <div className="font-bold text-7xl text-white text-center w-max">
          AI-ducation <br />
          for everyone
        </div>
        <div className="font-semibold mt-5 text-center text-base">
          We believe every learner deserves a personalised learning <br />
          experience powered by educators' creativity and AI's intelligence.
        </div>
        <div className="text-white py-4 px-20 font-bold mt-28 rounded-full bg-[#3ECDC7]">
          Download App
        </div>
      </div>
    </>

  )
}
