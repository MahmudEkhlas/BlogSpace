import React from 'react'
import { useSelector } from 'react-redux'

function Logo({ className = "" }) {
    const mode = useSelector((state) => state.theme.mode)
    return (
        <div className="font-['Space_Grotesk'] text-2xl tracking-wide">
            <span className="font-semibold text-gray-900 dark:text-white">
                Blog
            </span>
            <span className="font-medium text-blue-600 dark:text-cyan-400">
                Space
            </span>
        </div>
    )
}

export default Logo