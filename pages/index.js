import Hero from "@/components/home/hero";
import CatergoriesCards from "@/components/home/catergoriesCards";
import FeatureProducts from "@/components/home/featureProducts";
import FreeOfCost from "@/components/home/freeOfCost";
import PopularTemplate from "@/components/home/popularTemplate";

export default function Home() {
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
