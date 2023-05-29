import React, { Fragment } from 'react'
import TemplateCard from '../snippets/templateCard'

const RelatedProduct = (props) => {
    return (
        <>
            <section className='sec_spacing-80 bg-back-white'>
                <div className='big_container'>
                    <h2 className='main-heading mb-5 md:mb-6'>Related Products</h2>
                    <div className='grid grid-cols-1 gap-[20px]  place-items-center  sm:grid-cols-2 md:gap-[30px]  lg:grid-cols-4'>
                        {
                            props?.productList.slice(0, 4).map((value, index) => {
                                return (
                                    <Fragment key={value.id}>
                                        <TemplateCard items={value} />
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default RelatedProduct