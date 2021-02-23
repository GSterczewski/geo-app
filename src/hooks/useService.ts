import { useEffect, useState } from "react";

type ServiceCallback<T> = (...args: any[]) => Promise<T>;

interface UseService<T> {
  isLoading:boolean;
  error: string;
  resource?:T
}
export default function useService<T>(callback:ServiceCallback<T>):UseService<T>{
  
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState<string>("");
  const [resource, setResource] = useState<T>();
   
  useEffect(()=>{
     callback()
     .then(result => {
       
       setIsloading(false);
       setResource(result);
     }).catch(error =>{
       setIsloading(false);
       console.error(error);
       setError("ooops something went wrong")
     })
   },[callback])
   
   return { isLoading, error, resource }
}

