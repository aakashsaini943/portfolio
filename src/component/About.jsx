import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true }} id='About' className='py-12 md:py-20 bg-dark-200'>
        <div className='container mx-auto px-4 sm:px-6'>
            {/* heading */}
            <h2 className='text-2xl md:text-3xl font-bold text-center mt-10 mb-4'> About
                   <span className='text-purple '> Me </span>
            </h2>
       
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion </p>
            {/* image + journey*/}
            
            <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-12'>
                {/* image */}
              <div className='w-full md:w-1/2 rounded-2xl overflow-hidden max-w-md mx-auto md:mx-0'>
              <motion.img 
              initial={{opacity:0, y:50}}
              whileInView={{opacity:1, y:0}}
              transition={{duration: 0.9, ease: 'easeOut'}}
              viewport={{once: false, amount:0.2}}
              className='w-full h-full object-cover'
              src={assets.profileImg} alt="profile" />
              </div>

            { /* text content */}

              <motion.div 
              initial={{opacity:0, y:50}}
              whileInView={{opacity:1, y:0}}
              transition={{duration: 0.9, ease: 'easeOut'}}
              viewport={{once: false, amount:0.2}}

              className='w-full md:w-2/2 mt-8 md:mt-0' >

                <div className='rounded-2xl p-8'>
                  <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                  <p className='text-gray-400 mb-6'> I'm a passionate fuller with over five years or an experience creating digital solutions for business around the world my journey started with basic estimates such as websites and immediately complex web applications with modern frameworks </p>
                  <p className='text-gray-400 mb-12'> when I'm not coding you can find me exploring new technologies contributing to open source projects or sharing my knowledge throughout teach blogs and tutorials I believe in continuous learning and pushing the boundaries of what's possible on the web </p>
               {/* cards */}

               <div className='grid grid-cols-2 md:grid-cols-2 gap-6'>
                {
                    aboutInfo.map((data, index)=>(
                        <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:translate-y-2 cursor-pointer'> 
                        
                         <div className='text-purple'>
                             <data.icon/>
                         </div>
                                 <h3 className='text-xl font-semibold'>{data.title}</h3>
                                 <p>{data.description}</p>
                        </div>
                    ))
                }

               </div>
                </div>

              </motion.div>
            </div>

        </div>
    </motion.div>
  )
}

export default About