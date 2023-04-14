import React from 'react'
import Image from 'next/image'

const ProjectCard = ({ items }) => {
    return (
        <>
            <div className='projectCard max-w-[218px] w-full  border border-divider-main'>
                <div className='relative'>
                    <Image src={`/images/${items.projectImage}`} width={218} height={106} alt="Image Error" className='' />
                    <div className="overlay absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-0 transition-all duration-500 ease-in-out">
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