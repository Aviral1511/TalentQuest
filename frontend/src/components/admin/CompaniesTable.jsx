import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from '../ui/badge'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Popover, PopoverTrigger } from '../ui/popover'
import { PopoverContent } from '@radix-ui/react-popover'
import { Edit2, MoreHorizontal } from 'lucide-react'

const CompaniesTable = () => {
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent registered Companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableCell>
                        <Avatar>
                            <AvatarImage className='h-10' src='https://th.bing.com/th/id/OIP.r0HtX7FMJKolxOsVnkW3CQHaGw?w=195&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' />
                        </Avatar>
                    </TableCell>
                    <TableCell>Company Name</TableCell>
                    <TableCell>14-10-2024</TableCell>
                    <TableCell className='text-right cursor-pointer'>
                        <Popover>
                            <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                            <PopoverContent className='w-20 rounded-md border border-gray-300 shadow-md'>
                                <div className='my-3 flex items-center justify-center'>
                                    <Edit2 />
                                    <span>Edit</span>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </TableCell>
                </TableBody>
            </Table>
        </div>
    )
}

export default CompaniesTable
