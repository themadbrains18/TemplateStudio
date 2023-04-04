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
        <div className='flex justify-between pb-[60px] border-b-[1px] border-divider-main'>
          <div className='max-w-[370px] w-full'>
            <Image src={logoFooter} width={227} height={35} alt="Footer Logo" className='pb-8' ></Image>
            <p className='info-14 text-sm pb-[135px] '>Template Studio is the place to find free of cost high-quality design resources for designers, creative agencies and developers</p>
            <div className='flex gap-6'>
              <Image src={mediaIcon1} width={30} height={30} alt='img error'></Image>
              <Image src={linkedIn} width={30} height={30} alt='img error'></Image>
              <Image src={twitter} width={30} height={30} alt='img error'></Image>
              <Image src={behance} width={30} height={30} alt='img error'></Image>
              <Image src={instagram} width={30} height={30} alt='img error'></Image>
            </div>
          </div>
          <div className='flex gap-[68px]'>
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
            <ul className='max-w-[370px] w-full'>
              <li className='footer-title mb-10'>Join Our Newsletter</li>
              <li className='info-14 text-[14px] block mb-[26px]'>Sign Up Our Newsletter And Get Notified About Exclusive Freebies!</li>
            </ul>
          </div>
        </div>
        <div className='flex justify-between pt-[30px]'>
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