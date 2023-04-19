import React from 'react'

const Credit = ({tabContent}) => {
  return (
   <>
      <div className={`${tabContent === 3 ? "block  mx-0 xl:mx-44 pt-[20px] md:pt-[40px] xl:pt-[80px]" : "hidden "}`}>
                        <h3 className='small-heading  mb-5'>Sources   </h3>
                        <div className='px-[30px] md:px-[67px] py-5 md:py-10 border border-divider-light'>
                            <ul className='grid grid-cols-2 border-b border-divider-main pb-5 mb-5'>
                                <li>
                                    <p className=' main-info mb-5'> Fonts Used </p>
                                    <span className='list-item list-disc font-open-sans font-semibold text-sm text-link-main mb-[10px]'> Poppins </span>
                                    <span className='list-item list-disc font-open-sans font-semibold text-sm text-link-main mb-[10px]'> Open Sans </span>
                                </li>
                                <li>
                                    <p className=' main-info mb-5'> Icons Used </p>
                                    <span className='list-item list-disc font-open-sans font-semibold text-sm text-link-main mb-[10px]'> Freepik </span>
                                    <span className='list-item list-disc font-open-sans font-semibold text-sm text-link-main mb-[10px]'> flaticon </span>
                                </li>
                            </ul>
                            <ul className='grid grid-cols-2 '>
                                <li>
                                    <p className=' main-info mb-5'> Fonts Used </p>
                                    <span className='list-item list-disc font-open-sans font-semibold text-sm text-link-main mb-[10px]'> Poppins </span>
                                    <span className='list-item list-disc font-open-sans font-semibold text-sm text-link-main mb-[10px]'> Open Sans </span>
                                </li>
                                <li>
                                    <p className=' main-info mb-5'> Icons Used </p>
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