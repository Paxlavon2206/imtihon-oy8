import { Button } from "@/components/ui/button";
import { ProductAll, Products } from "@/service/products";
import { Vector } from "../../../../public/icons/vector";
import { Heart } from "../../../../public/icons/heart";
import { Rating2 } from "../../../../public/icons/rating2";
import { Korzinka } from "../../../../public/icons/korzinka";
import { Flag } from "../../../../public/icons/flag";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCard } from "@/app/components/product-card/product-card";
import Link from "next/link";
import { OneStar } from "../../../../public/icons/one-star";

interface Params {
  params: {
    productId: string;
    img: string;
  };
}
export default async function ProductDetails({ params }: Params) {
  const products = await Products();
  const dataproducts = await ProductAll();
  const overall = products.filter(
    (item) => item.id === Number(params.productId)
  );
  const num = Number(overall[0].id);
  const array: any = [];
  const same = products?.filter((item: any) => item.id !== num);
  return (
    <div className="p-6">
      {overall.map((item) => (
        <div key={item.id} className="bg-white flex">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <a href="/">
                <Button className="w-[100px] bg-greyBg text-black gap-1 hover:bg-green-600">
                  {" "}
                  <Vector /> Orqaga
                </Button>
              </a>
              <div className="cursor-pointer hover:text-green-600 w-7 h-6">
                <Heart />
              </div>
            </div>
            <img
              className="object-contain w-[400px] h-[400px] p-[50px]"
              src={item.img}
              alt="img"
            />

            <div className="w-[350px] mr-auto ml-auto">
              <Carousel>
                <CarouselContent className="">
                  {products.map((item: any) => (
                    <img
                      key={item.id}
                      className=" h-[100px]"
                      src={item?.img}
                      alt="img"
                    />
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
          <div className="pt-12 pl-14 pr-[60px]">
            <h3 className="font-bold text-[36px] leading-[43px] w-[600px] mb-5">
              {item.title}
            </h3>
            <div className="flex mb-4">
              {" "}
              <Rating2 /> <span className="text-greyBg2 ml-2">
                ({item.id})
              </span>{" "}
              <p className="ml-7 line-through text-greyBg2">26 689 520 so’m</p>
            </div>
            <h2 className="font-bold text-primary text-[36px] leading-[43px] mb-5">
              {item.price} so’m
            </h2>
            <div className="flex items-center mb-7">
              <Button className=" bg-black hover:bg-green-400 flex gap-2 px-[60px] mr-10">
                <Korzinka />
                Savatchaga
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-[15px] h-[15px] rounded-[50%] bg-primary"></div>
                <p>Omborda mavjud</p>
              </div>
            </div>
            <div className="flex gap-3 mb-5 items-center text-center">
              <p className="text-[16px] font-bold leading-[20px]">Rangi:</p>
              <div className="w-[103px] py-4 border rounded-[12px] flex-col items-center justify-center hover:border-green-500">
                <div className="bg-[#576755] w-[15px] h-[15px] rounded-[50%] mr-auto ml-auto mb-1"></div>
                <p className="text-[12px]"> Alpine Green</p>
              </div>
              <div className="w-[103px] py-4 border rounded-[12px] flex-col items-center hover:border-green-500">
                <div className="bg-[#F2F3EE] w-[15px] h-[15px] rounded-[50%] mr-auto ml-auto mb-1"></div>
                <p className="text-[12px]"> Silver</p>
              </div>
              <div className="w-[103px] py-4 border rounded-[12px] flex-col items-center hover:border-green-500">
                <div className="bg-[#5D5C56] w-[15px] h-[15px] rounded-[50%] mr-auto ml-auto mb-1"></div>
                <p className="text-[12px]"> Graphite</p>
              </div>
              <div className="w-[103px] py-4 border rounded-[12px] flex-col items-center hover:border-green-500">
                <div className="bg-[#FAE8D1] w-[15px] h-[15px] rounded-[50%] mr-auto ml-auto mb-1"></div>
                <p className="text-[12px]"> Gold</p>
              </div>
              <div className="w-[103px] py-4 border rounded-[12px] flex-col items-center hover:border-green-500">
                <div className="bg-[#ADC5DB] w-[15px] h-[15px] rounded-[50%] mr-auto ml-auto mb-1 "></div>
                <p className="text-[12px]"> Sierra Blue </p>
              </div>
            </div>
            <div className="flex bg-greenBg rounded-[12px] py-3 pl-3 items-center gap-3">
              <Flag />
              <p className="font-bold text-[16px]">
                O’zbekiston bo’ylab yetkazib berish:
              </p>
              <p>14 ish kuni</p>
            </div>
            <h4 className="font-semibold text-[18px] leading-[20px] mt-5 mb-4">
              Описание
            </h4>
            <p className="font-light w-[600px] text-[16px] pb-[50px]">
              {item.title} <br />
              Смартфон Apple iPhone 13 Pro Max 512 GB Graphite Apple iPhone 13
              Pro Max оснащен передовыми технологиями, значительно расширяющими
              функциональные возможности девайса.
            </p>
          </div>
        </div>
      ))}
      <div className="bg-white p-5 my-5">
        
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="account" className="w-full font-extrabold text-[15px]">
                  Основные характеристики
                </TabsTrigger>
                <TabsTrigger value="password" className="w-full font-extrabold text-[15px]">
                  Отзывы (2)
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                  <ul>
                  <li className="flex mt-4 border-b border-dashed">
                    {" "}
                    <p className="mb-3 text-greyBg2 w-[600px]">
                      Объем встроенной памяти
                    </p>{" "}
                    <h4>128 ГБ</h4>{" "}
                  </li>
                  <li className="flex mt-4 border-b border-dashed">
                    {" "}
                    <p className=" w-[600px] mb-3 text-greyBg2">
                      Процессор
                    </p>{" "}
                    <h4>Apple A15 Bionic</h4>{" "}
                  </li>
                  <li className="flex mt-4 border-b border-dashed">
                    {" "}
                    <p className="w-[600px] mb-3 text-greyBg2">
                      Диагональ
                    </p>{" "}
                    <h4>5.4</h4>{" "}
                  </li>
                  <li className="flex mt-4 border-b border-dashed">
                    {" "}
                    <p className="w-[600px] mb-3 text-greyBg2">
                      {" "}
                      Тип дисплея
                    </p>{" "}
                    <h4>Super Retina XDR (OLED)</h4>{" "}
                  </li>
                  <li className="flex mt-4 border-b border-dashed">
                    {" "}
                    <p className="w-[600px] mb-3 text-greyBg2">Корпус</p>{" "}
                    <h4>металл и стекло, влагозащита IP68</h4>{" "}
                  </li>
                  <li className="flex mt-4 border-b border-dashed">
                    {" "}
                    <p className="w-[600px] mb-3 text-greyBg2">Вес</p>{" "}
                    <h4>238 г</h4>{" "}
                  </li>
                  <li className="flex mt-4 border-b border-dashed">
                    {" "}
                    <p className="w-[600px] mb-3 text-greyBg2">
                      Фотокамера
                    </p>{" "}
                    <h4 className="w-[450px]">телефото 12 МП F/2.80, широкоугольная 12 МП F/1.50, сверхширокоугольная 12 МП F/1.80</h4>
                  </li>
                  <li className="flex mt-4 border-b border-dashed">
                    <p className="w-[600px] mb-3 text-greyBg2">
                      Разъем для наушников
                    </p>
                    <h4>Lightning</h4>
                  </li>
                  <li className="flex mt-4 border-b border-dashed">
                    <p className="w-[600px] mb-3 text-greyBg2">
                      Количество ядер
                    </p>
                    <h4>6 ядер</h4>
                  </li>
                  <li className="flex mt-4 border-b border-dashed">
                    <p className="w-[600px] mb-3 text-greyBg2">Аккумулятор</p>
                    <h4>Li-Ion, Время работы в режиме прослушивания музыки 95 ч, функция </h4>
                  </li>
                </ul>    
              </TabsContent>
              <TabsContent value="password">
                <ul className="flex gap-3 py-6">
                  <li className="border w-[114px] h-10 hover:border-green-500 flex items-center justify-center rounded-[12px]">Barchasi(02)</li>
                  <li className="border w-[99px] gap-1 h-10 hover:border-green-500 flex items-center justify-center rounded-[12px]"><OneStar/> 5 (02)</li>
                  <li className="border gap-1 w-[99px] h-10 hover:border-green-500 flex items-center justify-center rounded-[12px]"><OneStar/>  4 (00)</li>
                  <li className="border gap-1 w-[99px] h-10 hover:border-green-500 flex items-center justify-center rounded-[12px]"><OneStar/>  3 (00)</li>
                  <li className="border gap-1 w-[99px] h-10 hover:border-green-500 flex items-center justify-center rounded-[12px]"><OneStar/> 2 (00)</li>
                  <li className="border gap-1 w-[99px] h-10 hover:border-green-500 flex items-center justify-center rounded-[12px]"><OneStar/> 1 (00)</li>
                </ul>
                <div className="flex items-center  text-greyBg2 justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h3>Hasanboy Tursunov Mo’ydinjon o‘g‘li,  Uzbekistan </h3> 
                <OneStar/> 5
                </div>
                <h3 className="text-greyBg2">2 Haftalar oldin</h3>
                </div>
                <h2 className="font-semibold mb-2">Juda yaxshi smartfon ekan, ishlashi ham a’lo</h2>
                <div className="border border-dashed mb-6"></div>

                <div className="flex items-center  text-greyBg2 justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h3>Hasanboy Tursunov Mo’ydinjon o‘g‘li,  Uzbekistan </h3> 
                <OneStar/> 4
                </div>
                <h3 className="text-greyBg2">2 Oylar oldin</h3>
                </div>
                <h2 className="font-semibold mb-2">Juda yaxshi smartfon ekan, ishlashi ham a’lo</h2>
              </TabsContent>
            </Tabs>
      </div>
      <div className="container bg-white p-5 rounded-md mb-5">
        <h2 className="font-extrabold text-3xl mt-3 mb-8">O'xshash tovarlar</h2>
        <div className="grid grid-cols-4 gap-5">
          {same?.slice(0, 4).map((item: any) => (
            <ProductCard key={item?.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
