import NewPdpTabs from '@/components/new-product-Detail/newPdpTabs'
import PdpSec from '@/components/new-product-Detail/pdpSec'
import RelatedProduct from '@/components/new-product-Detail/relatedProduct'
import SlugRating from '@/components/new-product-Detail/slugRating'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

const NewProductDetail = ({ productList }) => {

    const router = useRouter();
    const [productInfo, setProductInfo] = useState();

    useEffect(() => {


        getProductDetail(router.query.slug);
    }, [router.query.slug])

    const getProductDetail = async (id) => {
        let productDetail = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/product/detail?id=${id}`, {
            method: "GET"
        }).then(response => response.json());
        
        setProductInfo(productDetail?.data?.data);
    };

    return (
        <>
            <SlugRating />
            <PdpSec product={productInfo}/>
            <NewPdpTabs productList={productList} product={productInfo}/>
            <RelatedProduct productList={productList} />
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