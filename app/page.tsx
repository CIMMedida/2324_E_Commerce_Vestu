import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import Carousel from './components/Carousel'
export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      {/* <Carousel /> */}
      <Newest />
    </div>
  );
}