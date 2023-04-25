import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({ items }) => {
    const ProductData = [
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
            <div className='projectCard max-w-[218px] w-full  border border-divider-main'>
                <div className='relative'>
                    <Image src={`/images/${items.projectImage}`} width={218} height={106} alt="Image Error" className='' />
                    <div className="overlay absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-0 transition-all duration-500 ease-in-out">
                    <Link href='' className='text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] font-semibold text-[14px]'>
                        View Details
                    </Link>
                    </div>
                </div>
                <div className='flex gap-1 justify-between py-[10px] px-[15px]'>
                    <p className='medium-heading text-[14px]'>{items.projectCaption}</p>
                    <Image src={`/icons/${items.projectPlatform}`} width={24} height={24} alt="Image Error" className='' />
                </div>
            </div>
        </>
    )
}

export default ProjectCard