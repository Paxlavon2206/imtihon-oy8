
import { ProductCard } from "@/app/components/product-card/product-card"
import { Tablets } from "@/service/catalog"

 const Planshetlar =  async () => {
  const data = await Tablets()
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

export default Planshetlar