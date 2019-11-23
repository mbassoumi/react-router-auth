import React        from 'react';
import AppStoreSvg  from '../../../img/App Store.svg';
import PlayStoreSvg from '../../../img/Play Store.svg';
import DevicesSvg   from '../../../img/devices.svg';
import {Link}       from 'react-router-dom';


const LandingPage = () => (
    <div>

        {/*style="background-image:url('bg.svg');"*/}
        <div className="h-screen pb-14 bg-right bg-cover">
            {/*Nav*/}
            <div className="w-full container mx-auto p-6">

                <div className="w-full flex items-center justify-between">
                    <a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                       href="/">
                        <svg className="h-8 fill-current text-indigo-600 pr-2" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20">
                            <path
                                d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"/>
                        </svg>
                        BASSOUMI
                    </a>



                </div>

                <div className="flex justify-end content-center text-blue-400 text-sm md:text-lg">
                    <Link to="/login"
                          className="mx-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded focus:outline-none focus:shadow-outline">Login</Link>
                    <Link to="/signup"
                          className="mx-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded focus:outline-none focus:shadow-outline">Signup</Link>
                </div>

            </div>

            {/*<!--Main-->*/}
            <div className="container pt-24 md:pt-32 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">

                {/*<!--Left Col-->*/}
                <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                    <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
                        Landing and Public Page</h1>
                    <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
						{/* eslint-disable-next-line react/no-unescaped-entities */}
                        I'm The Boss here!
                    </p>

                    <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">Download our
                        app:</p>
                    <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
                        <img src={AppStoreSvg} alt="App Store" className="h-12 pr-4 bounce-top-icons"/>
                        <img src={PlayStoreSvg} alt="Play Store" className="h-12 bounce-top-icons"/>
                    </div>

                </div>

                {/*<!--Right Col-->*/}
                <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
                    <img className="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src={DevicesSvg} alt="Devices"/>
                </div>

                {/*<!--Footer-->*/}
                <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
                    <a className="text-gray-500 no-underline hover:no-underline" href="/">&copy; MAJD BASSOUMI 2019</a>
                </div>

            </div>


        </div>
    </div>
);

export default LandingPage;
