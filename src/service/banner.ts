"use server"
import { DataProps, bannerType } from "@/types/data";
const url = process.env.API_URL


  const GetBanner = async (): Promise<bannerType[]> => {
  try {
    const res = await fetch(`${url}/banners`);
    const data = await res.json();
    return data
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}




export  {GetBanner}

