import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <>
            <section className='bg-pdp-banner bg-no-repeat w-full bg-cover grid grid-cols-[100%] place-content-center'>
                <div className='big_container'>
                    <div className='py-[50px]'>
                        <div className='text-white mb-5'><Link href="/" className='pr-2'>Home</Link>/ <span className='pl-2'>Products</span></div>
                        <div className='flex flex-col justify-between items-end md:flex-row lg:py-20'>
                            <h2 className='large-heading  w-full mb-[15px] md:mb-0 lg:max-w-[662px] '>Free High-quality UI kits and design resources</h2>
                            <p className='text-[14px] border-l-[2px] border-[#CCE0A5] pl-4 text-white opacity-70 w-full md:border-l-[5px] lg:text-[18px] lg:max-w-[616px]'>Template Studio is the place to find high-quality design resources for designers, creative agencies and developers</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner