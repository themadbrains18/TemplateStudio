import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DropdownTemplateCard from '../snippets/dropdownTemplateCard'


import logo from 'public/icons/Logo.svg'
import downArrow from 'public/icons/down-arrow.svg'
import searchIcon from 'public/icons/search-icon.svg'
import menuBtn from 'public/icons/menu-btn.svg'
import menuLogo from 'public/icons/menuLogo.svg'
import popupCloseBtn from 'public/icons/popupCloseBtn.svg'
import searchIconPopup from 'public/icons/searchIcon.svg'
import downarrowPopup from 'public/icons/downarrowPopup.svg'
import sideArrow from 'public/icons/sideArrow.svg'
import upArrowPopup from 'public/icons/upArrowPopup.svg'
import downArrowSearch from 'public/icons/downArrowSearch.svg'
import searchCloseIcon from 'public/icons/searchCloseIcon.svg'



const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [sideBar, setSideBar] = useState(false);
    const [searchBar, setSearchBar] = useState(false);

    const toggleSidebar = () => {
        sideBar === true ? setSideBar(false) : setSideBar(true);
    }

    // const setsearchBar = () =>{
    //     searchBar === true ? setSearchBar(false) : setSearchBar(true);
    // }
    return (
        <>
            <header className='py-[34px] border-b-[1px] border-divider-main '>
                <div className='big_container'>
                    <nav className='flex items-center justify-between'>
                        <button className='xmd:hidden' onClick={toggleSidebar}>
                            <Image src={menuBtn} width={24} height={24} alt="Menu Button"></Image>
                        </button>
                        <Link href="/" className=''>
                            <Image src={logo} width={193} height={28} alt="Header Logo" className='xmd:max-w-[276px] xmd:w-full xmd:h-10'></Image>
                        </Link>
                        <ul className='gap-8 hidden xmd:flex'>
                            <li className='nav-info hoverNavArrow flex gap-2 items-center hover:text-primary duration-300 relative'>
                                <span className='after:absolute after:h-[1px] after:w-[0px] after:bg-primary after:bottom-[-20%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] hover:after:w-[100%] after:duration-300'>Ui Templates</span>
                                <Image src={downArrow} width={10} height={5} alt="Down Arrow" className='nav_down_arrow'></Image>
                            </li>
                            <li className='nav-info hoverNavArrow flex gap-2 items-center hover:text-primary duration-300 relative'>
                                <span className='after:absolute after:h-[1px] after:w-[0px] after:bg-primary after:bottom-[-20%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] hover:after:w-[100%] after:duration-300'>HTML Templates</span>
                                <Image src={downArrow} width={10} height={5} alt="Down Arrow" className='nav_down_arrow'></Image>
                            </li>
                            <li className='nav-info hoverNavArrow flex gap-2 items-center hover:text-primary duration-300 relative'>
                                <span className='after:absolute after:h-[1px] after:w-[0px] after:bg-primary after:bottom-[-20%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] hover:after:w-[100%] after:duration-300'>Studio Spacial</span>
                                <Image src={downArrow} width={10} height={5} alt="Down Arrow" className='nav_down_arrow'></Image>
                            </li>
                        </ul>
                        <div className='flex items-center xmd:gap-7'>
                            <div className={`relative duration-300 `}>
                                <Image src={searchIcon} width={18} height={18} alt="Search Icon" className='cursor-pointer' onClick={()=>{setSearchBar(true)}} />
                                {/* continue... */}
                                <div className={`px-2 py-3  border-[1px] border-primary-400  absolute w-[380px] top-[50%]  translate-y-[-50%] bg-white duration-700 transition-all ${searchBar ? "left-[calc(100%-380px)] visible opacity-[1]":"left-[calc(100%+20px)] invisible opacity-0"}`}>
                                    <div className='flex gap-[10px]'>
                                        <div className='flex gap-2 px-[15px] py-[5px] bg-primary-700'>
                                            <span className='small-info'>All Products</span> <Image src={downArrowSearch} width={10} height={5} alt="Down Arrow" className='nav_down_arrow'></Image>
                                        </div>
                                        <span className='border-[1px] border-primary-400'></span>
                                        <div className='flex'>
                                            <input type='text' placeholder='Search all templates.... ' className='max-w-[200px] w-full pr-3 outline-none' />
                                            <Image src={searchCloseIcon} width={20} height={20} alt="Searchclose button" className='cursor-pointer' onClick={()=>{setSearchBar(false)}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className='solid-btn text-lg font-semibold hidden xmd:block'>Sign Up</button>
                        </div>
                    </nav>

                    {/*Header Menu SideBar*/}
                    <div className={`menu_sidebar max-w-[375px] w-full bg-white fixed top-0 -left-full transition-all duration-700 border-[1px] border-divider-main z-50 ${sideBar == true ? 'active' : ''}`}>
                        {/* Sidebar Header */}
                        <div className='py-5 px-[15px] flex justify-between items-center mb-[30px]'>
                            <Image src={menuLogo} width={193} height={28} alt="Down Arrow" className=''></Image>
                            <button onClick={toggleSidebar}> <Image src={popupCloseBtn} width={16} height={16} alt="Popup Close Button" className=''/></button>
                        </div>
                        {/* Sidebar Header End*/}

                        {/* Sidebar Main */}
                        <div className='px-5 py-[30px]  h-[100vh] overflow-y-auto text-center pb-32'>
                            <div className='flex gap-2 p-[10px] border-[1px] border-divider-main w-full mb-[30px] '>
                                <button><Image src={searchIconPopup} width={16} height={16} alt="Icon Error"></Image></button>
                                <input type='text' placeholder='Search' className='outline-none w-full bg-transparent' />
                            </div>
                            {/* First Accordion */}
                            <div className="">
                                <div className="flex justify-between pb-[10px] mb-5 border-b-[1px] border-divider-main" onClick={() => setIsActive(!isActive)}>
                                    <p className="nav-info">Ui Templates</p>
                                    {isActive ? <Image src={upArrowPopup} width={12} height={6} alt="Down Arrow" className=''></Image> : <Image src={downarrowPopup} width={12} height={6} alt="Down Arrow" className=''></Image>}
                                </div>
                                {isActive && <div className="dropdown_content">
                                    <div className='flex gap-[5px] items-center overflow-x-auto mb-5'>
                                        <button className='px-[10px] py-2 border-[0.5px] border-divider-main medium-heading text-[14px] whitespace-nowrap'>Web Templates</button>
                                        <button className='px-[10px] py-2 border-[0.5px] border-divider-main medium-heading text-[14px] whitespace-nowrap'>Mobile App</button>
                                        <button className='px-[10px] py-2 border-[0.5px] border-divider-main medium-heading text-[14px] whitespace-nowrap'>Dashboards</button>
                                        <button className='px-[10px] py-2 border-[0.5px] border-divider-main medium-heading text-[14px] whitespace-nowrap'>Landing Page Templates</button>
                                        <button className='px-[10px] py-2 border-[0.5px] border-divider-main medium-heading text-[14px] whitespace-nowrap'>Web Templates</button>
                                    </div>
                                    <div className='flex justify-between mb-5'>
                                        <h3 className='main-heading '>Feature Product</h3>
                                        <button className='flex gap-2 items-center'>
                                            <p className='medium-info !text-primary'>View All Products  </p><Image src={sideArrow} width={9} height={5} alt="Side Arrow" className=''></Image></button>
                                    </div>
                                    <div className='grid grid-cols-2 place-items-center gap-[10px] mb-5'>
                                        <DropdownTemplateCard />
                                        <DropdownTemplateCard />
                                    </div>
                                </div>}
                            </div>
                            {/* First Accordion End*/}

                            {/* Second Accordion */}
                            <div className="">
                                <div className="flex justify-between pb-[10px] mb-5 border-b-[1px] border-divider-main" onClick={() => setIsActive(!isActive)}>
                                    <p className="nav-info">HTML Templates</p>
                                    {isActive ? <Image src={upArrowPopup} width={12} height={6} alt="Down Arrow" className=''></Image> : <Image src={downarrowPopup} width={12} height={6} alt="Down Arrow" className=''></Image>}
                                </div>
                                {isActive && <div className="dropdown_content">
                                    <div className='flex gap-[5px] items-center overflow-x-auto mb-5'>
                                        <button className='px-[10px] py-2 border-[0.5px] border-divider-main medium-heading text-[14px] whitespace-nowrap'>Web Templates</button>
                                        <button className='px-[10px] py-2 border-[0.5px] border-divider-main medium-heading text-[14px] whitespace-nowrap'>Mobile App</button>
                                        <button className='px-[10px] py-2 border-[0.5px] border-divider-main medium-heading text-[14px] whitespace-nowrap'>Dashboards</button>
                                        <button className='px-[10px] py-2 border-[0.5px] border-divider-main medium-heading text-[14px] whitespace-nowrap'>Landing Page Templates</button>
                                        <button className='px-[10px] py-2 border-[0.5px] border-divider-main medium-heading text-[14px] whitespace-nowrap'>Web Templates</button>
                                    </div>
                                    <div className='flex justify-between mb-5'>
                                        <h3 className='main-heading '>Feature Product</h3>
                                        <button className='flex gap-2 items-center'>
                                            <p className='medium-info !text-primary'>View All Products  </p><Image src={sideArrow} width={9} height={5} alt="Side Arrow" className=''></Image></button>
                                    </div>
                                    <div className='grid grid-cols-2 place-items-center gap-[10px] mb-5'>
                                        <DropdownTemplateCard />
                                        <DropdownTemplateCard />
                                    </div>
                                </div>}
                            </div>
                            {/* Second Accordion End */}

                            {/* Third Accordion */}
                            <div className="">
                                <div className="flex justify-between pb-[10px] mb-5 border-b-[1px] border-divider-main" onClick={() => setIsActive(!isActive)}>
                                    <p className="nav-info">Studio Spacial</p>
                                    {isActive ? <Image src={upArrowPopup} width={12} height={6} alt="Down Arrow" className=''></Image> : <Image src={downarrowPopup} width={12} height={6} alt="Down Arrow" className=''></Image>}
                                </div>
                                {isActive && <div className="dropdown_content">
                                    <div className='flex gap-[5px] items-center overflow-x-auto mb-5'>
                                        <button className='px-[10px] py-2 border-[0.5px] border-divider-main medium-heading text-[14px] whitespace-nowrap'>Web Templates</button>
                                        <button className='px-[10px] py-2 border-[0.5px] border-divider-main medium-heading text-[14px] whitespace-nowrap'>Mobile App</button>
                                        <button className='px-[10px] py-2 border-[0.5px] border-divider-main medium-heading text-[14px] whitespace-nowrap'>Dashboards</button>
                                        <button className='px-[10px] py-2 border-[0.5px] border-divider-main medium-heading text-[14px] whitespace-nowrap'>Landing Page Templates</button>
                                        <button className='px-[10px] py-2 border-[0.5px] border-divider-main medium-heading text-[14px] whitespace-nowrap'>Web Templates</button>
                                    </div>
                                    <div className='flex justify-between mb-5'>
                                        <h3 className='main-heading '>Feature Product</h3>
                                        <button className='flex gap-2 items-center'>
                                            <p className='medium-info !text-primary'>View All Products  </p><Image src={sideArrow} width={9} height={5} alt="Side Arrow" className=''></Image></button>
                                    </div>
                                    <div className='grid grid-cols-2 place-items-center gap-[10px] mb-5'>
                                        <DropdownTemplateCard />
                                        <DropdownTemplateCard />
                                    </div>
                                </div>}
                            </div>
                            {/* Third Accordion End */}

                            <button className='solid-btn !py-[6px]'>Sign Up</button>
                        </div>
                        {/* Sidebar Main End */}

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
