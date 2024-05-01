"use server"
const url = process.env.API_URL

 interface CatalogProps {
  id: number
  title: string
  path: string
}
  const Catalogs = async (): Promise<CatalogProps[]> => {
  try {
    const res = await fetch(`${url}/categories`);
    const data = await res.json();
    return data
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}




export  {Catalogs}

