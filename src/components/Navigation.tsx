import React from 'react';
import tw from 'twin.macro';
import Image from 'next/image';

const Navigation = () => {
    return (
        <div tw="bg-gradient-to-b from-black  z-10">
            <div tw="h-screen w-screen flex justify-between overflow-x-hidden bg-gradient-to-t from-black backdrop-brightness-200 ">
                <div tw="ml-5 sm:ml-12">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                        width={180}
                        height={100}
                        quality={100}
                    />
                </div>
                <div tw="mt-6 ml-3 sm:mt-8 flex  ">
                    <div>
                        {/* <Image src="/globe.svg" height={20} width={20} /> */}
                        <select tw="h-8 w-24 mr-2 sm:mr-8 bg-black/75 border rounded-sm">
                            <option
                                lang="en"
                                value="/ca/"
                                data-language="en"
                                data-country="CA"
                            >
                                English
                            </option>
                            <option
                                lang="fr"
                                value="/ca-fr/"
                                data-language="fr"
                                data-country="CA"
                            >
                                Français
                            </option>
                        </select>
                    </div>
                    <button tw="bg-red-600 mr-3 sm:mr-12 h-9 w-20 rounded-sm text-base">
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
