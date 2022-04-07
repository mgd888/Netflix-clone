import React from 'react';
import tw from 'twin.macro';

const FaqButton = ({ question, toggle }) => {
    return (
        <div>
            <button tw="bg-[#303030] w-screen sm:w-[50vw] border-black  md:text-[20px] flex items-center justify-between p-0 px-5 mt-2">
                {question}
                <span tw="text-[55px]">+</span>
            </button>
        </div>
    );
};

export default FaqButton;
