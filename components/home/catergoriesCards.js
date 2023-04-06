import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import cardCategory from 'public/images/cardCategory.png'
const CatergoriesCards = () => {
    return (
        <>
            <section className='sec_spacing'>
                <div className='container pb-[50px]'>
                    <div className='grid grid-cols-4 gap-[30px]'>
                        <div className='p-[25px] text-center bg-[#FFF6FF]'>
                            <Image src={cardCategory} width={220} height={148} alt="Image Error" className='mb-[10px]'></Image>
                            <p className=' font-open-sans font-semibold text-light-text'>Web & Landing Template</p>
                        </div>
                        <div className='p-[25px] text-center bg-[#FFF6FF] max-w[270px] w-full'>
                            <Image src={cardCategory} width={220} height={148} alt="Image Error" className='mb-[10px]'></Image>
                            <p className=' font-open-sans font-semibold text-light-text'>Web & Landing Template</p>
                        </div>
                        <div className='p-[25px] text-center bg-[#FFF6FF]'>
                            <Image src={cardCategory} width={220} height={148} alt="Image Error" className='mb-[10px]'></Image>
                            <p className=' font-open-sans font-semibold text-light-text'>Web & Landing Template</p>
                        </div>
                        <div className='p-[25px] text-center bg-[#FFF6FF] max-w[270px] w-full'>
                            <Image src={cardCategory} width={220} height={148} alt="Image Error" className='mb-[10px]'></Image>
                            <p className=' font-open-sans font-semibold text-light-text'>Web & Landing Template</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CatergoriesCards