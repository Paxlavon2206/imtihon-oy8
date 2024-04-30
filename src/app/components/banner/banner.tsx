
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { GetData } from "@/service/get-data"

export const Banner = async () => {
  const data = await GetData();
  console.log(data);
  return (
   <div>
     <Carousel >
    <CarouselContent>
      {data.map((item) => (
        <CarouselItem key={item.id}>
          <img className="object-fill" src={item.img} alt="img" />
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>  
   </div>
  )
}
