import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import React from 'react'

const JobDescription = () => {
    const hasApplied = true;

    return (
        <div className='max-w-7xl mx-auto my-10'>
            <h1 className='text-xl font-bold'>Frontend Developer</h1>
            <div className='flex justify-between items-center'>
                <div>
                    <div className='flex items-center gap-3 mt-4'>
                        <Badge className={'text-blue-700 font-bold'} variant={"ghost"}>10 Positions</Badge>
                        <Badge className={'text-red-600 font-bold'} variant={"ghost"}>Full Time</Badge>
                        <Badge className={'text-green-700 font-bold'} variant={"ghost"}>20 LPA</Badge>
                    </div>
                </div>
                <Button disabled={hasApplied}
                    className={`rounded-xl ${hasApplied ? 'bg-gray-600 text-white cursor-not-allowed hover:bg-gray-700' : 'bg-purple-500 hover:bg-purple-600 text-black'}`}>
                    {hasApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
            <div className='my-4'>
                <h1 className="font-bold my-1">Role : <span className='pl-4 font-normal text-gray-800'>Frontend Developer</span></h1>
                <h1 className="font-bold my-1">Location : <span className='pl-4 font-normal text-gray-800'>Hyderabad</span></h1>
                <h1 className="font-bold my-1">Description : <span className='pl-4 font-normal text-gray-800'>We need a good Frontend Developer for our company</span></h1>
                <h1 className="font-bold my-1">Experience : <span className='pl-4 font-normal text-gray-800'>1-3 yrs</span></h1>
                <h1 className="font-bold my-1">Salary : <span className='pl-4 font-normal text-gray-800'>20 LPA</span></h1>
                <h1 className="font-bold my-1">Total Applicants : <span className='pl-4 font-normal text-gray-800'>100</span></h1>
                <h1 className="font-bold my-1">Posted Date : <span className='pl-4 font-normal text-gray-800'>12-10-2024</span></h1>
            </div>


        </div>
    )
}

export default JobDescription
