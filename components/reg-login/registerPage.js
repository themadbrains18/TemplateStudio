import Image from 'next/image'
import React from 'react'

import googleIcon from 'public/icons/googleIcon.svg'
import fbIcon from 'public/icons/fbIcon.svg'
import twitterIcon from 'public/icons/twitterIcon.svg'
import regLogo from 'public/icons/regLogo.svg'

const RegisterPage = () => {
    return (
        <>
            <div className='grid grid-cols-1 justify-items-center xmd:grid-cols-2  '>
                <div className='bg-reg-bg w-full h-[374px] xmd:h-[700px] flex flex-col justify-between py-[50px] px-5 xmd:px-[40px] xl:px-[100px] xl:h-[1080px]'>
                    <Image src={regLogo} width={276} height={40} alt='image error' />
                    <p className='font-open-sans font-normal text-[32px] xmd:text-[40px]  xl:text-[62px] text-white max-w-[900px] w-full text-center'>Free High-quality UI kits and design resources</p>
                    <p className='text-white font-open-sans font-medium text-[14px]'>By Madbrains Technologies LLP.</p>
                </div>

                <div className='flex flex-col justify-between  py-[40px] px-5 xmd:py-[50px] xmd:px-[40px] xl:px-[100px]  max-w-[960px] w-full bg-white'>
                    <h1 className='reg-heading mb-[30px] xmd:mb-0'>Register Here!</h1>
                    <div className='mb-[30px] xmd:mb-0'>
                        <ul className='mb-5 xmd:mb-[30px]'>
                            <li className='mb-5 xmd:mb-[30px]'>
                                <label className='block reg-info mb-1'>Name</label>
                                <input type='text' placeholder='Name' className='py-[14px] px-5 outline-none border border-divider-main w-full block bg-primary-800' />
                            </li>
                            <li className='mb-5 xmd:mb-[30px]'>
                                <label className='block reg-info mb-1'>Email or Phone</label>
                                <input type='text' placeholder='Your Details ' className='py-[14px] px-5 outline-none border border-divider-main w-full block bg-primary-800' />
                            </li>
                            <li>
                                <label className='block reg-info mb-1'>Password</label>
                                <input type='password' placeholder='Password' className='py-[14px] px-5 outline-none border border-divider-main w-full block bg-primary-800' />
                            </li>
                        </ul>
                        <div className=" mr-4 inline-block min-h-[1.5rem] pl-[1.5rem] mb-[30px] xmd:mb-[40px] xl:mb-[60px]">
                            <input className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                type="checkbox"
                                id="showPass"
                            />
                            <label htmlFor='showPass' className='small-info !font-semibold !text-[#BA6EF4] cursor-pointer' >Show Password</label>
                        </div>
                        <div className='text-right mb-[30px] xmd:mb-[60px]'>
                            <button type='submit' className='solid-btn w-full !py-[13px] text-[18px] mb-5'>Create Account</button>
                            <button className='medium-info text-right'>Forgot Password</button>
                        </div>
                        <div className='flex justify-between gap-[15px]'>
                            <button className='flex gap-[8px] xmd:gap-[15px] justify-center items-center border border-divider-main py-[6px] xmd:py-[10px] px-5 max-w-[190px] w-full'>
                                <Image src={googleIcon} width={16} height={16} alt='image error' />
                                <span className='font-open-sans font-normal text-[14px] xmd:text-base text-[#0A394F]'>Google</span>
                            </button>
                            <button className='flex gap-[8px] xmd:gap-[15px] justify-center items-center border border-divider-main py-[6px] xmd:py-[10px] px-5 max-w-[190px] w-full'>
                                <Image src={fbIcon} width={16} height={16} alt='image error' />
                                <span className='font-open-sans font-normal text-[14px] xmd:text-base text-[#0A394F]'>Facebook</span>
                            </button>
                            <button className='flex gap-[8px] xmd:gap-[15px] justify-center items-center border border-divider-main py-[6px] xmd:py-[10px] px-5 max-w-[190px] w-full'>
                                <Image src={twitterIcon} width={16} height={16} alt='image error' />
                                <span className='font-open-sans font-normal text-[14px] xmd:text-base text-[#0A394F]'>Twitter</span>
                            </button>
                        </div>
                    </div>
                    <p className='font-open-sans text-base text-[#544E4E]' >Not a member yet? <button className='text-main-text font-semibold'>Register Now</button></p>
                </div>
            </div>
        </>
    )
}

export default RegisterPage