import NewPdpTabs from '@/components/new-product-Detail/newPdpTabs'
import PdpSec from '@/components/new-product-Detail/pdpSec'
import RelatedProduct from '@/components/new-product-Detail/relatedProduct'
import SlugRating from '@/components/new-product-Detail/slugRating'
import React from 'react'

const NewProductDetail = () => {
    return (
        <>
            <SlugRating />
            <PdpSec />
            <NewPdpTabs />
            <RelatedProduct />
        </>
    )
}

export default NewProductDetail