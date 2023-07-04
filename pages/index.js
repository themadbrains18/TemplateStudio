import Hero from "@/components/home/hero";
import CatergoriesCards from "@/components/home/catergoriesCards";
import FeatureProducts from "@/components/home/featureProducts";
import FreeOfCost from "@/components/home/freeOfCost";
import PopularTemplate from "@/components/home/popularTemplate";
import { useSession } from 'next-auth/react';

const Home=({productList, categoryList})=> {

  
  return (
    <>
      <Hero />
      <CatergoriesCards />
      <FeatureProducts productList={productList?.slice(0, 6)}/>
      <FreeOfCost categoryList={categoryList} productList={productList}/>
      <PopularTemplate productList={productList?.slice(0, 6)}/>
    </>
  )
}


export async function getServerSideProps(context) {
  
  const { req, params } = context;

  let productList = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/product`, {
    method: "GET"
  }).then(response => response.json());

 
  let categoryList = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/category`, {
    method: "GET"
  }).then(response => response.json());

  return {
    props: {
      productList: productList?.data?.data,
      categoryList: categoryList?.data?.data,

    },
  };

}


export default Home;