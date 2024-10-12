import React from 'react'
import Navbar from '../components/shared/Navbar'
import FilterCard from '../components/shared/FilterCard'
import Job from '../components/shared/Job'

const jobArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Jobs = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5'>
                <div className="flex gap-5">
                    <div className='w-20%'>
                        <FilterCard />
                    </div>
                    {
                        jobArray.length <= 0 ? <span> Job Not Found</span> : (
                            <div className='flex-1 h-[88vh] pb-5'> {/*overflow-y-auto */}
                                <div className='grid grid-cols-3 gap-5'>
                                    {
                                        jobArray.map((item, index) => (
                                            <div>
                                                <Job />
                                            </div>))
                                    }
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>

        </div>
    )
}

export default Jobs
