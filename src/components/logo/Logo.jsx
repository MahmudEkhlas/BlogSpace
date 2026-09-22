import React from 'react'
import { useSelector } from 'react-redux'
import Dark from './dark';
import Light from './Light';

function Logo({ className = "" }) {
    const mode = useSelector((state) => state.theme.mode)
    return (
            <img
                src={mode === "light" ? "/Logo_L.svg" : "/logo_d.svg"}
                alt="BlogSpace"
                className={`block  object-contain ${className}`}
            />

    )
    // return mode == "light" ? <Light/> : <Dark/>;
}

export default Logo