import React from 'react';
import {CheckIcon} from '@heroicons/react/solid'

const Princing = () => {
  return (
    <div name='pricing' className='w-full my-24 text-white'>
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay '></div>

        <div className='max-w-[1240] mx-auto py-12'>
            <div className='text-center text-slate-300'>
                <h2 className='uppercase text-3xl'>Pricing</h2>
                <h3 className='font-bold text-5xl text-white py-8'>The right price for your research</h3>
                <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium sint suscipit neque blanditiis possimus!</p>
            </div>

            <div className='grid md:grid-cols-2'>
                <div className='bg-white text-slate-900 rounded-xl shadow-2xl m-4 p-8'>
                    <span className='bg-indigo-200 text-indigo-900 rounded-2xl uppercase px-3 py-1 text-sm'>Standard</span>
                    <div>
                       <p className='text-6xl font-bold  py-5 flex'>$49<span className='text-xl text-slate-400 flex flex-col justify-end'>/mo</span></p> 
                    </div>
                    <p className='text-2xl text-slate-500 py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='text-2xl'>
                       <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem ipsum dolor sit amet.</p> 
                       <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem ipsum dolor sit amet.</p> 
                       <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem ipsum dolor sit amet.</p> 
                       <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem ipsum dolor sit amet.</p> 
                       <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem ipsum dolor sit amet.</p> 
                       <button className='w-full py-4 my-4'>Get Started</button>
                    </div>
                </div>
                <div className='bg-white text-slate-900 rounded-xl shadow-2xl m-4 p-8'>
                    <span className='bg-indigo-200 text-indigo-900 rounded-2xl uppercase px-3 py-1 text-sm'>Standard</span>
                    <div>
                       <p className='text-6xl font-bold  py-5 flex'>$49<span className='text-xl text-slate-400 flex flex-col justify-end'>/mo</span></p> 
                    </div>
                    <p className='text-2xl text-slate-500 py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='text-2xl'>
                       <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem ipsum dolor sit amet.</p> 
                       <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem ipsum dolor sit amet.</p> 
                       <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem ipsum dolor sit amet.</p> 
                       <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem ipsum dolor sit amet.</p> 
                       <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem ipsum dolor sit amet.</p> 
                       <button className='w-full py-4 my-4'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Princing