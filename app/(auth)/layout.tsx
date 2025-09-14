import { RootLayoutProps } from '@/types'
import React from 'react'



const AuthLayout = ({children}: RootLayoutProps) => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      {children}
    </div>
  )
}

export default AuthLayout
