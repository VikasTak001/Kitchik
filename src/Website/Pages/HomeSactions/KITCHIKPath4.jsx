import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const levels = ["Level 1-5", "Level 6-10", "Level 11-15"];

export default function KITCHIKPath4() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [bgStyle, setBgStyle] = useState({ left: 0, width: 0 });
    const containerRef = useRef(null);
    const btnRefs = useRef([]);

    useEffect(() => {
        if (btnRefs.current[activeIndex]) {
            const btn = btnRefs.current[activeIndex];
            const container = containerRef.current;
            const btnRect = btn.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            setBgStyle({
                left: btnRect.left - containerRect.left,
                width: btnRect.width
            });
        }
    }, [activeIndex]);

    return (
        <div className="bg-[#F5E4FF] max-w-[1575px] border-[white] border-[15px] rounded-[55px] px-10 py-7 relative z-10 mx-5 xl:mx-auto overflow-hidden">
            <div className="font-bold text-5xl max-w-max mx-auto">
                The &nbsp;
                <span className='text-[#3ECDC7]'>KITCHIK &nbsp;</span>
                Path
                <img src="./img/Home/underline.png" className='mx-auto' alt="" />
            </div>

            {/* Levels bar */}
            <div
                ref={containerRef}
                className="relative w-full bg-[#C2C2C24D] rounded-full p-3 my-5 flex gap-3"
            >
                {/* Animated white background */}
                <motion.div
                    className="absolute top-3 bottom-3 rounded-full bg-white z-0"
                    animate={bgStyle}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />

                {/* Level buttons */}
                {levels.map((label, idx) => (
                    <div
                        key={idx}
                        ref={el => (btnRefs.current[idx] = el)}
                        onClick={() => setActiveIndex(idx)}
                        className={`relative z-10 text-center font-bold text-base py-4 px-6 cursor-pointer transition-colors duration-300 flex-1 text-nowrap ${
                            activeIndex === idx ? "text-black" : "text-gray-600"
                        }`}
                    >
                        {label}
                    </div>
                ))}
            </div>

            <div className="text-center text-[#00000059] font-bold py-44">
                Coming Soon
            </div>

            <div className="font-bold text-5xl text-center">
                Let's Make Learning Better Together
            </div>
        </div>
    );
}
