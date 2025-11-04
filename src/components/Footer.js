// Footer Component (footer.js)
"use client"; // Ensure this is a Client Component

import React from 'react';  // Ensure React is imported
import { FiShoppingBag } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
const FooterLinks = [
    { title: "Home", link: "/#" },
    { title: "About", link: "/#about" },
    { title: "Contact", link: "/#contact" },
    { title: "Blog", link: "/#blog" },
];

const Footer = () => {
    return (
        <div className="text-white bg-[#212529]">
            <div className="container">
                <div className="grid md:grid-cols-3 pb-44 pt-5">
                    {/* Company Details */}
                    <div className="py-8 px-4">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1">
                            <FiShoppingBag size="30" />
                            ShopMe
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
                            beatae ea recusandae blanditiis veritatis.
                        </p>
                    </div>

                    {/* Footer Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                    Important Links
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {FooterLinks.map((link) => (
                                        <li
                                            className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                                            key={link.title}
                                        >
                                            <a href={link.link}>{link.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <div className="flex items-center gap-3 mt-6">
                                <a href="#">
                                    <FaInstagram className="text-3xl" />
                                </a>
                                <a href="#">
                                    <FaFacebook className="text-3xl" />
                                </a>
                                <a href="#">
                                    <FaLinkedin className="text-3xl" />
                                </a>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <p>+91 123456789</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
