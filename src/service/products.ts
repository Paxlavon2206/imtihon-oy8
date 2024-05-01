"use server"
const url = process.env.API_URL

 interface ProductsProps {
  id: number
  title: string
  path: string
  img: string
  price: string
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




export  {Products}

