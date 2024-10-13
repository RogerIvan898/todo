import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {IAuthData} from "@/types";

const useAuth = (apiFunction: (email: string, password: string) => Promise<unknown>) => {
  const navigate = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleAuth = async (formData: IAuthData) => {
    const {email, password} = formData

    setIsLoading(true)

    try {
      const response = await apiFunction(email, password)
      if (response) {
        navigate.replace('/todos')
      }
    } catch (e){
      alert('Operation failed. Please check your credentials.')
      return
    } finally {
      setIsLoading(false)
    }
  }

  return { handleAuth, isLoading }
};

export default useAuth;
