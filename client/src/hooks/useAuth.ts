import { useState } from 'react';
import { useRouter } from 'next/navigation';

const useAuth = (apiFunction: (email: string, password: string) => Promise<unknown>) => {
  const navigate = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleAuth = async (formData: FormData) => {
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

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
