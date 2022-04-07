import React from 'react';
import tw from 'twin.macro';

const Footer = () => {
    return (
        <div tw="p-10 md:px-[26%] text-left text-[12px]  text-white/25 h-3/5 w-screen backdrop-brightness-0 z-30 text-white border-[#222] border-t-8 border-b-8">
            <p>Questions? Call 1-844-542-4813</p>
            <div tw="flex flex-col justify-items-start">
            <table tw="w-[100%] text-[8px] sm:text-[12px]">
                    <tr>
                        <td>FAQ</td>
                        <td>Help Center</td>
                        <td>Account</td>
                        <td>Media Center</td>
                    </tr>
                    <tr>
                        <td>Investor Relations</td>
                        <td>Jobs</td>
                        <td>Redeem Gift Cards</td>
                        <td>Buy Gift Cards</td>
                    </tr>
                    <tr>
                        <td>Ways to watch</td>
                        <td>Terms of Use</td>
                        <td>Privacy</td>
                        <td>Cookie Preferences</td>
                    </tr>
                    <tr>
                        <td>Corporate Information</td>
                        <td>Contact Us</td>
                        <td>Speed Test</td>
                        <td>Legal Notices</td>
                    </tr>
                </table>
                <div tw="flex justify-between ">
                    <select tw="h-8 w-24 mr-2 sm:mr-8 my-5 bg-black/30 border rounded-sm">
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
                <div tw="flex justify-between">
                    <span>Netflix Canada</span>
                </div>
                

                {/* <table tw="w-[100%]">
                    <tr>
                        <td>FAQ</td>
                        <td>Help Center</td>
                        <td>Account</td>
                        <td>Media Center</td>
                    </tr>
                    <tr>
                        <td>Investor Relations</td>
                        <td>Jobs</td>
                        <td>Redeem Gift Cards</td>
                        <td>Buy Gift Cards</td>
                    </tr>
                    <tr>
                        <td>Ways to watch</td>
                        <td>Terms of Use</td>
                        <td>Privacy</td>
                        <td>Cookie Preferences</td>
                    </tr>
                    <tr>
                        <td>Corporate Information</td>
                        <td>Contact Us</td>
                        <td>Speed Test</td>
                        <td>Legal Notices</td>
                    </tr>
                    <tr>
                        <td>Only on Netflix</td>
                    </tr>
                    <tr>
                        <td>
                            <select tw="h-8 w-24 mr-2 sm:mr-8 my-5 bg-black/30 border rounded-sm">
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
                        </td>
                    </tr>
                    <tr>Netflix Canada</tr>
                </table> */}
            </div>
        </div>
    );
};

export default Footer;
