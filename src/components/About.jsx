import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full py-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trusted by developers across the world</h2>
                <p className='text-2xl text-gray-500 py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus aspernatur dolorum tempore unde totam iure corporis eum.</p>
            </div>
           <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
           <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-5xl text-indigo-600 font-bold'>100%</p>
                <p className='text-gray-400 mt-2'>Completion</p>
            </div>
           <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-5xl text-indigo-600 font-bold'>24/7</p>
                <p className='text-gray-400 mt-2'>Completion</p>
            </div>
           <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-5xl text-indigo-600 font-bold'>100k</p>
                <p className='text-gray-400 mt-2'>Completion</p>
            </div>
           </div>
        </div>
    </div>
  )
}

export default About