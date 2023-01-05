import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Akhil.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I am a passionate and driven software developer interested in full stack web applications, cloud technologies, and machine learning.  
                    </p>
                    <div className="flex justify-center">
                        <a
                            href = "mailto: abachubhay255@gmail.com"
                            className="inline-flex text-white bg-my-blue border-0 py-2 px-6 focus:outline-none rounded text-lg">
                            Contact Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-300 bg-gray-800 border-0 py-2 px-6 focus:outline-none rounded text-lg">
                            Explore My Work
                        </a>
                    </div>
                </div>
                <div className="md:max-w-md md:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded-full"
                        alt="profile pic"
                        src="./profilepic.jpg"
                    />
                </div>
            </div>
        </section>
    );
}