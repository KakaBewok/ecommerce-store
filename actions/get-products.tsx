import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${URL}`);

  return await res.json();
};

export default getProducts;
