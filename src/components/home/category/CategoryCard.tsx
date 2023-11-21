import Link from 'next/link'
import React from 'react'

const CategoryCard = () => {
  return (
    <div className="flex flex-col items-center gap-4">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/cat-img-1.webp"
              alt="img"
              className="w-full h-auto object-cover block"
            />
          </div>
          <div className="flex flex-col items-center">
            <Link href="/" className="text-[24px] font-[600] hover:text-primary transition-all duration-300 block">10.6K</Link>
            <p className="font-[500]">Total tour packages</p>
          </div>
        </div>
  )
}

export default CategoryCard