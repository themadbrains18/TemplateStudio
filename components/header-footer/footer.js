import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logoFooter from 'public/icons/logo-footer.svg'

import mediaIcon1 from 'public/icons/mediaIcon1.svg'
import linkedIn from 'public/icons/linkedIn.svg'
import twitter from 'public/icons/twitter.svg'
import behance from 'public/icons/behance.svg'
import instagram from 'public/icons/instagram.svg'

const Footer = () => {
  return (
    <footer className='pt-[80px] pb-10'>
      <div className='container'>
        <div className='md:border-b-[1px] md:pb-[50px] md:border-divider-main md:flex md:gap-5 justify-between'>
          <div className='w-full mb-5 md:max-w-[370px]'>
            <Image src={logoFooter} width={227} height={35} alt="Footer Logo" className='mb-[10px]' ></Image>
            <p className='info-14 text-sm'>Template Studio is the place to find free of cost high-quality design resources for designers, creative agencies and developers</p>
            <div className='hidden gap-6 '>
              <Image src={mediaIcon1} width={30} height={30} alt='img error'></Image>
              <Image src={linkedIn} width={30} height={30} alt='img error'></Image>
              <Image src={twitter} width={30} height={30} alt='img error'></Image>
              <Image src={behance} width={30} height={30} alt='img error'></Image>
              <Image src={instagram} width={30} height={30} alt='img error'></Image>
            </div>
          </div>

          <div className='flex gap-[68px] flex-wrap sm:flex-nowrap md:gap-10 md:justify-between xmd:gap-[68px]'>
            <ul>
              <li className='footer-title mb-10'>Design</li>
              <li className='footer-info block mb-[26px]'><Link href="/"> Sketch </Link></li>
              <li className='footer-info block mb-[26px]'><Link href="/"> Adobe XD </Link></li>
              <li className='footer-info block mb-[26px]'><Link href="/"> Figma </Link></li>
            </ul>
            <ul>
              <li className='footer-title mb-10'>Coded </li>
              <li className='footer-info block mb-[26px]'><Link href="/"> HTML </Link></li>
              <li className='footer-info block mb-[26px]'><Link href="/"> React</Link></li>
              <li className='footer-info block mb-[26px]'><Link href="/"> Wordpress </Link></li>
              <li className='footer-info block mb-[26px]'><Link href="/"> Shopify </Link></li>
              <li className='footer-info block mb-[26px]'><Link href="/"> Bootstrap </Link></li>
            </ul>
            <ul className='md:max-w-[370px] -mt-[60px] sm:mt-0'>
              <li className='footer-title mb-[15px]'>Join Our Newsletter</li>
              <li className='info-14 text-[14px] block mb-[20px]'>Sign Up Our Newsletter And Get Notified About Exclusive Freebies!</li>
              <li className='flex items-center'><input type='email' placeholder='Enter your email' className='border-[1px] border-primary pt-[6px] pb-2 px-[10px] outline-none lg:pt-[9px] lg:pb-[9px]' /><button className='solid-btn text-sm'>Submit</button></li>
            </ul>
          </div>
        </div>
        <div className='hidden justify-between pt-[30px]  md:flex'>
          <p className='footer-info'> Template Studio | © 2022 All Rights Reserved</p>
          <div className='flex gap-[30px]'>
            <Link href='' className='footer-info'>Licensing </Link>
            <Link href='' className='footer-info'>Terms & Conditions </Link>
            <Link href='' className='footer-info'>Privacy & Policy </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer