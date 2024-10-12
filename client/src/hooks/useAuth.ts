import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {api} from "@/api";

const useAuth = (apiFunction: (email: string, password: string) => Promise<boolean>) => {
  const navigate = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleAuth = async (formData: FormData) => {
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if (!email || !password) {
      alert('Both fields are required')
      return
    }

    if (confirmPassword && password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    setIsLoading(true)
    try {
      const response = await apiFunction(email, password)
      if (response) {
        navigate.replace('/todos')
      }
    } catch (e){
      alert('Operation failed. Please check your credentials.')
    } finally {
      setIsLoading(false)
    }
  }

  return { handleAuth, isLoading }
};

export default useAuth;
