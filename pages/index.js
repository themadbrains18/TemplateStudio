import Hero from "@/components/home/hero";
import CatergoriesCards from "@/components/home/catergoriesCards";
import FeatureProducts from "@/components/home/featureProducts";
import FreeOfCost from "@/components/home/freeOfCost";
import PopularTemplate from "@/components/home/popularTemplate";

const Home=()=> {
  return (
    <>
      <Hero />
      <CatergoriesCards />
      <FeatureProducts />
      <FreeOfCost />
      <PopularTemplate />
    </>
  )
}


// export async function getServerSideProps(context) {
  
  // const { req, params } = context;

  // let subCategoryList = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/subcategory`, {
  //   method: "GET"
  // }).then(response => response.json());

  // let categoryList = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/category`, {
  //   method: "GET"
  // }).then(response => response.json());

  // return {
  //   props: {
  //     subcategory: subCategoryList?.data?.data,
  //     category: categoryList?.data?.data,
  //   },
  // };

// }


export default Home;