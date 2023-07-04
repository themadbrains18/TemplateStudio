import React, { Fragment } from 'react'
import TemplateCard from '../snippets/templateCard'


const FeatureProducts = (props) => {

    return (
        <>
            <section className='sec_spacing bg-back-white'>
                <div className='container'>
                    <h2 className='main-heading mb-5 md:mb-6'>Feature Products</h2>
                    <div className='grid grid-cols-1 gap-[20px] mb-[30px] place-items-center  sm:grid-cols-2  md:mb-10 md:gap-[30px]  lg:grid-cols-3'>
                        {
                            props?.productList.map((value, index) => {
                                return (
                                    <Fragment key={value.id}>
                                        <TemplateCard items={value} />
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                    <div className='text-center'>
                        <a href='/productPage' className='solid-white-btn shadow-btnShadow text-center'>View All Products</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeatureProducts

