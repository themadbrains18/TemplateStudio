import Banner from '@/components/product-page/banner'
import ProductCollection from '@/components/product-page/productCollection'
import React from 'react'

const ProductPage = ({productList,softwareList,industryList,categoryList}) => {
  return (
   <>
    <Banner/>
    <ProductCollection productList={productList} softwareList={softwareList} industryList={industryList} categoryList={categoryList}/>
   </>
  )
}

export async function getServerSideProps(context) {
  
  const { req, params } = context;

  let productList = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/product`, {
    method: "GET"
  }).then(response => response.json());

  let softwareTypeList = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/softwaretype`, {
    method: "GET"
  }).then(response => response.json());

  let industryTypeList = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/industry`, {
    method: "GET"
  }).then(response => response.json());

  let categoryList = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/category`, {
    method: "GET"
  }).then(response => response.json());

  return {
    props: {
      productList: productList?.data?.data,
      softwareList : softwareTypeList?.data?.data,
      industryList : industryTypeList?.data?.data,
      categoryList: categoryList?.data?.data,
    },
  };

}

export default ProductPage