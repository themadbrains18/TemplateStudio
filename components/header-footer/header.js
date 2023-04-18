import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DropdownTemplateCard from '../snippets/dropdownTemplateCard'


import logo from 'public/icons/Logo.svg'
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
import NavDropdown from '../snippets/navDropdown'



const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [sideBar, setSideBar] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [isShown, setIsShown] = useState(0);

    const toggleSidebar = () => {
        sideBar === true ? setSideBar(false) : setSideBar(true);
    }
    const ToggleDropDown = () => {
        toggle === true ? setToggle(false) : setToggle(true)
    }

    const uiTemplate = [
        {
            title: "Web Templates",
        },
        {
            title: "Mobile App",
        },
        {
            title: "Dashboards",
        },
        {
            title: "Landing Page T..",
        },
        {
            title: "Web Template",
        },
    ]

    const htmlTemplate = [
        {
            title: "HTML Website Templates",
        },
        {
            title: "Tailwind Template",
        },
        {
            title: "WordPress Themes",
        },
        {
            title: "Shopify Themes",
        },
        {
            title: "MUI Template",
        },
        {
            title: "Bootstrap",
        },
        {
            title: "CSS",
        },
        {
            title: "React",
        },
    ]
    const studioTemplate = [
        {
            title: "Web Sites",
        },
        {
            title: "Mobile Sites",
        },
        {
            title: "Dashboard App",
        },
        {
            title: "Landing Page ",
        },
        {
            title: "Web Template",
        },
    ]
    return (
        <>
            <header className='py-[34px] border-b-[1px] border-divider-main relative z-50'>
                <div className='container'>
                    <nav className='flex items-center justify-between'>
                        {/* Toggle button Mob Start */}
                        <button className='xmd:hidden' onClick={toggleSidebar}>
                            <Image src={menuBtn} width={24} height={24} alt="Menu Button"></Image>
                        </button>
                        {/* Toggle button Mob End */}

                        <div className='header_left flex gap-[65px]'>
                            {/* Header logo Start*/}
                            <Link href="/" className=''>
                                <Image src={logo} width={193} height={28} alt="Header Logo" className='xmd:max-w-[276px] xmd:w-full xmd:h-10'></Image>
                            </Link>
                            {/* Header logo End */}

                            {/* Nav Start */}
                            <ul className='gap-8 hidden xmd:flex'>
                                <li className='nav-info hoverNavArrow flex gap-2 items-center hover:text-primary transition-300 relative' onMouseEnter={() => setIsShown(1)} onMouseLeave={() => setIsShown(0)}>
                                    <span className=''>Ui Templates</span>
                                    <svg className='nav_down_arrow' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L4.93934 4.93934C5.52513 5.52513 6.47517 5.52483 7.06095 4.93905C8.4141 3.5859 9.42961 2.57039 11 1" stroke="#110833" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </li>
                                <li className='nav-info hoverNavArrow flex gap-2 items-center hover:text-primary transition-300 relative' onMouseEnter={() => setIsShown(2)} onMouseLeave={() => setIsShown(0)}>
                                    <span className=''>HTML Templates</span>
                                    <svg className='nav_down_arrow' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L4.93934 4.93934C5.52513 5.52513 6.47517 5.52483 7.06095 4.93905C8.4141 3.5859 9.42961 2.57039 11 1" stroke="#110833" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </li>
                                <li className='nav-info hoverNavArrow flex gap-2 items-center hover:text-primary transition-300 relative' onMouseEnter={() => setIsShown(3)} onMouseLeave={() => setIsShown(0)}>
                                    <span className=''>Studio Spacial</span>
                                    <svg className='nav_down_arrow' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L4.93934 4.93934C5.52513 5.52513 6.47517 5.52483 7.06095 4.93905C8.4141 3.5859 9.42961 2.57039 11 1" stroke="#110833" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </li>
                            </ul>


                            {/* Nav End */}
                        </div>
                        <div className='flex items-center xmd:gap-7'>
                            {/* Search Bar Start*/}
                            <div className={`relative transition-300 `}>
                                <Image src={searchIcon} width={18} height={18} alt="Search Icon" className='cursor-pointer' onClick={() => { setSearchBar(true) }} />

                                <div className={`px-2 py-3  border-[1px] border-primary-400  absolute w-[300px] md:w-[380px] top-[50%]  translate-y-[-50%] bg-white duration-700 transition-all ${searchBar ? "left-[calc(100%-300px)] visible opacity-[1] md:left-[calc(100%-380px)]" : "left-[calc(100%+20px)] invisible opacity-0"}`}>
                                    <div className='flex gap-[10px]'>
                                        <div>
                                            <div className='flex gap-2 px-[15px] py-[5px] bg-primary-700' onClick={() => { ToggleDropDown(true) }}>
                                                <span className='small-info whitespace-nowrap'>All Products</span>
                                                <Image src={downArrowSearch} width={10} height={5} alt="Down Arrow" className='nav_down_arrow' />
                                            </div>
                                        </div>
                                        <ul className={`py-[10px] absolute top-[50px] left-0 max-w-[218px] w-full bg-white  transition-300 ${toggle ? "" : " opacity-0 visible"} `}>
                                            <li className='main-info py-2 px-[30px] mb-[10px] hover:bg-primary-800 hover:border-l-2 border-primary rounded-sm transition-300'>All Products</li>
                                            <li className='main-info py-2 px-[30px] mb-[10px] hover:bg-primary-800 hover:border-l-2 border-primary rounded-sm transition-300'>Sports</li>
                                            <li className='main-info py-2 px-[30px] mb-[10px] hover:bg-primary-800 hover:border-l-2 border-primary rounded-sm transition-300'>Insurance</li>
                                            <li className='main-info py-2 px-[30px] mb-[10px] hover:bg-primary-800 hover:border-l-2 border-primary rounded-sm transition-300'>Education</li>
                                            <li className='main-info py-2 px-[30px] mb-[10px] hover:bg-primary-800 hover:border-l-2 border-primary rounded-sm transition-300'>Entertainment
                                            </li>
                                            <li className='main-info py-2 px-[30px] mb-[10px] hover:bg-primary-800 hover:border-l-2 border-primary rounded-sm transition-300'>Real Estate</li>
                                            <li className='main-info py-2 px-[30px] mb-[10px] hover:bg-primary-800 hover:border-l-2 border-primary rounded-sm transition-300'>Retail</li>
                                            <li className='main-info py-2 px-[30px] mb-[10px] hover:bg-primary-800 hover:border-l-2 border-primary rounded-sm transition-300'>Technology</li>
                                        </ul>
                                        <span className='border-[1px] border-primary-400'></span>
                                        <div className='flex'>
                                            <input type='text' placeholder='Search all templates.... ' className='max-w-[200px] w-full pr-3 outline-none' />
                                            <Image src={searchCloseIcon} width={20} height={20} alt="Searchclose button" className='cursor-pointer' onClick={() => { setSearchBar(false) }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Search Bar End*/}

                            {/* Sign Up Button Start*/}
                            <button className='solid-btn text-lg font-semibold hidden xmd:block'>Sign Up</button>
                            {/* Sign Up Button End*/}
                        </div>
                    </nav>
                    {/* Dropdown OF First Nav Item*/}
                    <div className={`transition-300 hover:opacity-100 hover:visible  ${isShown === 1 ? 'visible opacity-1' : 'opacity-0 invisible'}`}>
                        <NavDropdown uiTemplate={uiTemplate} />
                    </div>
                    {/* Dropdown OF First Nav Item End*/}

                    {/* Dropdown OF Second Nav Item Start*/}
                    <div className={`transition-300 hover:opacity-100 hover:visible  ${isShown === 2 ? 'visible opacity-1' : 'opacity-0 invisible'}`}>
                        <NavDropdown uiTemplate={htmlTemplate} />
                    </div>
                    {/* Dropdown OF Second Nav Item End*/}

                    {/* Dropdown OF Third Nav Item Start*/}
                    <div className={`transition-300 hover:opacity-100 hover:visible  ${isShown === 3 ? 'visible opacity-1' : 'opacity-0 invisible'}`}>
                        <NavDropdown uiTemplate={studioTemplate} />
                    </div>
                    {/* Dropdown OF Third Nav Item End*/}


                    {/*Header Menu SideBar*/}
                    <div className={`menu_sidebar max-w-[375px] w-full bg-white fixed top-0 -left-full transition-all duration-700 border-[1px] border-divider-main z-50 ${sideBar == true ? 'active' : ''}`}>
                        {/* Sidebar Header */}
                        <div className='py-5 px-[15px] flex justify-between items-center mb-[30px]'>
                            <Image src={menuLogo} width={193} height={28} alt="Down Arrow" className=''></Image>
                            <button onClick={toggleSidebar}> <Image src={popupCloseBtn} width={16} height={16} alt="Popup Close Button" className=''></Image></button>
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
