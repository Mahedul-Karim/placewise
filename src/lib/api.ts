import { ApiParams } from "@/types";


export const api = async ({endpoint, options}:ApiParams) => {
  try {
    
    const res = await fetch(`/api/${endpoint}`, {
      ...options,
      credentials: "include",
      cache: "no-store",
    });
    const data = await res.json();

    if (data.status === "failed") {
      throw new Error(data.message);
    }
    return data;
  } catch (err:any) {
    throw err;
  }
};
