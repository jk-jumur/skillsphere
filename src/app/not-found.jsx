'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Home, ArrowLeft, Compass, AlertCircle } from 'lucide-react'
import { Button } from '@heroui/react'

export default function NotFound() {
    const router = useRouter()

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background text-foreground flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
            
            {/* Background Animated Glowing Blobs */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-72 md:h-96 bg-blue-500/20 dark:bg-blue-600/15 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-500/15 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700 pointer-events-none" />

            <div className="w-full max-w-lg my-auto relative z-10 text-center">
                
                {/* 404 Eye-Catching Hero Section */}
                <div className="relative inline-block mb-6">
                    {/* Animated Floating Compass Badge */}
                    <div className="absolute -top-6 -right-2 md:-right-6 bg-blue-600 text-white p-3 rounded-2xl shadow-xl shadow-blue-500/30 animate-bounce duration-1000">
                        <Compass className="w-6 h-6 animate-spin-slow" />
                    </div>

                    {/* Big 404 Text with Gradient */}
                    <h1 className="text-8xl md:text-9xl font-black tracking-tighter bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400 bg-clip-text text-transparent drop-shadow-sm select-none">
                        404
                    </h1>
                </div>

                {/* Main Card Container */}
                <div className="bg-card/90 backdrop-blur-xl border border-border/80 p-6 md:p-8 rounded-3xl shadow-2xl space-y-5">
                    
                    {/* Status Tag */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>Page Lost in Space</span>
                    </div>

                    {/* Heading & Subtitle */}
                    <div className="space-y-2">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                            Oops! Page Not Found
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                        </p>
                    </div>

                    {/* Interactive Action Buttons */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Button
                            onClick={() => router.back()}
                            variant="flat"
                            className="w-full sm:w-auto font-semibold bg-secondary hover:bg-secondary/80 text-foreground h-11 px-6"
                            radius="lg"
                            startContent={<ArrowLeft className="w-4 h-4" />}
                        >
                            Go Back
                        </Button>

                        <Link href="/" className="w-full sm:w-auto">
                            <Button
                                color="primary"
                                className="w-full font-semibold shadow-lg shadow-blue-500/25 bg-blue-600 hover:bg-blue-700 text-white h-11 px-6 transition-all"
                                radius="lg"
                                startContent={<Home className="w-4 h-4" />}
                            >
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Footer Subtle Text */}
                <p className="text-xs text-muted-foreground/60 mt-6 font-medium">
                    SkillSphere • Error Code: 404_PAGE_NOT_FOUND
                </p>
            </div>
        </div>
    )
}