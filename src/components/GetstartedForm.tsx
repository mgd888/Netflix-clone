import React from 'react';
import tw from 'twin.macro';
import arrow from '../../public/chevron-right-solid.svg';
import Image from 'next/image';
const GetstartedForm = () => {
    return (
        <div tw="mt-[0%] absolute z-20 flex flex-col text-center px-10 md:px-[20%]">
            <div tw="">
                <h1 tw="text-[26px] md:text-[64px] md:px-32 sm:leading-[58px]  font-bold">
                    Unlimited movies, TV shows, and more.
                </h1>
            </div>
            <h2 tw="text-[24px] md:text-[26px] md:leading-[58px]  font-normal">
                Watch anywhere. Cancel anytime.
            </h2>
            <p tw="text-[19.2px] sm:leading-[55px] sm:px-10 mb-2 font-normal">
                Ready to watch? Enter your email to create or restart your
                membership.
            </p>
            <div tw="flex justify-center">
                <input
                    tw="text-black md:w-[60%] border-black md:p-[20px]"
                    placeholder="Email address"
                    
                />
                <button tw="bg-[#e50914] w-[20%] border-black p-2 md:text-[24px] flex items-center justify-around">
                    Get Started
                    <Image src={arrow} width={24} height={24}></Image>
                </button>
            </div>
        </div>
    );
};

export default GetstartedForm;
