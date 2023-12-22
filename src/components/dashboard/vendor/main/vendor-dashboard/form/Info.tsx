import Input from '@/components/dashboard/user/main/form/Input'
import React from 'react'

const Info = () => {
  return (
    <>
    <Input label="Name" type="text" name='name'/>
        <Input label="Places covered" type="number" name="placesCovered"/>
        <Input label="Start point" type="text" name="startPoint"/>
        <Input label="End point" type="text" name="endPoint"/>
        <Input label="Duration(Example : 2 days 3 night)" type="text" name="duration"/>
        <Input label="Price" type="number" name="price"/>
        <Input label="Total capacity" type="number" name="totalCapacity"/>
    </>
  )
}

export default Info