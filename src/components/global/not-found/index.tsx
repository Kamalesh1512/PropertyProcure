import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col min-h-[70vh] w-full justify-center items-center gap-12'>
        <div className='flex flex-col items-center justify-center text-center'>
            <p className='text-3xl font-semibold text-primary'>
                Nothing to see here
            </p>
            
            <p className='text-base font-normal'>
                <span className='text-premium'>properties</span> are comming soon!!
            </p>
        </div>
        
    </div>
  )
}

export default NotFound