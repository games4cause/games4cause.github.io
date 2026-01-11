import React from "react";
import g4cIcon from "@/assets/g4c_icon.svg";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 bg-background border-b border-border">
            <div className="container mx-auto h-16 flex items-center justify-between px-4">
                {/* Brand */}
                <Link
                    to="/"
                    className="flex items-center gap-2 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                    <img
                        src={g4cIcon}
                        alt="games4cause logo"
                        className="h-10 w-10 sm:h-12 sm:w-12"
                        draggable={false}
                    />
                    <span className="text-lg sm:text-xl font-bold font-dot-gothic-16">
                        games4cause
                    </span>
                </Link>

                {/* Navigation */}
                <NavigationMenu>
                    <NavigationMenuList className="gap-2">
                        {/* Contribute Icon */}
                        <NavigationMenuItem>
                            <Button
                                variant="ghost"
                                size="icon"
                                asChild
                                aria-label="Contribute"
                            >
                                <Link to="/contribute">
                                    <HeartHandshake className="h-8 w-8" />
                                </Link>
                            </Button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
};

export default Navbar;
