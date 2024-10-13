import { setAllJobs } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/endPoints'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllJobs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchALLJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/getAllJobs`, {withCredentials:true});
                if(res.data.success){
                    dispatch(setAllJobs(res.data.jobs));
                }
            } catch (error) {
                console.log(error);                
            }
        }
        fetchALLJobs();
    }, [])
  
}

export default useGetAllJobs;
