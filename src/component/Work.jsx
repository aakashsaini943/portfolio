import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

const Work = () => {  // Changed to capital W for component naming convention
  return (
    <motion.div 
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration: 1, ease: 'easeOut'}}
      viewport={{once: false, amount:0.2}} 
      id='experience' 
      className='py-20 bg-dark-200'
    > 
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-6' >
          Work  {/* Capitalized "work" */}
          <span className='text-purple'>Experience</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-2.5'>My professional journey</p>

        <div className='max-w-3xl mx-auto'>
          {/* Removed empty space-y-12 div */}
          {workData.map((data, index) => (
            <div 
              key={index} 
              className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-purple cursor-pointer hover:-translate-y-2 transition-all duration-300"
            >
              {/* Fixed timeline dot positioning */}
              <div className='absolute -left-2 top-0 w-6 h-6 rounded-full bg-purple'>
              </div>
              
              <div className='bg-dark-300 rounded-2xl p-6'>
                <div className='flex justify-between items-start mb-2'>
                  <h3 className='text-xl font-semibold'>{data.role}</h3>
                  <span className='px-3 py-1 bg-purple/20 text-purple rounded-full text-xs md:text-sm'>{data.duration}</span>
                </div>
                <p className='text-gray-400 mb-2'>{data.company}</p>
                <p className='text-gray-300'>{data.description}</p> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Work  // Changed to match component name