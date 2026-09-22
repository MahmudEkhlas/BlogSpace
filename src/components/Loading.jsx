import React from 'react'

function Loading() {
    return (
        <div className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-[#e5e7eb]
            dark:bg-[#07111F]
            transition-colors
            duration-300
        ">
            <div className="flex space-x-3">
                <div className="
                    h-5
                    w-5
                    rounded-full
                    bg-blue-600
                    dark:bg-cyan-400
                    animate-bounce
                "></div>

                <div
                    className="
                        h-5
                        w-5
                        rounded-full
                        bg-blue-600
                        dark:bg-cyan-400
                        animate-bounce
                    "
                    style={{ animationDelay: "0.1s" }}
                ></div>

                <div
                    className="
                        h-5
                        w-5
                        rounded-full
                        bg-blue-600
                        dark:bg-cyan-400
                        animate-bounce
                    "
                    style={{ animationDelay: "0.2s" }}
                ></div>
            </div>
        </div>
    )
}

export default Loading