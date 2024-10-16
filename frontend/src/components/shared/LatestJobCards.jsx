import React from 'react'
import { Badge } from '../ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({job}) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/job/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-blue-50 border border-gray-100 cursor-pointer hover:scale-105 hover:border-gray-300 hover:shadow-2xl'>
      <div>
        <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
        <p className='text-sm text-gray-500'>India</p>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
        <p className='text-sm text-gray-600'>{job?.description} </p>
      </div>
      <div className='flex items-center gap-3 mt-4'>
        <Badge className={'text-blue-700 font-bold'} variant={"ghost"}>{job?.position} Positions</Badge>
        <Badge className={'text-red-600 font-bold'} variant={"ghost"}>{job?.jobType}</Badge>
        <Badge className={'text-green-700 font-bold'} variant={"ghost"}>{job?.salary} LPA</Badge> 
      </div>
    </div>
  )
}

export default LatestJobCards