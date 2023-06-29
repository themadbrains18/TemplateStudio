import Link from 'next/link'
import React, { Fragment } from 'react'

const Credit = ({ tabContent, product }) => {
    return (
        <>
            <div className={`${tabContent === 3 ? "block  mx-0 xl:mx-44 pt-[20px] md:pt-[40px] xl:pt-[80px]" : "hidden "}`}>
                <h3 className='small-heading  mb-5'>Sources   </h3>
                <div className='px-[30px] md:px-[67px] py-5 md:py-10 border border-divider-light'>
                    <ul className='grid grid-cols-2 border-b border-divider-main pb-5 mb-5'>
                        <li>
                            <p className=' main-info mb-5'> Fonts Used </p>
                            {
                                product?.fonts!==undefined && product?.fonts!==null && product?.fonts.map((font, ind ) => {
                                    return (
                                        <Fragment key={font.id}>
                                            <Link rel="noopener noreferrer" target="_blank" href={`${font.fontUrl}`} className='list-item list-disc font-open-sans font-semibold text-sm text-link-main mb-[10px]'>{font.fontName} </Link>
                                        </Fragment>
                                    )
                                })
                            }

                        </li>
                        <li>
                            <p className=' main-info mb-5'> Icons Used </p>
                            {
                                product?.icons!==undefined && product?.icons!==null && product?.icons.map((icon, ind ) => {
                                    return (
                                        <Fragment key={icon.id}>
                                            <Link rel="noopener noreferrer" target="_blank" href={`${icon.iconUrl}`} className='list-item list-disc font-open-sans font-semibold text-sm text-link-main mb-[10px]'>{icon.iconName} </Link>
                                        </Fragment>
                                    )
                                })
                            }
                        </li>
                    </ul>
                    <ul className='grid grid-cols-2 '>
                        <li>
                            <p className=' main-info mb-5'> Images Used </p>
                            {
                                product?.images!==undefined && product?.images!==null && product?.images.map((img, ind ) => {
                                    console.log(img,"imgg...")
                                    return (
                                        <Fragment key={img.id}>
                                            <Link rel="noopener noreferrer" target="_blank" href={`${img.imageUrl}`} className='list-item list-disc font-open-sans font-semibold text-sm text-link-main mb-[10px]'>{img.imageName} </Link>
                                        </Fragment>
                                    )
                                })
                            }
                        </li>
                        <li>
                            <p className=' main-info mb-5'> Illustrations Used </p>
                            <span className='list-item list-disc font-open-sans font-semibold text-sm text-link-main mb-[10px]'> Freepik </span>
                            <span className='list-item list-disc font-open-sans font-semibold text-sm text-link-main mb-[10px]'> flaticon </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Credit