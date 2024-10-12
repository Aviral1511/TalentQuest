import Job from '@/components/shared/Job';
import Navbar from '@/components/shared/Navbar';
import React from 'react'

const randomJobs = [1,2,3,4];

const Browse = () => {
  return (
    <div>
        <Navbar />
        <div className='max-w-7xl mx-auto my-10'>
          <h1 className='text-xl font-bold my-10'>Search jobs ({randomJobs.length})</h1>
          <div className='grid grid-cols-3 gap-4'>
            {
              randomJobs.map((job, index) => {
                return (
                  <Job />
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default Browse
