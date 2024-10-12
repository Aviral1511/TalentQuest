import AppliedJobsTable from '@/components/shared/AppliedJobsTable'
import Navbar from '@/components/shared/Navbar'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Contact, Mail, Pen } from 'lucide-react'
import React from 'react'

const Profile = () => {
    const skills = ["HTML", "ReactJS", "JavaScript", "MongoDB"];
    const hasResume = true;
    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto border border-gray-200 rounded-2xl my-5 p-8'>
                <div className="flex justify-between">
                    <div className="flex items-center gap-4">
                        <Avatar className='h-24 w-24'>
                            <AvatarImage src='https://th.bing.com/th/id/OIP.r0HtX7FMJKolxOsVnkW3CQHaGw?w=195&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='profile' />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>Full Name : </h1>
                            <p>The sky was painted with shades of pink and gold as the sun dipped below the horizon. A cool breeze whispered through the trees, carrying the scent of pine and earth. Somewhere in the distance, a bird sang a soft melody, echoing through the quiet evening.</p>
                        </div>
                    </div>
                    <Button className='text-right border border-gray-300 rounded-xl hover:bg-gray-200'><Pen /></Button>
                </div>
                <div className='my-3'>
                    <div className="flex items-center gap-4 my-3">
                        <Mail />
                        <span>abc@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4 my-3">
                        <Contact />
                        <span>1234567890</span>
                    </div>
                </div>
                <div className='my-3'>
                    <h1 className='font-medium text-lg'>Skills</h1>
                    <div className="flex items-center gap-2 my-2">
                        {
                            skills.length !== 0 ? skills.map((item, index) => <Badge key={index} className={"bg-black text-white"}>{item}</Badge>) : <span>NA</span>
                        }
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                        <Label className='text-md font-bold'>Resume</Label>
                        {
                            hasResume ? <a target='blank' href="https://x.com/" className='text-blue-500 hover:underline cursor-pointer w-full'>Click Here</a> : <span>NA</span>
                        }
                </div>
            </div>
            <div className='max-w-4xl mx-auto rounded-2xl'>
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                <AppliedJobsTable />
            </div>
        </div>
    )
}

export default Profile
