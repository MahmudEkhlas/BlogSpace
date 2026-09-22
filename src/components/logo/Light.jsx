import React from 'react'

function Light() {
    return (
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 600 160"
                width="220"
                height="59"
            >
                <defs>
                    <style>{`
                        .blog-text {
                            font-family: 'Arial Black', 'Helvetica Neue', Arial, sans-serif;
                            font-weight: 400;
                            font-size: 62px;
                        }

                        .space-text {
                            font-family: 'Century Gothic', 'Futura', 'Trebuchet MS', sans-serif;
                            font-weight: 400;
                            font-size: 62px;
                            letter-spacing: 2px;
                        }
                    `}</style>
                </defs>

                <circle
                    cx="75"
                    cy="72"
                    r="58"
                    fill="none"
                    stroke="#33BFED"
                    strokeWidth="3.5"
                />

                <g transform="translate(75, 72)">
                    <path
                        d="M0,-38 C6,-38 12,-28 14,-18 L14,8 C14,12 12,16 8,18 L8,22 L4,22 L4,14 L-4,14 L-4,22 L-8,22 L-8,18 C-12,16 -14,12 -14,8 L-14,-18 C-12,-28 -6,-38 0,-38 Z"
                        fill="#2D2D2D"
                    />

                    <circle
                        cx="0"
                        cy="-12"
                        r="6"
                        fill="white"
                    />

                    <circle
                        cx="0"
                        cy="-12"
                        r="4.5"
                        fill="none"
                        stroke="#2D2D2D"
                        strokeWidth="1"
                    />

                    <path
                        d="M-14,4 L-22,16 L-22,22 L-14,14 Z"
                        fill="#2D2D2D"
                    />

                    <path
                        d="M14,4 L22,16 L22,22 L14,14 Z"
                        fill="#2D2D2D"
                    />

                    <path
                        d="M-5,22 L-7,40 L-3,34 L0,42 L3,34 L7,40 L5,22 Z"
                        fill="#33BFED"
                    />

                    <path
                        d="M-3,22 L-4,32 L0,36 L4,32 L3,22 Z"
                        fill="#66D4F2"
                        opacity="0.7"
                    />
                </g>

                <g
                    stroke="#2D2D2D"
                    strokeWidth="0.8"
                    fill="#2D2D2D"
                >
                    <circle cx="42" cy="36" r="2" />
                    <circle cx="52" cy="50" r="1.5" />
                    <circle cx="38" cy="58" r="1.2" />
                    <circle cx="56" cy="68" r="1.5" />
                    <circle cx="95" cy="34" r="1.8" />
                    <circle cx="108" cy="42" r="1.5" />
                    <circle cx="100" cy="56" r="1.2" />
                    <circle cx="112" cy="60" r="1" />
                    <circle cx="96" cy="72" r="1.5" />
                    <circle cx="108" cy="78" r="1.2" />
                    <circle cx="88" cy="88" r="1" />
                    <circle cx="62" cy="92" r="1.3" />
                    <circle cx="48" cy="80" r="1" />
                    <circle cx="104" cy="50" r="1" />

                    <line x1="42" y1="36" x2="52" y2="50" opacity="0.5" />
                    <line x1="52" y1="50" x2="38" y2="58" opacity="0.5" />
                    <line x1="38" y1="58" x2="56" y2="68" opacity="0.5" />
                    <line x1="95" y1="34" x2="108" y2="42" opacity="0.5" />
                    <line x1="108" y1="42" x2="104" y2="50" opacity="0.5" />
                    <line x1="104" y1="50" x2="112" y2="60" opacity="0.5" />
                    <line x1="100" y1="56" x2="96" y2="72" opacity="0.5" />
                    <line x1="96" y1="72" x2="108" y2="78" opacity="0.5" />
                    <line x1="96" y1="72" x2="88" y2="88" opacity="0.5" />
                    <line x1="52" y1="50" x2="56" y2="68" opacity="0.5" />
                    <line x1="48" y1="80" x2="62" y2="92" opacity="0.5" />
                    <line x1="95" y1="34" x2="104" y2="50" opacity="0.4" />
                </g>

                <text
                    x="155"
                    y="100"
                    className="blog-text"
                    fill="#2D2D2D"
                >
                    BLOG
                </text>

                <g transform="translate(370, 100)">
                    <text x="0" y="0" className="space-text" fill="#33BFED">S</text>
                    <text x="38" y="0" className="space-text" fill="#33BFED">P</text>

                    <path
                        d="M104,0 L90,-44 L76,0 L82,0 L90,-30 L98,0 Z"
                        fill="#33BFED"
                    />

                    <circle cx="90" cy="-10" r="2.5" fill="#33BFED" />

                    <text x="112" y="0" className="space-text" fill="#33BFED">C</text>
                    <text x="152" y="0" className="space-text" fill="#33BFED">E</text>
                </g>
            </svg>
        </div>
    )
}

export default Light