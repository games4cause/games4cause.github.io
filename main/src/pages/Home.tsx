import React from "react";
import logo from "../images/g4c_logo.png";

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <nav className="bg-white p-4 h-16">
                <div className="container mx-auto flex justify-between items-center h-full px-4">
                    <div className="flex items-center select-none">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-6 w-auto"
                            draggable="false"
                        />
                        <span className="text-xl font-bold font-dot-gothic-16 sm:inline ml-2 select-none">
                            games4cause
                        </span>
                    </div>
                </div>
            </nav>

            <div className="flex flex-1 justify-center items-center space-x-8">
                <div className="flex flex-col space-y-4">
                    <a
                        href="https://github.com/games4cause/wildfire/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-500 text-lg text-center select-none"
                    >
                        Wildfire
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;