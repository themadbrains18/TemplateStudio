import Banner from '@/components/product-page/banner'
import ProductCollection from '@/components/product-page/productCollection'
import React from 'react'

const ProductPage = ({productList}) => {
  return (
   <>
    <Banner/>
    <ProductCollection productList={productList}/>
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

export default ProductPage