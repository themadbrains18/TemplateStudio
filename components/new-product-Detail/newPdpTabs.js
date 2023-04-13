import React, { useState } from 'react'
import Image from 'next/image'

import wtsNewIcon from 'public/icons/wtsNewIcon.svg'
import publishedIcon from 'public/icons/watsNewIcon.svg'
const NewPdpTabs = () => {
    const [tabContent, setTabContent] = useState(1);
    let updateTabs = (id) => {
        setTabContent(id)

    }
    return (
        <>
            <section className='py-[80px]'>
                <div className='big_container'>
                    <div className='flex gap-[15px] border-b border-divider-main whitespace-nowrap overflow-x-auto md:gap-[30px] md:justify-center'>
                        <button className={`medium-info px-5 pt-[6px] pb-[10px] bg-primary-800 ${tabContent === 1 ? "border-b-[2px] border-primary" : ""}`} onClick={() => updateTabs(1)}>Description</button>
                        <button className={`medium-info px-5 pt-[6px] pb-[10px] bg-primary-800 ${tabContent === 2 ? "border-b-[2px] border-primary" : ""}`} onClick={() => updateTabs(2)}>Technical Details</button>
                        <button className={`medium-info px-5 pt-[6px] pb-[10px] bg-primary-800 ${tabContent === 3 ? "border-b-[2px] border-primary" : ""}`} onClick={() => updateTabs(3)}>Credits</button>
                        <button className={`medium-info px-5 pt-[6px] pb-[10px] bg-primary-800 flex gap-2 ${tabContent === 4 ? "border-b-[2px] border-primary" : ""}`} onClick={() => updateTabs(4)}>What's New
                            <Image src={wtsNewIcon} width={20} height={20} alt="Icon" className='' />
                        </button>
                        <button className={`medium-info px-5 pt-[6px] pb-[10px] bg-primary-800 ${tabContent === 5 ? "border-b-[2px] border-primary" : ""}`} onClick={() => updateTabs(5)}>What's New</button>
                    </div>

                    {/* Description Tab Content Start */}
                    <div className={`${tabContent === 1 ? "block pt-[80px] mx-0 xl:mx-44" : "hidden "}`}>
                        <h3 className='small-heading !font-bold mb-5'>Overview</h3>
                        <p className='main-info mb-8'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>

                        <p className='main-info mb-8'>looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.</p>

                        <p className='main-info mb-8'>10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                    </div>

                    {/* Technical Details Tab Content Start */}
                    <div className={`${tabContent === 2 ? "block pt-[80px] mx-0 xl:mx-44" : "hidden "}`}>
                        <h3 className='small-heading !font-bold mb-5'>Highlight</h3>
                        <div className='px-[67px] py-10 border border-divider-light'>
                            <ul className='grid grid-cols-2 border-b border-divider-main pb-5 mb-5'>
                                <li className='list-disc main-info'>400+ Exclusive Pre-Built Templates</li>
                                <li className='list-disc main-info'>200+ Components</li>
                            </ul>
                            <ul className='grid grid-cols-2 border-b border-divider-main pb-5 mb-5'>
                                <li className='list-disc main-info'>Global Style guide Included</li>
                                <li className='list-disc main-info'>Fully Customizable & Responsive</li>
                            </ul>
                            <ul className='grid grid-cols-2 border-b border-divider-main pb-5 mb-5'>
                                <li className='list-disc main-info'>Glossy Light + Dark Mode</li>
                                <li className='list-disc main-info'>50+ Premium 3D Illustration</li>
                            </ul>
                            <ul className='grid grid-cols-2 border-b border-divider-main pb-5 mb-5'>
                                <li className='list-disc main-info'>4Easy to edit & use</li>
                                <li className='list-disc main-info'>2 Type of Cards</li>
                            </ul>
                        </div>
                    </div>

                    {/* Credits Tab Content Start */}
                    <div className={`${tabContent === 3 ? "block pt-[80px] mx-0 xl:mx-44" : "hidden "}`}>
                        <h3 className='small-heading !font-bold mb-5'>Sources   </h3>
                        <div className='px-[67px] py-10 border border-divider-light'>
                            <ul className='grid grid-cols-2 border-b border-divider-main pb-5 mb-5'>
                                <li>
                                    <p className=' main-info mb-5'> Fonts Used </p>
                                    <span className='list-item list-disc font-open-sans font-semibold text-sm text-link-main mb-[10px]'> Poppins </span>
                                    <span className='list-item list-disc font-open-sans font-semibold text-sm text-link-main mb-[10px]'> Open Sans </span>
                                </li>
                                <li>
                                    <p className=' main-info mb-5'> Icons Used </p>
                                    <span className='list-item list-disc font-open-sans font-semibold text-sm text-link-main mb-[10px]'> Freepik </span>
                                    <span className='list-item list-disc font-open-sans font-semibold text-sm text-link-main mb-[10px]'> flaticon </span>
                                </li>
                            </ul>
                            <ul className='grid grid-cols-2 '>
                                <li>
                                    <p className=' main-info mb-5'> Fonts Used </p>
                                    <span className='list-item list-disc font-open-sans font-semibold text-sm text-link-main mb-[10px]'> Poppins </span>
                                    <span className='list-item list-disc font-open-sans font-semibold text-sm text-link-main mb-[10px]'> Open Sans </span>
                                </li>
                                <li>
                                    <p className=' main-info mb-5'> Icons Used </p>
                                    <span className='list-item list-disc font-open-sans font-semibold text-sm text-link-main mb-[10px]'> Freepik </span>
                                    <span className='list-item list-disc font-open-sans font-semibold text-sm text-link-main mb-[10px]'> flaticon </span>
                                </li>
                            </ul>

                        </div>
                    </div>

                    {/* What's New Tab Content Start */}
                    <div className={`${tabContent === 4 ? "block pt-[80px] mx-0 xl:mx-44" : "hidden "}`}>
                        <div className='grid grid-cols-3 gap-7 mb-10'>
                            <div className='flex gap-4 py-4 px-5 items-start border border-divider-light '>
                                <Image src={publishedIcon} alt='icon' />
                                <div>
                                    <p className='medium-heading mb-[10px]'>Published On</p>
                                    <p className='main-info'>23/03/2022</p>
                                </div>
                            </div>
                            <div className='flex gap-4 py-4 px-5 items-start border border-divider-light '>
                                <Image src={publishedIcon} alt='icon' />
                                <div>
                                    <p className='medium-heading mb-[10px]'>Last Update</p>
                                    <p className='main-info'>23/03/2022</p>
                                </div>
                            </div>
                            <div className='flex gap-4 py-4 px-5 items-start border border-divider-light '>
                                <Image src={publishedIcon} alt='icon' />
                                <div>
                                    <p className='medium-heading mb-[10px]'>Latest Version</p>
                                    <p className='main-info'>1.0.0</p>
                                </div>
                            </div>
                        </div>
                        <h3 className='small-heading !font-bold mb-5'>New Updates   </h3>
                        <div className='px-[67px] py-10 border border-divider-light'>
                            <ul className='grid grid-cols-2 border-b border-divider-main pb-5 mb-5'>
                                <li className='list-disc main-info'>Vel, ultrices egestas tellus arcu orci.</li>
                                <li className='list-disc main-info'>Pulvinar vel scelerisque egestas vestibulum augue euismod.</li>
                            </ul>
                            <ul className='grid grid-cols-2 border-b border-divider-main pb-5 mb-5'>
                                <li className='list-disc main-info'>Global Style guide Included</li>
                                <li className='list-disc main-info'>Fully Customizable & Responsive</li>
                            </ul>
                            <ul className='grid grid-cols-2 border-b border-divider-main pb-5 mb-5'>
                                <li className='list-disc main-info'>Glossy Light + Dark Mode</li>
                                <li className='list-disc main-info'>50+ Premium 3D Illustration</li>
                            </ul>
                            <ul className='grid grid-cols-2 border-b border-divider-main pb-5 mb-5'>
                                <li className='list-disc main-info'>4Easy to edit & use</li>
                                <li className='list-disc main-info'>2 Type of Cards</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default NewPdpTabs