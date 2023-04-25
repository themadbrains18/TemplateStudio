import Image from 'next/image'
import React from 'react'

import googleIcon from 'public/icons/googleIcon.svg'
import fbIcon from 'public/icons/fbIcon.svg'
import twitterIcon from 'public/icons/twitterIcon.svg'
import regLogo from 'public/icons/regLogo.svg'
import backButton from 'public/icons/backButton.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ForgotPassPage = () => {
    const router = useRouter()
    return (
        <>
            <div className='grid grid-cols-1 justify-items-center lg:grid-cols-2  '>
                <div className='bg-reg-bg w-full h-[374px] lg:h-[900px] flex flex-col justify-between py-[50px] px-5 lg:px-[40px] xl:px-[100px] xl:h-[100vh]'>
                    <Image src={regLogo} width={276} height={40} alt='image error' className='cursor-pointer' onClick={()=>{router.push('/')}} />
                    <p className='font-open-sans font-normal text-[32px] lg:text-[40px]  xl:text-[62px] text-white max-w-[900px] w-full text-center'>Free High-quality UI kits and design resources</p>
                    <p className='text-white font-open-sans font-medium text-[14px]'>By Madbrains Technologies LLP.</p>
                </div>

                <div className='flex flex-col justify-between  py-[40px] px-5 lg:py-[50px] lg:px-[40px] xl:px-[100px]  max-w-[960px] w-full bg-white'>
                    <div className='mb-[50px]'>
                        <h1 className='reg-heading mb-[20px] lg:mb-[70px]'>Forgot Password</h1>
                        <div className='flex gap-3'>
                            <Image src={backButton} width={13} height={13} alt='image error' />
                            <Link href="/" className='font-open-sans font-semibold text-[18px] text-primary-100'>Back To Log In</Link>
                        </div>
                    </div>
                    <div className='mb-[30px] lg:mb-0'>
                        <ul className='mb-5 lg:mb-[30px]'>
                            <li className='mb-5 lg:mb-[30px]'>
                                <label className='block reg-info mb-1'>Email or Phone</label>
                                <input type='text' placeholder='Your Details ' className='py-[14px] px-5 outline-none border border-divider-main w-full block bg-primary-800' />
                            </li>
                        </ul>

                        <div className='text-right mb-[30px] lg:mb-[60px]'>
                            <button type='submit' className='solid-btn w-full !py-[13px] text-[18px] mb-5'>Send OTP</button>
                            <button className='medium-info text-right'>Forgot Password</button>
                        </div>
                        <div className='flex justify-between gap-[15px]'>
                            <button className='flex gap-[8px] lg:gap-[15px] justify-center items-center border border-divider-main py-[6px] lg:py-[10px] px-5 max-w-[190px] w-full'>
                                <Image src={googleIcon} width={16} height={16} alt='image error' />
                                <span className='font-open-sans font-normal text-[14px] lg:text-base text-[#0A394F]'>Google</span>
                            </button>
                            <button className='flex gap-[8px] lg:gap-[15px] justify-center items-center border border-divider-main py-[6px] lg:py-[10px] px-5 max-w-[190px] w-full'>
                                <Image src={fbIcon} width={16} height={16} alt='image error' />
                                <span className='font-open-sans font-normal text-[14px] lg:text-base text-[#0A394F]'>Facebook</span>
                            </button>
                            <button className='flex gap-[8px] lg:gap-[15px] justify-center items-center border border-divider-main py-[6px] lg:py-[10px] px-5 max-w-[190px] w-full'>
                                <Image src={twitterIcon} width={16} height={16} alt='image error' />
                                <span className='font-open-sans font-normal text-[14px] lg:text-base text-[#0A394F]'>Twitter</span>
                            </button>
                        </div>
                    </div>
                    <p className='font-open-sans text-base text-[#544E4E]' >Not a member yet? <button className='text-main-text font-semibold'>Register Now</button></p>
                </div>
            </div>
        </>
    )
}

export default ForgotPassPage