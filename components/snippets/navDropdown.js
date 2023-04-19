import React, { useState } from 'react'
import Image from 'next/image'

import ProjectCard from '../snippets/projectCard'
import navDropdwopnRightArrow from 'public/icons/navDropdwopnRightArrow.svg'

const NavDropdown = (props) => {

  const [tabContent, setTabContent] = useState(0);
  let updateTabs = (id) => {
    setTabContent(id)
  }

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
      <div className='p-10 bg-white shadow-btnShadow-Dropdown absolute top-[121px] left-[33%]'>
        <div className='flex gap-5 items-center overflow-x-auto pb-[30px] border-bottom'>
          {
            props.uiTemplate.map((elem, ind) => {
              return (
                <button key={ind} className={`px-[10px] py-2 medium-heading text-[14px] whitespace-nowrap  ${tabContent === ind ? "border-[2px] border-primary" : ""}`} onClick={() => updateTabs(ind)}>{elem.title}</button>
              )
            })
          }
        </div>
        <div className=''>
          <div className='flex justify-between'>
            <h2 className='main-heading !text-[18px] mt-[30px] mb-[20px] pl-[6px] border-l-2 rounded-sm text-red-50'>Feature Product</h2>
            <button className='flex gap-2 items-center'>
              <p className='medium-info !text-primary'>View All Products </p> <Image src={navDropdwopnRightArrow} width={9} height={5} alt="Side Arrow" className='' />
            </button>
          </div>
          <div className='grid grid-cols-4 gap-5'>
            {
              ProductData.map((value, index) => {
                return <ProjectCard key={index} items={value} />
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default NavDropdown