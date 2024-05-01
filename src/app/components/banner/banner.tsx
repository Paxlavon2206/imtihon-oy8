
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { GetBanner } from "@/service/banner"

export const Banner = async () => {
  const data = await GetBanner();
  return (
   <div>
     <Carousel >
    <CarouselContent>
      {data.map((item) => (
        <CarouselItem key={item.id}>
          <img className="object-fill h-[230px] w-full" src={item.img} alt="img" />
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>  
   </div>
  )
}
