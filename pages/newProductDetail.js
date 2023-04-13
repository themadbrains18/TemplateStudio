import NewPdpTabs from '@/components/new-product-Detail/newPdpTabs'
import RelatedProduct from '@/components/new-product-Detail/relatedProduct'
import SlugRating from '@/components/new-product-Detail/slugRating'
import React from 'react'

const NewProductDetail = () => {
    return (
        <>
            <SlugRating />
            <NewPdpTabs />
            <RelatedProduct />
        </>
    )
}

export default NewProductDetail