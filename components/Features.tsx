import React from 'react'
import { myData } from '@/constans'
import Image from 'next/image'
const Features = () => {
  return (
      <div className='w-[80%] mx-auto my-[100px]' id='fet'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-20'>
            {myData.map((feature) =>(
              <div className='flex flex-col text-center' key={feature.title}>
                {/* <Image src={`/images/${feature.icon}`} alt='' width={80} height={80} className='object-contain self-center'/> */}
                <img src={`/images/${feature.icon}`} alt='' className='w-[80px] h-[80px] object-contain self-center'/>
                <h3 className='text-white text-xl mt-5 mb-2'>{feature.title}</h3>
                <p className='text-slate-400 text-sm'>{feature.desc}</p>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Features