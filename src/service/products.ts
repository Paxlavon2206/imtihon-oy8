"use server"
const url = process.env.API_URL

 interface ProductsProps {
  title: string
  path: string
  img?: string,
  price?: string
  id?: number
  photo? :string
 color?: string
  brand?:string
 description?:string,
  discount?:string,
  type?:string
  oldcost?:string
  fashion?:string,
  processor?:string,
  dioganal?:string,
  display?:string, 
  weight?:string,
  camera?: string,
  cores?: string,
  battery?: string
}
  const Products = async (): Promise<ProductsProps[]> => {
  try {
    const res = await fetch(`${url}/all`);
    const data = await res.json();
    return data
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}
const ProductAll = async (): Promise<ProductsProps[]> => {
  try {
    const res = await fetch(`${url}/products`);
    const data = await res.json();
    return data
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}



export  {Products, ProductAll}

