
import { ProductCard } from "@/app/components/product-card/product-card"
import { Accessories } from "@/service/catalog"


 const SmartfonAksessuarlar =  async () => {
  const data = await Accessories()
  return (
   <div className="container flex justify-center py-4">
     <div className="grid grid-cols-5 gap-4">
      {data.map((item) => (
        <ProductCard key={item.id} {...item}/>
      ))}
    </div>
   </div>
  )
}

export default SmartfonAksessuarlar