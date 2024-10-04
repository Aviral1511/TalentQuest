import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { LogOut, User2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const user = false;
    return (
        <div className='bg-white border-b border-b-gray-300'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <Link to={'/'}><h1 className='text-2xl font-bold'>Talent<span className='text-red-500'>Quest</span></h1></Link>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                    </ul>
                    {
                        user ? (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className='cursor-pointer'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className='w-80'>
                                    <div className='flex gap-5 space-y-2'>
                                        <Avatar className='cursor-pointer'>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        </Avatar>
                                        <div>
                                            <h3 className='font-medium'>Crazy Tiger</h3>
                                            <p className='text-sm text-muted-foreground'>Here is one of the random text created in snippets.</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col my-2 mr-4 text-gray-700'>
                                        <div className="flex w-fit items-center gap-2 cursor-pointer">
                                            <User2 />
                                            <Button variant="ghost"> View Profile</Button>
                                        </div>
                                        <div className="flex w-fit items-center gap-2 cursor-pointer">
                                            <LogOut />
                                            <Button variant="ghost">Logout</Button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        ) : (
                            <div className='flex items-center gap-4'>
                                <Link to={'/signup'}><Button className='text-purple-700 font-bold border-2 border-purple-600 hover:scale-110 hover:text-black hover:bg-purple-500 hover:border-black'>Signup</Button></Link>
                                <Link to={`/login`}><Button className='bg-purple-400 border-solid text-black font-bold border-black border-2 hover:scale-110 hover:bg-purple-500' >Login</Button></Link>                        
                            </div>
                        )
                    }


                </div>
            </div>
        </div>
    )
}

export default Navbar