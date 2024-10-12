import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

const filterArray = [
    {
        filterType : "Location",
        array:["Noida", "Gurugram", "Hyderabad", "Pune", "Banglore", "Mumbai", "Chennai"]
    },
    {
        filterType : "Salary",
        array:["0-40k", "0-5LPA", "5-10LPA", "10-20LPA", "20-40LPA", "40+LPA"]
    },
    {
        filterType : "Type",
        array:["On-Site", "Hybrid", "Remote"]
    },
    {
        filterType : "Industry",
        array:["Full Stack Developer", "Frontend Developer", "Data Science"]
    }
]

const FilterCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1>Filter Jobs</h1>
      <hr className='mt-3'/>
      <RadioGroup>
        {
            filterArray.map((data, index) => (
                <div>
                    <h1 className='font-bold text-lg'>{data.filterType}</h1>
                    {
                        data.array.map((item, index) => {
                            return (
                                <div className='flex items-center space-x-2 my-2'>
                                    <RadioGroupItem value={item}/>
                                    <Label>{item}</Label>
                                </div>
                            )
                        })
                    }
                </div>
            ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard
