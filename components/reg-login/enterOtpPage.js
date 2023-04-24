import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import googleIcon from 'public/icons/googleIcon.svg'
import fbIcon from 'public/icons/fbIcon.svg'
import twitterIcon from 'public/icons/twitterIcon.svg'
import regLogo from 'public/icons/regLogo.svg'
import backButton from 'public/icons/backButton.svg'
import Link from 'next/link'

const EnterOtpPage = () => {
    const [emailOtp, setEmailOtp] = useState();
    useEffect(() => {
        const emailinputElements = document.querySelectorAll('.input_wrapper_email input');


        emailinputElements.forEach((ele, index) => {
            ele.addEventListener('keydown', (e) => {

                if (e.keyCode === 8 && e.target.value === '') emailinputElements[Math.max(0, index - 1)].focus()
            })
            ele.addEventListener('input', (e) => {

                const [first, ...rest] = e.target.value
                e.target.value = first ?? ''
                const lastInputBox = index === emailinputElements.length - 1
                const didInsertContent = first !== undefined
                if (didInsertContent && !lastInputBox) {
                    // continue to input the rest of the string
                    emailinputElements[index + 1].focus()
                    emailinputElements[index + 1].value = rest.join('')
                    emailinputElements[index + 1].dispatchEvent(new Event('input'))
                }
                else {
                    setEmailOtp(emailinputElements[0].value + '' + emailinputElements[1].value + '' + emailinputElements[2].value + '' + emailinputElements[3].value + '' + emailinputElements[4].value + '' + emailinputElements[5].value);
                }
            })
        })

    }, [])

    return (
        <>
            <div className='grid grid-cols-1 justify-items-center xmd:grid-cols-2  '>
                <div className='bg-reg-bg w-full h-[374px] xmd:h-[700px] flex flex-col justify-between py-[50px] px-5 xmd:px-[40px] xl:px-[100px] xl:h-[1080px]'>
                    <Image src={regLogo} width={276} height={40} alt='image error' />
                    <p className='font-open-sans font-normal text-[32px] xmd:text-[40px]  xl:text-[62px] text-white max-w-[900px] w-full text-center'>Free High-quality UI kits and design resources</p>
                    <p className='text-white font-open-sans font-medium text-[14px]'>By Madbrains Technologies LLP.</p>
                </div>

                <div className='flex flex-col justify-between  py-[40px] px-5 xmd:py-[50px] xmd:px-[40px] xl:px-[100px]  max-w-[960px] w-full bg-white'>
                    <div className='mb-[50px]'>
                        <h1 className='reg-heading mb-[20px] xmd:mb-[70px]'>Enter OTP</h1>
                        <div className='flex gap-3'>
                            <Image src={backButton} width={13} height={13} alt='image error' />
                            <Link href="/" className='font-open-sans font-semibold text-[18px] text-primary-100'>Back To Log In</Link>
                        </div>
                    </div>
                    <div className='mb-[30px] xmd:mb-0'>
                        <ul className='mb-5 xmd:mb-[30px]'>
                            <li className='mb-5 xmd:mb-[30px]'>
                                <div className='mt-5 mb-[60px]'>
                                    <label className='block reg-info mb-[30px]'>Please enter one time OTP</label>
                                    <div className="flex justify-center  bg-primary-800 py-2 xmd:py-[15px] px-5 xmd:px-[45px] gap-[10px] sm:gap-[20px] lg:gap-[30px] input_wrapper input_wrapper_email">
                                        <input type="number" className="block px-2 md:px-4  bg-divider-main border text-center border-divider-main w-[35px] md:w-[46px] min-h-[35px] md:min-h-[46px] text-black  outline-none" name="code1" />
                                        <input type="number" className="block px-2 md:px-4  bg-divider-main border text-center border-divider-main  w-[35px] md:w-[46px] min-h-[35px] md:min-h-[46px] text-black  outline-none" name="code2" />
                                        <input type="number" className="block px-2 md:px-4  bg-divider-main border text-center border-divider-main  w-[35px] md:w-[46px] min-h-[35px] md:min-h-[46px] text-black  outline-none" name="code3" />
                                        <input type="number" className="block px-2 md:px-4  bg-divider-main border text-center border-divider-main  w-[35px] md:w-[46px] min-h-[35px] md:min-h-[46px] text-black  outline-none" name="code4" />
                                        <input type="number" className="block px-2 md:px-4  bg-divider-main border text-center  border-divider-main  w-[35px] md:w-[46px] min-h-[35px] md:min-h-[46px] text-black  outline-none" name="code5" />
                                        <input type="number" className="block px-2 md:px-4  bg-divider-main border text-center border-divider-main  w-[35px] md:w-[46px] min-h-[35px] md:min-h-[46px] text-black  outline-none" name="code6" />
                                    </div>
                                </div>
                                <p className='font-open-sans font-normal text-[14px] text-[#4B5563]'>Please check your mobile, 6-digit confirmation code to (+1234567890), please enter the confirmation code to verify it’s you.</p>
                            </li>
                        </ul>

                        <div className='text-right mb-[30px] xmd:mb-[60px]'>
                            <button type='submit' className='solid-btn w-full !py-[13px] text-[18px] mb-5'>Verify Now</button>
                        </div>
                        <div className='flex gap-4 justify-center'>
                            <p className='font-open-sans font-normal text-[14px] text-[#4B5563]'> Resend OTP After (04:20)</p>
                            <span className='font-open-sans font-normal text-[14px] text-[#0A394F]'>Resend Code</span>
                        </div>
                    </div>
                    <p className='font-open-sans text-base text-[#544E4E]' >Not a member yet? <button className='text-main-text font-semibold'>Register Now</button></p>
                </div>
            </div>
        </>
    )
}

export default EnterOtpPage