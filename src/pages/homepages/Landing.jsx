import React from 'react'
import { Link } from 'react-router'

function Landing() {
    return (
        <section className="
            relative
            min-h-[calc(100vh-4rem)]
            overflow-hidden
            flex items-center justify-center
            bg-[#e5e7eb]
            dark:bg-[#07111F]
            transition-colors duration-300
        ">
            <div className="
                pointer-events-none
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_55%)]
                dark:bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.10),transparent_50%)]
            " />

            <div className="
                relative
                z-10
                w-full
                max-w-5xl
                px-6
                py-20
                text-center
            ">

                {/* Small heading */}
                <p className="
                    mb-6
                    text-sm
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-blue-600
                    dark:text-cyan-400
                ">
                    Blogspace
                </p>

                {/* Main heading */}
                <h1 className="
                    mx-auto
                    max-w-4xl
                    text-5xl
                    font-semibold
                    leading-[1.05]
                    tracking-tight
                    text-gray-900
                    sm:text-6xl
                    md:text-7xl
                    dark:text-white
                ">
                    Create a blog
                    <br />
                    worth sharing
                </h1>

                {/* Description */}
                <p className="
                    mx-auto
                    mt-8
                    max-w-2xl
                    text-base
                    leading-7
                    text-gray-600
                    sm:text-lg
                    dark:text-gray-400
                ">
                    Share your ideas, stories, and knowledge with the world
                    through BlogSpace.
                </p>

                {/* CTA */}
                <div className="mt-10 flex justify-center">
                    <Link
                        to="/signup"
                        className="
                                group
                                inline-flex
                                items-center
                                justify-center
                                rounded-xl
                                px-8
                                py-4
                                text-base
                                font-semibold
                                bg-blue-600
                                text-white
                                shadow-lg
                                transition-all
                                duration-200
                                ease-out
                                hover:bg-blue-700
                                hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]
                                dark:bg-linear-to-r
                                dark:from-cyan-400
                                dark:to-blue-500
                                dark:text-[#07111F]
                                dark:hover:from-cyan-300
                                dark:hover:to-blue-400
                                dark:shadow-[0_0_20px_rgba(34,211,238,0.18)]
                                dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
                        "
                    >
                        <span className="relative inline-block transition-transform duration-200 ease-out group-hover:-translate-x-3">
                            GET STARTED

                            <span
                                aria-hidden="true"
                                className="
                                            absolute
                                            inset-y-0
                                            left-full
                                            ml-2
                                            flex
                                            items-center
                                            text-lg
                                            opacity-0
                                            -translate-x-2
                                            transition-all
                                            duration-200
                                            ease-out
                                            group-hover:translate-x-0
                                            group-hover:opacity-100
                                        "
                            >
                                →
                            </span>
                        </span>
                    </Link>
                </div>

                {/* Bottom pill */}
                <div className="
                    mx-auto
                    mt-20
                    flex
                    w-fit
                    items-center
                    gap-8
                    rounded-full
                    border
                    border-gray-200
                    bg-white/80
                    px-8
                    py-4
                    text-sm
                    text-gray-600
                    shadow-sm
                    backdrop-blur-sm
                    dark:border-white/10
                    dark:bg-[#111c30]/80
                    dark:text-gray-400
                ">
                    <span>Write</span>
                    <span>Share</span>
                    <span>Explore</span>
                    <span>Discover</span>
                </div>
            </div>

        </section>
    )
}

export default Landing