import React from 'react'
import Image from 'next/image'

import figmaIcon from 'public/icons/Figma.svg'
import Link from 'next/link'

const DropdownTemplateCard = (props) => {

    return (
        <>
            <Link href={`/product/${props.data.id}`} onClick={()=>{props.closeSideMenu()}}>
                <div className='border-[0.5px] border-divider-main max-w-[143px] mx-auto w-full'>
                    <Image src={`http://localhost:7777/upload/${props.data.sliderimages[0]?.filename}`} width={142} height={92} alt="Image Error" className=''></Image>
                    <div className='flex justify-between medium-heading text-[9px] p-[10px] text-left'>{props.data.name}<Image src={figmaIcon} width={24} height={24} alt="Icon Arrow" className=''></Image></div>
                </div>
            </Link>
        </>
    )
}

export default DropdownTemplateCard