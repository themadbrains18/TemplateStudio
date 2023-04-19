import React, { Fragment } from 'react'
import Card from '../snippets/card'
const CatergoriesCards = () => {
    let data = [
        {
            "img": "cardCategory.png",
            "caption": "Web & Landing Template",
        },
        {
            "img": "cardCategory2.png",
            "caption": "Mobile Apps",
        },
        {
            "img": "cardCategory3.png",
            "caption": "Shopify Themes",
        },
        {
            "img": "cardCategory4.png",
            "caption": "HTML Development",
        }
    ]
    return (
        <>
            <section className='sec_spacing'>
                <div className='container'>
                    <div className='grid grid-cols-2 md:grid-cols-4 place-items-center gap-[30px]'>
                        {
                            data.map((value, index) => {
                                return (
                                    <Fragment key={index}>
                                        <Card items={value} />
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

export default CatergoriesCards