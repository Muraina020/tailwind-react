import React from 'react';
import {FaFacebook, FaGithub, FaInstagram, 
    FaTwitter, } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full pt-24 bg-slate-900 text-gray-300 py-7 px-2'>
        <div className='max-w-[1240] mx-auto grid grid-cols-2 md:grid-cols-6 py-8 border-b-2 border-gray-600' >
            <div>
               <h2 className='uppercase font-bold pt-2'>Solutions</h2>
               <ul>
                <li className='py-1'>Marketing</li>
                <li className='py-1'>Analytics</li>
                <li className='py-1'>Commerce</li>
                <li className='py-1'>Data</li>
                <li className='py-1'>Cloud</li>
                </ul> 
            </div>
            <div>
               <h2 className='uppercase font-bold pt-2'>Support</h2>
               <ul>
                <li className='py-1'>Pricing</li>
                <li className='py-1'>Documentation</li>
                <li className='py-1'>Guides</li>
                <li className='py-1'>Api Status</li>
                </ul> 
            </div>
            <div>
               <h2 className='uppercase font-bold pt-2'>Company</h2>
               <ul>
                <li className='py-1'>About</li>
                <li className='py-1'>Blog</li>
                <li className='py-1'>Jobs</li>
                <li className='py-1'>Press</li>
                <li className='py-1'>Partners</li>
                </ul> 
            </div>
            <div>
               <h2 className='uppercase font-bold pt-2'>Legal</h2>
               <ul>
                <li className='py-1'>Claims</li>
                <li className='py-1'>Privacy</li>
                <li className='py-1'>Policies</li>
                <li className='py-1'>Terms</li>
                </ul> 
            </div>
           
            <div className='col-span-2 pt-8 md:pt-2'>
            <p className='font-bold uppercase'>Subscribe to our newsletter</p>
            <p className='py-4'>The latest news, rticles, and resources, sent to your inbox weekly</p>
            <form className='flex flex-col sm:flex-row'>
                <input type="email" placeholder='enter your email' className='w-full p-2 mr-4 mb-4 rounded-md' />
                <button className='p-2 mb-4'>Subscribe</button>
            </form>
            </div>
        </div>
        <div className='flex flex-col max-w-[1240px] mx-auto justify-between px-2 py-4 sm:flex-row text-gray-400'>
            <p className='py-4 text-center '>28th of May,2023 Workflow Ski-tech. All right reserved</p>
            <div className='flex justify-between sm:w-[300px] text-2xl pt-4'>
                <FaFacebook/>
                <FaGithub/>
                <FaInstagram/>
                <FaTwitter/>
           
            </div>
        </div>
    </div>
  )
}

export default Footer