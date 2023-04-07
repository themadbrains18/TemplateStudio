import React, { useState } from 'react'
import Image from 'next/image'

const Card = ({items}) => {
    const [hovering, setHovering] = useState(false)
    const onMouseEnter = () => setHovering(true);
    const onMouseLeave = () => setHovering(false);
    return (
        <>
            <div className='p-[25px] text-center bg-[#FFF6FF] ease-in-out' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                <Image src={`/images/${items.img}`} width={220} height={148} alt="Image Error" className={`mb-[10px]  ${hovering && 'scale-[0.95]'}`}></Image>
                <p className=' font-open-sans font-semibold text-[12px] text-light-text md:text-[16px]'>{items.caption}</p>
            </div>
        </>
    )
}

export default Card
