import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col min-h-[70vh] w-full justify-center items-center gap-12'>
        <div className='flex flex-col items-center justify-center text-center'>
            <p className='text-3xl font-semibold text-primary'>
                Nothing to see here
            </p>
            
            <p className='text-base font-normal'>
                Admin please add <span className='text-premium'>properties</span>
            </p>
        </div>
        
    </div>
  )
}

export default NotFound