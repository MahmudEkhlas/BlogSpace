import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router'

function PostCard({
    $id,
    title,
    featuredImage,
    userName
}) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="
                        w-full
                        p-5
                        sm:p-6
                        rounded-xl
                        bg-white
                        border border-gray-200
                        shadow-lg
                        hover:border-blue-300
                        transition-all
                        duration-300
                        hover:transform
                        hover:scale-105
                        group
                        dark:bg-black
                        dark:border-zinc-800
                        dark:hover:border-white
            ">
                <div className="relative overflow-hidden rounded-lg mb-6">
                    <img
                        src={service.getFilePreview(featuredImage)}
                        alt={title}
                        className="
                            block
                            w-full
                            aspect-4/3
                            object-cover
                            object-center
                            transition-transform
                            duration-300
                            group-hover:scale-110
                        "
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="mb-5">
                    <span className="
                                inline-block
                                py-1
                                text-xs
                                font-medium
                                tracking-wider
                                uppercase
                                mb-3
                                text-blue-600
                                dark:text-cyan-400
                            ">
                        {userName}
                    </span>

                    <h2 className="
                                text-xl
                                font-bold
                                leading-tight
                                text-gray-900
                                group-hover:text-blue-600
                                transition-colors
                                duration-200
                                dark:text-white
                                dark:group-hover:text-gray-300
                            ">
                        {title}
                    </h2>

                </div>
                <div>
                    <button className="
                                    px-4
                                    py-2
                                    text-sm
                                    font-medium
                                    rounded-lg
                                    transition-colors
                                    duration-200

                                    bg-blue-600
                                    text-white
                                    hover:bg-blue-700

                                    dark:bg-linear-to-r
                                    dark:from-cyan-400
                                    dark:to-blue-500
                                    dark:text-[#07111F]
                                    dark:hover:from-cyan-300
                                    dark:hover:to-blue-400">
                        Read
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default PostCard