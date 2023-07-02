import React from 'react'
import {CgNotes} from 'react-icons/cg'
import {AiFillHome} from 'react-icons/ai'
import {useForm} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup"
import dayjs from 'dayjs';


const Bluebook = () => {
  const validationSchema = yup.object().shape({
    vehicleType: yup.string().required("Vehicle Type is required"),
    manufactureYear: yup.string().required("Year of manufacture is required"),
    cubicCapacity: yup.string().required("Cubic Capacity is required"),
    date: yup.string().required("Date is required"),
    
  });
    const {
    register,
    handleSubmit,formState: {errors},
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) =>{
    console.log(data);
  };
  return (
    <div className='bg-white h-[1000px] w-[500px] ml-[260px] mt-[4px] '>
     <div className='font-bold text-xl text-purple-500 ml-[50px]'><h1>Bluebook Service with Pick & Drop</h1></div>
    <div className='bg-pink-100 border-2  border-amber-500 rounded-lg h-[120px] w-[420px] ml-[60px] mt-[20px]'>Customer Support: 01-5970053<br/>WhatsApp/Viber(Chat only) : 9801890083<br/><br/>This service is only for Kathmandu Valley</div>
   <div className='flex gap-2 ml-[70px] mt-[10px]'>
    <div className='bg-purple-700 rounded-full' ><CgNotes/></div>
   <div className='text-purple-700 font-bold '><h1>TERMS AND CONDITIONS</h1></div>
   </div>
   <form onSubmit={handleSubmit(onSubmit)}>
   <div className=' ml-[60px] mt-[10px]'>
    <input type='text' placeholder='     Vehicle Type' className='border rounded-lg  border-slate-400 h-[50px] w-[420px]'  {...register("vehicleType")} list='vehicleTypes'/>
    <datalist id='vehicleTypes'>
        <option value="Two wheeler"/>
        <option value="Four wheeler"/>
    </datalist>
    {errors.vehicleType && ( 
      <p className='text-yellow-500'>{errors.vehicleType.message}</p>
    )}
   </div>
   <div className=' ml-[60px] mt-[10px]'>
    <input type='text' placeholder='     Year of Manufacturer(YYYY) AD' className='border rounded-lg h-[50px] w-[420px]  border-slate-400' {...register("manufactureYear")}/>
    {errors.manufactureYear && ( 
      <p className='text-yellow-500'>{errors.manufactureYear.message}</p>
    )}
   </div>
   <div className=' ml-[60px] mt-[10px]'>
    <input type='text' placeholder='     Vehicle Cubic Capacity(CC)' className='border rounded-lg h-[50px] w-[420px]  border-slate-400' {...register("cubicCapacity")}/>
    {errors.cubicCapacity && ( 
      <p className='text-yellow-500'>{errors.cubicCapacity.message}</p>
    )}
   </div>
   <div className='ml-[60px] mt-[10px] text-gray-500'><h1>Last Renewal From (BS)</h1></div>
   <div className='flex ml-[60px] mt-[10px]'>
     <input type='date'  className='border rounded-lg h-[50px] w-[420px] text-gray-500 border-slate-400'{...register("date")}/>
     
   </div>
   {errors.date && ( 
      <p className='text-yellow-500 ml-[60px]'>{errors.date.message}</p>
    )}
   <div className='ml-[60px] mt-[10px] text-gray-500'><h1>Last Renewal To (BS)</h1></div>
   <div className='flex ml-[60px] mt-[10px]'>
     <input type='date'  className='border rounded-lg h-[50px] w-[420px] text-gray-500 border-slate-400'{...register("date")}/>
   </div>
   {errors.date && ( 
      <p className='text-yellow-500 ml-[60px]'>{errors.date.message}</p>
    )}
   <div className=' flex  gap-2 ml-[60px] mt-[10px] text-gray-600'><input type='checkbox'/><p>Get Third Party Insurance</p></div>
   <div className='ml-[60px] mt-[10px]  '>
    <button type='submit' className='bg-purple-800 rounded-lg h-[50px] w-[420px] text-white font-bold'>CALCULATE</button>
   </div>
   </form>
   <div className='flex gap-4 ml-[60px] mt-[20px]'>
    <div className=''><AiFillHome/></div>
   </div>
 </div>
  )
}

export default Bluebook
