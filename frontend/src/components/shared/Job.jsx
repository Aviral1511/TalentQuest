import React from 'react'
import { Button } from '../ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = () => {
    const navigate = useNavigate();
    const jobId = "ajlsjjiijdalkcdcndsn";

    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 hover:scale-105 hover:shadow-lg'>
            <div className="flex items-center justify-between">
                <p className='text-sm text-gray-500'>2 days ago</p>
                <Button className='rounded-full' size='icons'><Bookmark /></Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button className='p-6' size='icon'>
                    <Avatar>
                        <AvatarImage src='https://th.bing.com/th/id/OIP.r0HtX7FMJKolxOsVnkW3CQHaGw?w=195&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='text-lg font-medium'>Company Name</h1>
                    <p className='text-sm text-gray-600'>India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Job Title</h1>
                <p className='text-sm text-gray-600'>The sky was painted with shades of pink and gold as the sun dipped below the horizon. A cool breeze whispered through the trees, carrying the scent of pine and earth.</p>
            </div>
            <div className='flex items-center gap-3 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant={"ghost"}>10 Positions</Badge>
                <Badge className={'text-red-600 font-bold'} variant={"ghost"}>Full Time</Badge>
                <Badge className={'text-green-700 font-bold'} variant={"ghost"}>20 LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button onClick={() => navigate(`/job/description/${jobId}`)} variant='outline'>Details</Button>
                <Button className='bg-violet-500 hover:bg-violet-600'>Save for Later</Button>
            </div>
        </div>
    )
}

export default Job
