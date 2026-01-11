import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Download, Lightbulb } from "lucide-react";

const Contribute: React.FC = () => {
    return (
        <main className="flex flex-1 items-center justify-center px-4 py-16 bg-background text-foreground">
            <div className="max-w-4xl w-full space-y-10 text-center">
                {/* Header */}
                <div className="space-y-2">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                        Contribute to games4cause
                    </h1>
                    <p className="text-muted-foreground">
                        Help build open-source games that create real-world impact.
                    </p>
                </div>
                {/* Contribution Options */}
                <div className="grid gap-6 md:grid-cols-3">
                    {/* Developers */}
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle>Develop</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-[90%]">
                                Contribute code, fix bugs, improve performance,
                                or help design new gameplay mechanics.
                            </p>
                        </CardContent>
                        <div className="px-6 pb-6 pt-2">
                            <Button asChild className="w-full">
                                <a
                                    href="https://github.com/games4cause"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="mr-2 h-4 w-4" />
                                    View GitHub
                                </a>
                            </Button>
                        </div>
                    </Card>

                    {/* Design */}
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle>Design</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-[90%]">
                                Have ideas for new games, mechanics, or visuals?
                                Share concepts, mockups, or feedback.
                            </p>
                        </CardContent>
                        <div className="px-6 pb-6 pt-2">
                            <Button asChild className="w-full">
                                <a
                                    href="https://github.com/games4cause"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Lightbulb className="mr-2 h-4 w-4" />
                                    Propose an Idea
                                </a>
                            </Button>
                        </div>
                    </Card>

                    {/* Play */}
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle>Play</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-[90%]">
                                Play, test new builds, and help by
                                reporting bugs or sharing feedback.
                            </p>
                        </CardContent>
                        <div className="px-6 pb-6 pt-2">
                            <Button asChild className="w-full">
                                <a
                                    href="https://github.com/games4cause"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Download
                                </a>
                            </Button>
                        </div>
                    </Card>
                </div>

                {/* Footer note */}
                <p className="text-sm text-muted-foreground">
                    Whether you code, design, or just play — every contribution matters.
                </p>
            </div>
        </main >
    );
};

export default Contribute;