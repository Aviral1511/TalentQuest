import React, { useEffect, useState } from 'react'
import Navbar from '../components/shared/Navbar'
import FilterCard from '../components/shared/FilterCard'
import Job from '../components/shared/Job'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const jobArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Jobs = () => {
    const {allJobs, searchedQuery} = useSelector(store=>store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);

    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) || 
                job.description.toLowerCase().includes(searchedQuery.toLowerCase()) || 
                job.location.toLowerCase().includes(searchedQuery.toLowerCase());
            });
            setFilterJobs(filteredJobs);
        } else {
            setFilterJobs(allJobs);
        }
    },[searchedQuery, allJobs])

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5'>
                <div className="flex gap-5">
                    <div className='w-20%'>
                        <FilterCard />
                    </div>
                    {
                        filterJobs.length <= 0 ? <span> Job Not Found</span> : (
                            <div className='flex-1 h-[88vh] pb-5'> {/*overflow-y-auto */}
                                <div className='grid grid-cols-3 gap-5'>
                                    {
                                        allJobs.map((job) => (
                                            <motion.div
                                            initial={{opacity:0,x:100}}
                                            animate={{opacity:1, x:0}}
                                            exit={{opacity:0, x:-100}}
                                            transition={{duration:0.3}}
                                            >
                                                <Job key={job._id} job={job}/>
                                            </motion.div>))
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
