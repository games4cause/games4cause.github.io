import React from "react";
import g4cIcon from "@/assets/g4c_icon.svg";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-background border-b border-border">
                <div className="container mx-auto h-16 flex items-center justify-between px-4">
                    {/* Brand */}
                    <a
                        href="/"
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
                    </a>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden md:flex">
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
                                <Button variant="outline" asChild>
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

                    {/* Mobile Menu */}
                    <div className="md:hidden flex items-center gap-2">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>

                            <SheetContent side="top" className="pt-6">
                                <VisuallyHidden>
                                    <SheetTitle>Navigation Menu</SheetTitle>
                                    <SheetDescription>
                                        Main site navigation links
                                    </SheetDescription>
                                </VisuallyHidden>

                                <nav className="flex flex-col gap-4">
                                    <a href="/projects" className="text-lg font-medium">
                                        Projects
                                    </a>
                                    <a href="/community" className="text-lg font-medium">
                                        Community
                                    </a>
                                    <a href="/contribute" className="text-lg font-medium">
                                        Contribute
                                    </a>
                                    <a
                                        href="https://github.com/games4cause"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg font-medium"
                                    >
                                        GitHub
                                    </a>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="relative flex flex-1 items-center justify-center overflow-hidden px-4">
                <div className="max-w-xl space-y-4 text-center">
                    <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-tight">
                        Open-source games built with impact in mind
                    </h1>

                    <p className="text-muted-foreground">
                        games4cause is an open-source initiative created to build games with impact and fun.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Home;
