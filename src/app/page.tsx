
import { Header } from "@/app/layout/header/header";
import { Banner } from "./components/banner/banner";
import { Catalog } from "./components/catalog/catalog";
import { NewsIcon } from "../../public/icons/news-icon";
import { MiniCatalog } from "./components/catalog/mini-catalog";
import { ProductSome } from "./components/products/products";


export default function Home() {
  return (
    <div>
      <main className="bg-white">
        <div className="container flex ">
         <div className="hidden md:flex h-screen w-[24%]">
          <Catalog/>
         </div>
         <div className="w-full h-screen bg-greyBg overflow-y-scroll">
         <div className="p-6">
         <Banner/>
         <div className="md:hidden">
          <MiniCatalog/>
         </div>
        <div>
        <div className="flex mt-[30px] items-center gap-5 mb-7">
          <NewsIcon/>
          <h1 className="font-bold md:text-[25px] lg:text-[32px] ">Yangi mahsulotlar</h1>
          <div>
          </div>
          </div>
         <div> <ProductSome/></div>
        </div>
         </div>
         </div>
        </div>
      </main>
    </div>
  );
}
