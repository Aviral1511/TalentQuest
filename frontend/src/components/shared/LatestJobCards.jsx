import React from 'react'
import { Badge } from '../ui/badge'

const LatestJobCards = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer hover:scale-105 hover:border-gray-300 hover:shadow-2xl'>
      <div>
        <h1 className='font-medium text-lg'>Company Name</h1>
        <p className='text-sm text-gray-500'>India</p>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>Job Title</h1>
        <p className='text-sm text-gray-600'>The sky was painted with shades of pink and gold as the sun dipped below the horizon. A cool breeze whispered through the trees, carrying the scent of pine and earth. </p>
      </div>
      <div className='flex items-center gap-3 mt-4'>
        <Badge className={'text-blue-700 font-bold'} variant={"ghost"}>10 Positions</Badge>
        <Badge className={'text-red-600 font-bold'} variant={"ghost"}>Full Time</Badge>
        <Badge className={'text-green-700 font-bold'} variant={"ghost"}>20 LPA</Badge> 
      </div>
    </div>
  )
}

export default LatestJobCards