import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from '../ui/badge'

const AppliedJobsTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Job Role</TableHead>
                <TableHead className='text-right'>Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                [1,2,3,4].map((item,index) => (
                    <TableRow key={index}>
                        <TableCell>12-10-2024</TableCell>
                        <TableCell>Amazon</TableCell>
                        <TableCell>Full Stack Developer</TableCell>
                        <TableCell className='text-right'><Badge className={'bg-blue-500 text-white'}>Pending</Badge></TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobsTable
