
import { ProductCard } from "@/app/components/product-card/product-card"
import { Gadgets } from "@/service/catalog"

 const Gadjetlar =  async () => {
  const data = await Gadgets()
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

export default Gadjetlar