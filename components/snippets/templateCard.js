import React from 'react'
import Image from 'next/image'
import shareArrowIcon from 'public/icons/shareArrowIcon.svg'
import Link from 'next/link'


const TemplateCard = ({ items }) => {
    return (
        <>
            <div className='template_card border-[1px] border-divider-main max-w-[370px] w-full'>
                <div className='relative'>
                    <Image src={`/images/${items.templateImg}`} width={370} height={278} alt="Image Error" className=''></Image>
                    <div className="overlay absolute  bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-0 transition duration-500 ease-in-out">
                    </div>
                    <Link href='/' className='overlay_text font-open-sans font-bold text-white text-[18px] flex gap-2 absolute  left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4 opacity-0 transition duration-500 ease-in-out'>
                        View Detals
                        <Image src={shareArrowIcon} width={16} height={12} alt="Image Error" className=''></Image>
                    </Link>
                    <div className='template_bg text-white font-open-sans font-semibold text-sm py-[2px] px-[10px] bg-black bg-opacity-0 transition duration-500 ease-in-out rounded-[30px] absolute top-5 right-5  '>
                    <span className='template_num opacity-0 transition duration-500 ease-in-out'> 1/20 </span> 
                    </div>
                  
                </div>
                <div className='py-3 px-5  bg-white'>
                    <div className='flex justify-between pb-3 border-b-[1px] border-divider-main'>
                        <p className='medium-info'>{items.caption}</p>
                        <Image src={`/icons/${items.designingToolIcon}`} width={24} height={24} alt="Image Error" className=''></Image>
                    </div>
                    <div className='flex justify-between mt-3 gap-2 flex-wrap items-start'>
                        <div className='flex items-center gap-2'>
                            <Image src={`/icons/${items.companyLogo}`} width={20} height={20} alt="Image Error" className=''></Image>
                            <div className='flex gap-[10px] items-center'>
                                <p className='medium-heading text-[12px]'> <span className='font-open-sans text-[12px] text-light-text leading-5 font-normal pr-1'>By</span>{items.companyName}</p>
                                <span className='medium-heading text-[12px]'>{items.templateType}</span>
                            </div>
                        </div>
                        <span className='font-open-sans font-semibold text-white text-sm bg-primary py-[2px] px-[11px]'>FREE</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TemplateCard