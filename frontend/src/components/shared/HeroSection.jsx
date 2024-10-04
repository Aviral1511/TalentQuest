import React from 'react'
import InputField from './InputField'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className='text-center'>
        <div className="flex flex-col gap-5 my-7">
            <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 font-medium text-red-500'>No.1 Job Hunt Website</span>
            <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-purple-600'>Dream Job</span></h1>
            <p>Here is one of the random text created in snippets. This code is used for sample purposes only.
            There are a variety of uses of this.</p>
            <div className="flex w-[50%] mx-[33%]">
                <InputField />
                <Button className='mt-3 bg-black hover:bg-black' style={{
                        boxShadow: '0 4px 6px rgba(220, 7, 7, 0.2), 0 -4px 6px rgba(220, 7, 7, 0.1), 4px 0 6px rgba(220, 7, 7, 0.1), -4px 0 6px rgba(220, 7, 7, 0.1)'
                    }}><Search className='text-white h-5 w-5'/></Button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection