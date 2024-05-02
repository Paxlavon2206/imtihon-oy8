
import { Banner } from "./components/banner/banner";
import { Catalog } from "./components/catalog/catalog";
import { NewsIcon } from "../../public/icons/news-icon";
import { MiniCatalog } from "./components/catalog/mini-catalog";
import { DiscountProducts, OmmabopProducts, ProductSome } from "./components/products/products";
import { Star } from "../../public/icons/star";
import { Basket } from "../../public/icons/basket";


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
         <div className="fixed w-[108px] h-[94px] pt-[18px] pl-[14px] bg-black right-0 bottom-[50%] top-1/3 rounded-l-[6px]">
          <div className="flex mb-2 gap-2">
           <div className="w-[14px] h-3"> <Basket/></div>
            <p className="text-white text-[13px]">Mahsulot</p>
          </div>
          <div className="w-[70px] h-[30px] bg-white rounded-[6px] flex items-center justify-center">
            <span>0</span>
          </div>
         </div>
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
        <div>
        <div className="flex mt-[30px] items-center gap-5 mb-7">
          <Star/>
          <h1 className="font-bold md:text-[25px] lg:text-[32px] ">Ommabop mahsulotlar</h1>
          <div>
          </div>
          </div>
         <div> <OmmabopProducts/></div>
        </div>
        <div>
        <div className="flex mt-[30px] items-center gap-5 mb-7">
          <NewsIcon/>
          <h1 className="font-bold md:text-[25px] lg:text-[32px] ">Chegirmadagi mahsulotlar</h1>
          <div>
          </div>
          </div>
         <div> <DiscountProducts/></div>
        </div>
         </div>
         </div>
        </div>
      </main>
    </div>
  );
}
