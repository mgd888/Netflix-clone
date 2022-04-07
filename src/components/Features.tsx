import React from 'react';
import tw from 'twin.macro';
import Image from 'next/image';

const Features = ({ title, description, image, direction }) => {
    return (
        <>
            {direction == 'flex-row' ? (
                <div tw="p-10 lg:px-80 flex flex-col text-center md:text-left md:flex-row items-center justify-around h-3/5 w-screen backdrop-brightness-0 z-30 text-white border-[#222] border-t-8 ">
                    <div tw="md:mr-20">
                        <h1 tw="text-[40px] md:text-[35px] font-semibold">
                            {title}
                        </h1>
                        <p tw="text-[24px] md:text-[24px]">{description}</p>
                    </div>
                    <Image src={image} height={600} width={850} />
                </div>
            ) : (
                <div tw="p-10 lg:px-80 flex flex-col text-center md:text-left md:flex-row-reverse items-center justify-around h-3/5 w-screen backdrop-brightness-0 z-30 text-white border-[#222] border-t-8 ">
                    <div tw="md:ml-20">
                        <h1 tw="text-[40px] md:text-[35px] font-semibold">
                            {title}
                        </h1>

                        <p tw="text-[24px] md:text-[24px]">{description}</p>
                    </div>
                    <Image src={image} height={600} width={850} />
                </div>
            )}
        </>
    );
};

export default Features;
