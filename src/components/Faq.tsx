import React from 'react';
import tw from 'twin.macro';
import FaqButton from './FaqButton';

const Faq = () => {
    return (
        <div tw="p-0 sm:p-10 flex flex-col text-center items-center justify-around h-3/5 w-screen backdrop-brightness-0 z-30 text-white border-[#222] border-t-8 border-b-8">
            <h1 tw="text-[40px] md:text-[52px] font-semibold mb-8">
                Frequently Asked Questions
            </h1>
            <div >
                <FaqButton question="What is Netflix?" />
                <FaqButton question="How much does Netflix cost?" />
                <FaqButton question="Where can I watch?" />
                <FaqButton question="How do I cancel?" />
                <FaqButton question="What can I watch on Netflix?" />
                <FaqButton question="Is Netflix good for kids?" />
            
            </div>
        </div>
    );
};

export default Faq;
