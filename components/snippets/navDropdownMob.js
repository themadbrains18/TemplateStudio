import React, { Fragment, useState } from 'react'
import Image from 'next/image'

import downarrowPopup from 'public/icons/downarrowPopup.svg'
import sideArrow from 'public/icons/sideArrow.svg'
import upArrowPopup from 'public/icons/upArrowPopup.svg'
import DropdownTemplateCard from '../snippets/dropdownTemplateCard'

const NavDropdownMob = (props) => {
    const [isActive, setIsActive] = useState(false);

    const navDropdownCardsMob = [
        {
            "image": "feature-prod-dd1.png",
            "caption": "Room Sharing - UI Kit Te...  "
        },
        {
            "image": "feature-prod-dd1.png",
            "caption": "Room Sharing - UI Kit Tefdfddggf...  "
        },
    ]

    return (
        <>
            <div className="">
                <div className="flex justify-between pb-[10px] mb-5 border-b-[1px] border-divider-main" onClick={() => setIsActive(!isActive)}>
                    <p className="nav-info">{props.heading}</p>
                    {isActive ? <Image src={upArrowPopup} width={12} height={6} alt="Down Arrow" className=''></Image> : <Image src={downarrowPopup} width={12} height={6} alt="Down Arrow" className=''></Image>}
                </div>
                {isActive && <div className="dropdown_content">
                    <div className='flex gap-[5px] items-center overflow-x-auto mb-5'>
                        {
                            props.subHeading[props.index].map((e, i) => {
                                return (
                                    <button className='px-[10px] py-2 border-[0.5px] border-divider-main medium-heading text-[14px] whitespace-nowrap'>{e.title}</button>
                                )
                            })
                        }
                    </div>
                    <div className='flex justify-between mb-5'>
                        <h3 className='main-heading '>Feature Product</h3>
                        <button className='flex gap-2 items-center'>
                            <p className='medium-info !text-primary'>View All Products  </p><Image src={sideArrow} width={9} height={5} alt="Side Arrow" className=''></Image></button>
                    </div>
                    <div className='grid grid-cols-2 place-items-center gap-[10px] mb-5'>
                        {
                            navDropdownCardsMob.map((elem, index) => {
                                return (
                                    <Fragment key={index}>
                                        <DropdownTemplateCard data={elem}/>
                                    </Fragment>
                                )
                            })
                        }

                    </div>
                </div>}
            </div>
        </>
    )
}

export default NavDropdownMob