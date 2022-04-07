import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';

const FaqButton = ({ question, desc }) => {
    const [openDesc, setOpenDesc] = useState(false);

    return (
        <div>
            <button
                tw="bg-[#303030] w-screen sm:w-[50vw] border-black  md:text-[20px] flex items-center justify-between p-0 px-5 mt-2 "
                onClick={() => setOpenDesc(!openDesc)}
            >
                {question}
                {openDesc == true ? (
                    <span tw="text-[38px]">x</span>
                ) : (
                    <span tw="text-[38px]">+</span>
                )}
            </button>
            {openDesc && <div tw="bg-[#303030] w-screen sm:w-[50vw] h-auto p-8 text-left text-[20px] border-black border-t-2 ">{desc}</div>}
        </div>
    );
};

export default FaqButton;
