// functions
import clsx from 'clsx'
import { useEffect, useState } from 'react'

const CursorImage = props => {
    // useState
    const [cursorColor, setCursorColor] = useState(true)
    // useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            setCursorColor(!cursorColor)
        }, 350)
        return () => clearInterval(interval)
    }, [cursorColor])
    return (
        <span id="cursor" className={clsx("cursor-image", cursorColor ? 'active' : '')}>|</span>
    )
}

export default CursorImage