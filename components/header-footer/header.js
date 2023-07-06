import React, { Fragment, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react';

import logo from 'public/icons/Logo.svg'
import searchIcon from 'public/icons/search-icon.svg'
import menuBtn from 'public/icons/menu-btn.svg'
import menuLogo from 'public/icons/menuLogo.svg'
import popupCloseBtn from 'public/icons/popupCloseBtn.svg'
import searchIconPopup from 'public/icons/searchIcon.svg'

import downArrowSearch from 'public/icons/downArrowSearch.svg'
import searchCloseIcon from 'public/icons/searchCloseIcon.svg'
import NavDropdown from '../snippets/navDropdown'
import NavDropdownMob from '../snippets/navDropdownMob'
import { date } from 'yup';



const Header = (props) => {
    const [sideBar, setSideBar] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [isShown, setIsShown] = useState(0);
    const [text, setText] = useState('All Product');
    const { data: session } = useSession()
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [serchedData, setSerchedData] = useState();

    const keys = ["name"];

    const dropdown = useRef(null);

    useEffect(() => {
        function handleClick(event) {
            if (dropdown.current && !dropdown.current.contains(event.target)) {
                setToggle(false);
            }
        }

        window.addEventListener("click", handleClick);
        // clean up
        return () => window.removeEventListener("click", handleClick);

    }, [])


    const toggleSidebar = () => {
        sideBar === true ? setSideBar(false) : setSideBar(true);
    }
    const ToggleDropDown = () => {
        toggle === true ? setToggle(false) : setToggle(true)
    }

    console.log(query, "what is inside query")

    useEffect(() => {
        console.log(props?.allProductList, "==dkdjkj");
        setData(props?.allProductList);
        if (query.length > 1) {
            search()
        }else{
            setSerchedData([])
        }
    }, [query]);
    
    function search() {
        let returnitem = data.filter((item) => { return item.name.toLowerCase().includes(query) })
        setSerchedData(returnitem);
    }


    const searchDropdown = ["All Products", "Sports", "Insurance", "Education", "Entertainment", "Real Estate", "Retail", "Technology"]
    return (
        <>
            <header className='py-[34px] border-b-[1px] border-divider-main relative z-50 bg-white'>
                <div className='container'>
                    <nav className='flex items-center justify-between'>
                        {/* Toggle button Mob Start */}
                        <button className='xmd:hidden' onClick={toggleSidebar}>
                            <Image src={menuBtn} width={24} height={24} alt="Menu Button"></Image>
                        </button>
                        {/* Toggle button Mob End */}

                        <div className='header_left flex gap-10 xl:gap-[65px]'>
                            {/* Header logo Start*/}
                            <Link href="/" className=''>
                                <Image src={logo} width={193} height={28} alt="Header Logo" className='xmd:max-w-[276px] xmd:w-full xmd:h-10'></Image>
                            </Link>
                            {/* Header logo End */}

                            {/* Nav Start */}
                            <ul className='gap-8 hidden xmd:flex'>
                                {
                                    props?.categoryList.map((item, index) => {
                                        return (
                                            <Fragment key={item.id} >
                                                <li className='nav-info hoverNavArrow flex gap-2 items-center hover:text-primary transition-300 relative cursor-pointer' onMouseEnter={() => setIsShown(index + 1)} onMouseLeave={() => setIsShown(0)}>
                                                    <span className=''>{item?.category}</span>
                                                    <svg className='nav_down_arrow' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 1L4.93934 4.93934C5.52513 5.52513 6.47517 5.52483 7.06095 4.93905C8.4141 3.5859 9.42961 2.57039 11 1" stroke="#110833" strokeWidth="1.5" strokeLinecap="round" />
                                                    </svg>
                                                </li>
                                            </Fragment>
                                        )
                                    })
                                }
                            </ul>

                            {/* Nav End */}
                        </div>
                        <div className='flex items-center xmd:gap-7'>
                            {/* Search Bar Start*/}

                            <div className={`relative transition-300 `}>
                                <Image src={searchIcon} width={18} height={18} alt="Search Icon" className='cursor-pointer' onClick={() => { setSearchBar(true) }} />

                                <div className={`absolute w-[315px] md:w-[380px] top-[50%]  translate-y-[-50%] bg-white duration-700 transition-all ${searchBar ? "left-[calc(100%-300px)] visible opacity-[1] md:left-[calc(100%-380px)]" : "left-[calc(100%+20px)] invisible opacity-0"}`}>
                                    <div className='px-2 py-3  border-[1px] border-primary-400'>
                                        <div className='flex gap-[10px]'>
                                            <div ref={dropdown} >
                                                <button className='flex items-center cursor-pointer gap-2 px-[15px] py-[5px] bg-primary-700' onClick={() => { ToggleDropDown(true) }}>
                                                    <span className='small-info whitespace-nowrap'>{text}</span>
                                                    <Image src={downArrowSearch} width={10} height={5} alt="Down Arrow" className={`nav_down_arrow ${toggle && "rotate-180"}  `} />
                                                </button>
                                            </div>
                                            <ul className={`py-[10px] absolute top-[50px] left-0 max-w-[170px] sm:max-w-[218px] w-full bg-white  transition-300 shadow-btnShadow-Dropdown visible  ${toggle ? "" : "opacity-0 invisible "}`}>
                                                {
                                                    searchDropdown?.map((elem, index) => {
                                                        return (
                                                            <Fragment key={elem.id}>
                                                                <li className='main-info cursor-pointer py-2 px-[30px] mb-[10px] hover:bg-primary-800 border-l-2 border-transparent hover:border-l-2 hover:border-primary rounded-sm transition-300'
                                                                    onClick={() => {
                                                                        setText(elem)
                                                                    }} >{elem}</li>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <span className='border-[1px] border-primary-400'></span>
                                            <div className='flex'>
                                                <input type='text' placeholder='Search all templates.... ' className='max-w-[200px] w-full pr-3 outline-none' onChange={(e) => setQuery(e.target.value.toLowerCase())} />
                                                <Image src={searchCloseIcon} width={20} height={20} alt="Searchclose button" className='cursor-pointer' onClick={() => { setSearchBar(false) }} />
                                            </div>
                                        </div>
                                    </div>
                                    <ul className='fixed bg-white w-full shadow-md'>
                                        {
                                            serchedData?.map((searchItems,index) => {
                                                return (
                                                    <Fragment key={index}>
                                                        <li className='' onClick={()=>{ setSerchedData([])}}> <Link href={`/product/${searchItems.id}`} className='block px-3 py-3 hover:bg-icon-bg'> {searchItems?.name} </Link></li>
                                                    </Fragment>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>

                            {/* Search Bar End*/}

                            {/* Sign Up Button Start*/}
                            {session === undefined || session === null &&
                                <Link href="/register" className='solid-btn text-lg font-semibold hidden xmd:block'>Sign Up</Link>
                            }
                            {session !== undefined && session !== null &&
                                <h5 className='text-lg font-semibold hidden xmd:block'>Welcome {session?.user?.name}</h5>
                            }
                            {/* Sign Up Button End*/}
                        </div>
                    </nav>
                    {/* Dropdown OF First Nav Item */}

                    {props?.categoryList.map((item, index) => {
                        return (
                            <Fragment key={item.id}>
                                <div key={item.id} className={`transition-300 hover:opacity-100 hover:visible  ${isShown === (index + 1) ? 'visible opacity-1' : 'opacity-0 invisible'}`}>
                                    <NavDropdown category={item} uiTemplate={item?.subcategories} products={props.productList} />
                                </div>
                            </Fragment>
                        )
                    })}

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
                            {
                                props?.categoryList.map((item, index) => {
                                    return (
                                        <Fragment key={item.id}>
                                            <NavDropdownMob heading={item?.category} subHeading={item?.subcategories} products={props.productList} toggleSidebar={toggleSidebar} />
                                        </Fragment>
                                    )
                                })
                            }

                            {/* First Accordion End */}


                            <Link href="/register" className='solid-btn !py-[6px]'>Sign Up</Link>
                        </div>
                        {/* Sidebar Main End */}

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
