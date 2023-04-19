import React, { useState } from 'react'
import Image from 'next/image'

const Card = ({items}) => {
    return (
        <>
          
            <div className='category_card p-[25px] text-center bg-[#FFF6FF] ease-in-out'  >
                <Image src={`/images/${items.img}`} width={220} height={148} alt="Image Error" className="categoryCard_img mb-[10px] transition-300"></Image>
                <p className='categoryCard_title font-open-sans font-semibold text-[12px] text-light-text md:text-[16px] transition-300'>{items.caption}</p>
            </div>
        </>
    )
}

export default Card
