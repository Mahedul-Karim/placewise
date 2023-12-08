import Signup from '@/components/auth/signup/Signup'
import Img from '@/components/util/Img'
import React from 'react'

const SingUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full flex-col gap-4">
        <Img src="/logo_white.svg" classes="w-[55px] h-[53px]" />
      <Signup />
    </div>
  )
}

export default SingUpPage