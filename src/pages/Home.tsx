import React from "react";
import g4cIcon from "@/assets/g4c_icon.svg";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Navbar */}
            <header className="border-b">
                <div className="container mx-auto h-16 flex items-center justify-between px-4">
                    {/* Brand */}
                    <div className="flex items-center gap-2 select-none">
                        <img
                            src={g4cIcon}
                            alt="games4cause logo"
                            className="h-12 w-12"
                            draggable={false}
                        />
                        <span className="text-xl font-bold font-dot-gothic-16 text-black">
                            games4cause
                        </span>
                    </div>

                    {/* Navigation */}
                    <NavigationMenu>
                        <NavigationMenuList className="gap-2">
                            <NavigationMenuItem>
                                <Button variant="ghost" asChild>
                                    <a href="/projects">Projects</a>
                                </Button>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Button variant="ghost" asChild>
                                    <a href="/community">Community</a>
                                </Button>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Button variant="ghost" asChild>
                                    <a href="/contribute">Contribute</a>
                                </Button>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Button variant="outline" asChild className="ml-2">
                                    <a
                                        href="https://github.com/games4cause"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </Button>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </header>

            {/* Main content */}
            <main className="flex flex-1 items-center justify-center text-center px-4">
                <div className="max-w-xl space-y-4">
                    <h1 className="text-2xl font-semibold">
                        Open-source games, built together
                    </h1>
                    <p className="text-muted-foreground">
                        games4cause is a community creating open-source games
                        for impact and fun.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Home;
