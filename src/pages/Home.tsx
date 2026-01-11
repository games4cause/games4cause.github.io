import React from "react";

const Home: React.FC = () => {
    return (
        <div className="h-full flex items-center justify-center bg-background text-foreground">
            <div className="max-w-xl space-y-6 sm:space-y-8 text-center px-5">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                    Open-source games built with impact in mind
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground">
                    games4cause is an open-source initiative created to build games with impact and fun.
                </p>
            </div>
        </div>
    );
};

export default Home;