import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'


import tmbIcon from 'public/icons/tmbIcon.svg'
import starAbout from 'public/icons/starabout.svg'
import rightArrow from 'public/icons/rightArrow.svg'
import ProjectCard from '@/components/snippets/projectCard'
const AboutAuthor = ({ tabContent }) => {

    const projectData = [
        {
            "projectImage": "projectImg4.png",
            "projectCaption": "Room Sharing - UI Kit Te...",
            "projectPlatform": "Figma.svg",
        },
        {
            "projectImage": "projectImg4.png",
            "projectCaption": "Room Sharing - UI Kit Te...",
            "projectPlatform": "Figma.svg",
        },
        {
            "projectImage": "projectImg4.png",
            "projectCaption": "Room Sharing - UI Kit Te...",
            "projectPlatform": "Figma.svg",
        },
        {
            "projectImage": "projectImg4.png",
            "projectCaption": "Room Sharing - UI Kit Te...",
            "projectPlatform": "Figma.svg",
        },
        {
            "projectImage": "projectImg4.png",
            "projectCaption": "Room Sharing - UI Kit Te...",
            "projectPlatform": "Figma.svg",
        },
    ]


    return (
        <>
            <div className={`${tabContent === 5 ? "block  mx-0 xl:mx-44 pt-[20px] md:pt-[40px] xl:pt-[80px]" : "hidden "}`}>
                <div className='flex items-center gap-4 flex-col mb-5 md:pb-10 md:mb-10 md:border-b md:border-divider-main md:flex-row md:justify-between'>
                    <div className='flex gap-5 items-start'>
                        <Image src={tmbIcon} alt='icon' width={46} height={46} className='md:w-[94px] md:h-[94px]' />
                        <div>
                            <h3 className='small-heading mb-[6px] !text-[18px] md:!text-[20px]'>Themadbrains</h3>
                            <p className='main-info mb-[6px] md:mb-[14px]'>Id gravida magna sed ultrices facilisi nullam cursus pretium et.</p>
                            <div className='flex gap-1'>
                                <span className='medium-info'>4.9</span>
                                <Image src={starAbout} alt='icon' width="auto" height="auto" className='' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='solid-btn text-lg font-semibold'>View Profile</button>
                    </div>
                </div>

                <div className='mb-5 md:pb-10 md:mb-10 md:border-b md:border-divider-main'>
                    <h3 className='small-heading mb-5'>About Author</h3>
                    <p className='main-info'>Eget massa, urna, nisi, pellentesque sit blandit donec ut non. Ut enim velit nec lectus suscipit sed. Turpis viverra et tortor amet, suspendisse odio risus dolor nunc. Eget amet, eu augue lectus purus aliquam at semper libero. Mauris facilisi neque, tortor, dolor, dui nibh lectus convallis consequat. Vel consequat nibh vitae lacus. Ultrices et, nibh volutpat nullam turpis.</p>
                </div>
                <div>
                    <div className='mb-5 flex justify-between'>
                        <h3 className='small-heading '>36 Projects</h3>
                        <Link href="/" className='flex gap-2 font-semibold text-[14px] text-primary items-center'> View All Products  <Image src={rightArrow} alt='icon' width="auto" height="auto" /></Link>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 place-items-center'>
                        {
                            projectData.map((value, index) => {
                                return (
                                    <Fragment key={index}>
                                        <ProjectCard items={value} />
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutAuthor