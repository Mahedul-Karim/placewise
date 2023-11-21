import React from 'react'
import Checkbox from './Checkbox'

type Props={
    title:string;
}

const CategoryFilter:React.FC<Props> = ({title}) => {
  return (
    <div>
        <h3 className="text-[20px] font-[400] mb-4">{title}</h3>
        <div className="flex flex-col gap-4">
          <Checkbox />
          <Checkbox />
          <Checkbox />
          <Checkbox />
          <Checkbox />
        </div>
      </div>
  )
}

export default CategoryFilter