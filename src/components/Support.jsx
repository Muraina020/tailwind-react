import React from 'react';
import {PhoneIcon, ArrowSmRightIcon} from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid';

import supportImg from '../assets/support.jpg'

const Support = () => {
  return (
    <div name='support' className='w-full mt-21'>
       <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
       </div>
       <div className='max-w-[1240] mx-auto text-white relative'>
        <div className='px-4 py-12'>
         <h2 className='text-3xl pt-8 uppercase text-slate-300 text-center'>Support</h2>
         <h3 className='text-5xl font-bold py-6  text-center'>Finding the right team</h3>
         <p className='text-3xl py-4 text-slate-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quisquam voluptatum maxime placeat magnam culpa voluptate illo sunt vero natus?</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
            <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                    < PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-xl mt-[-4rem]'/>
                    <h3 className='font-bold text-2xl py-6'>Sales</h3>
                    <p className='text-xl text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia incidunt eos iste eaque?</p>
                </div>
                <div className='bg-slate-300 py-4 pl-8'>
                    <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
                </div>
            </div>
            <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                    < ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-xl mt-[-4rem]'/>
                    <h3 className='font-bold text-2xl py-6'>Technical Support</h3>
                    <p className='text-xl text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia incidunt eos iste eaque?</p>
                </div>
                <div className='bg-slate-300 py-4 pl-8'>
                    <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
                </div>
            </div>
            <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                    < SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-xl mt-[-4rem]'/>
                    <h3 className='font-bold text-2xl py-6'>Media Enquiries</h3>
                    <p className='text-xl text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia incidunt eos iste eaque?</p>
                </div>
                <div className='bg-slate-300 py-4 pl-8'>
                    <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Support