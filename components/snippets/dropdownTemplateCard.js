import React from 'react'
import Image from 'next/image'

import figmaIcon from 'public/icons/Figma.svg'

const DropdownTemplateCard = (props) => {
    return (
        <>
            <div className='border-[0.5px] border-divider-main max-w-[142px] w-full'>
                <Image src={`/images/${props.data.image}`} width={142} height={92} alt="Image Error" className=''></Image>
                <div className='flex medium-heading text-[9px] p-[10px] text-left'>{props.data.caption}<Image src={figmaIcon} width={24} height={24} alt="Icon Arrow" className=''></Image></div>
            </div>
        </>
    )
}

export default DropdownTemplateCard