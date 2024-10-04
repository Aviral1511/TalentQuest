import React from 'react'
import LatestJobCards from './LatestJobCards';

const Jobs = [1,2,3,4,5,5,6,7,8];

const LatestJobs = () => {
  return (
    <div className='max-w-7xl mx-auto my-20'>
        <h1 className='text-4xl font-bold'><span className='text-purple-500'>Latest </span>Job Openings</h1>
        {
            Jobs.map((item, index) => <LatestJobCards />)
        }
    </div>
  )
}

export default LatestJobs