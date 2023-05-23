import NewPdpTabs from '@/components/new-product-Detail/newPdpTabs'
import PdpSec from '@/components/new-product-Detail/pdpSec'
import RelatedProduct from '@/components/new-product-Detail/relatedProduct'
import SlugRating from '@/components/new-product-Detail/slugRating'
import React from 'react'

const NewProductDetail = ({productList}) => {
    return (
        <>
            <SlugRating />
            <PdpSec />
            <NewPdpTabs productList={productList} />
            <RelatedProduct productList={productList}/>
        </>
    )
}

export async function getServerSideProps(context) {
  
    const { req, params } = context;
  
    let productList = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/product`, {
      method: "GET"
    }).then(response => response.json());
  
    return {
      props: {
        productList: productList?.data?.data
  
      },
    };
  
  }

export default NewProductDetail