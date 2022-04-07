import React from 'react';
import tw from 'twin.macro';
import FaqButton from './FaqButton';
import arrow from '../../public/chevron-right-solid.svg';
import Image from 'next/image';


const Faq = () => {
    return (
        <div tw="p-0 sm:p-10 flex flex-col text-center items-center justify-around h-3/5 w-screen backdrop-brightness-0 z-30 text-white border-[#222] border-t-8 ">
            <h1 tw="text-[40px] md:text-[52px] font-semibold mb-8">
                Frequently Asked Questions
            </h1>
            <div>
                <FaqButton
                    question="What is Netflix?"
                    desc="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.


You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
                />
                <FaqButton question="How much does Netflix cost?" desc="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $20.99 a month. No extra costs, no contracts."/>
                <FaqButton question="Where can I watch?" desc="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."/>
                <FaqButton question="How do I cancel?" desc="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."/>
                <FaqButton question="What can I watch on Netflix?" desc="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."/>
                <FaqButton question="Is Netflix good for kids?" desc="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."/>
            </div>
            <p tw="sm:text-[19.2px] sm:leading-[55px] px-5 sm:px-10 mb-2 font-normal pt-10">
                Ready to watch? Enter your email to create or restart your
                membership.
            </p>
            <div tw="flex justify-center w-[70%] mb-5">
                <input
                    tw="text-black md:w-[50%] border-black p-1 md:p-[16px]"
                    placeholder="Email address"
                    
                />
                <button tw="bg-[#e50914] w-[20%] border-black p-2 text-[12px] md:text-[18px] flex items-center justify-around">
                    Get Started
                    <Image src={arrow} width={24} height={24}></Image>
                </button>
            </div>
        </div>
    );
};

export default Faq;
