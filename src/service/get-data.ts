
import { DataProps } from "@/types/data";



  const GetData = async (): Promise<DataProps[]> => {
  try {
    const res = await fetch(`http://localhost:3600/banners`);
    const data = await res.json();
    return data
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}




export  {GetData}

