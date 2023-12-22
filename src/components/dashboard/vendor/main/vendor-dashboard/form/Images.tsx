'use client';
import Image from 'next/image'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { IoIosImages } from 'react-icons/io'
type Props={
    images:Array<string>,
    setTourImages:(e:any)=>void;
    removeImage:(i:number)=>void;
}
const Images:React.FC<Props> = ({images,setTourImages,removeImage}) => {
  return (
    <>
    <label className="font-[500]">Images(max 6) :</label>
        <div className="flex gap-2 flex-wrap">
          <div className="relative">
            <label
              htmlFor="tourImages"
              className="flex items-center justify-center w-[100px] h-[100px] rounded-md border border-solid border-border cursor-pointer"
            >
              <IoIosImages size={25} />
            </label>
            <input
              type="file"
              id="tourImages"
              className="hidden absolute"
              onChange={setTourImages}
            />
          </div>
          {images.length > 0 &&
            images.map((img, i) => (
              <div
                className="w-[100px] h-[100px] rounded-md border border-solid border-border relative overflow-hidden"
                key={i}
              >
                <Image
                  fill
                  src={img}
                  alt="tour"
                  className="object-cover w-full h-full"
                />
                <button className="absolute bg-grey w-6 h-6 flex items-center justify-center top-1 right-1 rounded-md" onClick={()=>removeImage(i)}><FaTrash size={15}/></button>
              </div>
            ))}

        </div>
    </>
  )
}

export default Images