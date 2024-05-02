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

const Phones = async (): Promise<CatalogProps[]> => {
  try {
    const res = await fetch(`${url}/phones`);
    const data = await res.json();
    return data
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}




const Tablets = async (): Promise<CatalogProps[]> => {
  try {
    const res = await fetch(`${url}/tablets`);
    const data = await res.json();
    return data
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}



const Earphones = async (): Promise<CatalogProps[]> => {
  try {
    const res = await fetch(`${url}/earphones`);
    const data = await res.json();
    return data
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}


const FlashDrive = async (): Promise<CatalogProps[]> => {
  try {
    const res = await fetch(`${url}/flashDrive`);
    const data = await res.json();
    return data
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}



const Accessories = async (): Promise<CatalogProps[]> => {
  try {
    const res = await fetch(`${url}/accessories`);
    const data = await res.json();
    return data
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}


const Gadgets = async (): Promise<CatalogProps[]> => {
  try {
    const res = await fetch(`${url}/gadgets`);
    const data = await res.json();
    return data
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}


const Chargers = async (): Promise<CatalogProps[]> => {
  try {
    const res = await fetch(`${url}/chargers`);
    const data = await res.json();
    return data
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}

export  {Catalogs, Phones, Tablets, Earphones, FlashDrive, Accessories, Gadgets, Chargers}

