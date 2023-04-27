import React, { useState } from 'react'
import Image from 'next/image'

import wtsNewIcon from 'public/icons/wtsNewIcon.svg'
import Description from './PdpTabsContents.js/description'
import TechnicalDetails from './PdpTabsContents.js/technicalDetails'
import Credit from './PdpTabsContents.js/credit'
import WhatsNew from './PdpTabsContents.js/whatsNew'
import AboutAuthor from './PdpTabsContents.js/aboutAuthor'


const NewPdpTabs = () => {
    const [tabContent, setTabContent] = useState(1);
    let updateTabs = (id) => {
        setTabContent(id)
    }


    
    return (
        <>
            <section className='py-[40px] md:py-[80px]'>
                <div className='big_container'>
                    <div className='flex gap-[15px] border-b border-divider-main whitespace-nowrap overflow-x-auto md:gap-[30px] md:justify-center'>
                        <button className={`medium-info px-5 py-2 bg-primary-800 ${tabContent === 1 ? "border-b-[2px] border-primary" : ""}`} onClick={() => updateTabs(1)}>Description</button>
                        <button className={`medium-info px-5 py-2 bg-primary-800 ${tabContent === 2 ? "border-b-[2px] border-primary" : ""}`} onClick={() => updateTabs(2)}>Technical Details</button>
                        <button className={`medium-info px-5 py-2 bg-primary-800 ${tabContent === 3 ? "border-b-[2px] border-primary" : ""}`} onClick={() => updateTabs(3)}>Credits</button>
                        <button className={`medium-info px-5 py-2 bg-primary-800 flex gap-2 items-center ${tabContent === 4 ? "border-b-[2px] border-primary" : ""}`} onClick={() => updateTabs(4)}>What's New
                            <Image src={wtsNewIcon} width={20} height={20} alt="Icon" className='' />
                        </button>
                        <button className={`medium-info px-5 py-2 bg-primary-800 ${tabContent === 5 ? "border-b-[2px] border-primary" : ""}`} onClick={() => updateTabs(5)}>About Author</button>
                    </div>

                    {/* Description Tab Content Called here */}
                    <Description tabContent={tabContent}/>


                    {/* Technical Details Tab Content Called here */}
                    <TechnicalDetails tabContent={tabContent}/>


                    {/* Credits Tab Content Called here */}
                    <Credit tabContent={tabContent}/>

                    {/* What's New Tab Content Called here */}
                    <WhatsNew tabContent={tabContent}/>

                    {/* About Author Tab Content Called here */}
                    <AboutAuthor tabContent={tabContent}/>
                </div>
            </section>
        </>
    )
}

export default NewPdpTabs