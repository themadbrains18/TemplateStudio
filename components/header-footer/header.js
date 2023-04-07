import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from 'public/icons/Logo.svg'
import downArrow from 'public/icons/down-arrow.svg'
import searchIcon from 'public/icons/search-icon.svg'
import menuBtn from 'public/icons/menu-btn.svg'
import menuLogo from 'public/icons/menuLogo.svg'
import popupCloseBtn from 'public/icons/popupCloseBtn.svg'
import searchIconPopup from 'public/icons/searchIcon.svg'
import downarrowPopup from 'public/icons/downarrowPopup.svg'


const Header = () => {
    return (
        <>
            <header className='py-[34px] border-b-[1px] border-divider-main '>
                <div className='container'>
                    <nav className='flex items-center justify-between'>
                        <button className='xmd:hidden'>
                            <Image src={menuBtn} width={24} height={24} alt="Header Logo"></Image>
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
                                <span className='after:absolute after:h-[1px] after:w-[0px] after:bg-primary after:bottom-[-20%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] hover:after:w-[100%] after:duration-300'>Ui Templates</span>
                                <Image src={downArrow} width={10} height={5} alt="Down Arrow" className='nav_down_arrow'></Image>
                            </li>
                            <li className='nav-info hoverNavArrow flex gap-2 items-center hover:text-primary duration-300 relative'>
                                <span className='after:absolute after:h-[1px] after:w-[0px] after:bg-primary after:bottom-[-20%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] hover:after:w-[100%] after:duration-300'>Ui Templates</span>
                                <Image src={downArrow} width={10} height={5} alt="Down Arrow" className='nav_down_arrow'></Image>
                            </li>
                        </ul>
                        <div className='flex items-center xmd:gap-7'>
                            <Image src={searchIcon} width={18} height={18} alt="Search Icon"></Image>
                            <button className='solid-btn text-lg font-semibold hidden xmd:block'>Sign Up</button>
                        </div>
                    </nav>

                    {/* continue...................... */}

                    <div className='max-w-[375px] w-full bg-white fixed top-0 left-0 hidden'>
                        <div className='py-5 px-[15px] flex justify-between items-center mb-[30px]'>
                            <Image src={menuLogo} width={193} height={28} alt="Down Arrow" className=''></Image>
                            <button> <Image src={popupCloseBtn} width={16} height={16} alt="Down Arrow" className=''></Image></button>
                        </div>
                        <div className='px-5 py-[30px]  h-[100vh]'>
                            <div className='flex gap-2 p-[10px] border-[1px] border-divider-main w-full mb-[30px] '>
                                <button><Image src={searchIconPopup} width={16} height={16} alt="Icon Error"></Image></button>
                                <input type='text' placeholder='Search' className='outline-none w-full bg-transparent' />
                            </div>
                            <div className="">
                                <div class="flex justify-between pb-[10px] mb-7 border-b-[1px] border-divider-main">
                                    <p class="nav-info">Ui Templates</p>
                                    <Image src={downarrowPopup} width={12} height={6} alt="Down Arrow" className=''></Image>
                                </div>
                                <p class="accordion_ans">
                                </p>
                            </div>
                            <div className="">
                                <div class="flex justify-between pb-[10px] mb-7 border-b-[1px] border-divider-main">
                                    <p class="nav-info">HTML Templates</p>
                                    <Image src={downarrowPopup} width={12} height={6} alt="Down Arrow" className=''></Image>
                                </div>
                                <p class="accordion_ans">
                                </p>
                            </div>
                            <div className="">
                                <div class="flex justify-between pb-[10px] mb-7 border-b-[1px] border-divider-main">
                                    <p class="nav-info">Studio Spacial</p>
                                    <Image src={downarrowPopup} width={12} height={6} alt="Down Arrow" className=''></Image>
                                </div>
                                <p class="accordion_ans">
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </header >
        </>
    )
}

export default Header
