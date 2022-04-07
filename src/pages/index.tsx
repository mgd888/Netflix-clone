import type { NextPage } from 'next';
import tw from 'twin.macro';
import { Alert } from '@mui/material';
import NavBar from '../components/Navigation';
import Image from 'next/image';
import GetStartedForm from '../components/GetstartedForm';
import Features from 'components/Features';
import Faq from 'components/Faq';
import Footer from 'components/Footer'

const Home: NextPage = () => {
    const bundle = [
        'NextJS',
        'Typescript',
        'Tailwind',
        'Twin.Macro',
        'MUI 5',
        'Emotion',
        'ESLint',
        'Prettier',
    ];

    return (
        <div tw="overflow-x-hidden">
            <div tw="w-screen flex flex-col justify-center items-center overflow-x-hidden bg-gradient-to-b from-black">
                <NavBar />
                <div tw="fixed h-screen w-screen overflow-x-hidden">
                    <Image
                        src="/netflixBg.jpg"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
                <GetStartedForm />
            </div>
            <div className="grid grid-cols-1 divide-y">
                <Features
                    title="Enjoy on your TV."
                    description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
                    image="/tv.png"
                    direction="flex-row"
                />
                <Features
                    title="Download your shows to watch offline."
                    description="Save your favorites easily and always have something to watch."
                    image="/mobile.jpg"
                    direction="flex-row-reverse"
                />
                <Features
                    title="Watch everywhere."
                    description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
                    image="/devices.png"
                    direction="flex-row"
                />
                <Features
                    title="Create profiles for kids."
                    description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
                    image="/kids.png"
                    direction="flex-row-reverse"
                />
                <Faq />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
