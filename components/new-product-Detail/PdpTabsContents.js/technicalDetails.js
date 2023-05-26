import React, { useEffect, useState } from 'react'

const TechnicalDetails = ({ tabContent, product }) => {

    return (
        <>
            <div className={`${tabContent === 2 ? "block  pt-[20px] md:pt-[40px] xl:pt-[80px] mx-0 xl:mx-44" : "hidden "}`}>
                <h3 className='small-heading  mb-5'>Highlight</h3>
                <div className='px-[30px] md:px-[67px] py-5 md:py-10 border border-divider-light'>

                    <ul className="grid grid-cols-1 gap-[10px] md:grid-cols-2">
                        {product?.technical!== undefined &&  product?.technical!== null && product?.technical.map((item) => {
                            return <li key={item} className='tech_detail list-disc main-info border-b border-divider-main pb-5 mb-5'>{item}</li>
                        })}
                    </ul>

                
                </div>
            </div>
        </>
    )
}

export default TechnicalDetails