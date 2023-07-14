import React from 'react'

const Cards = () => {
    return ( 
        <>
        <div className='bg-white rounded-lg py-4 px-6'>
            <div className='flex gap-3'>
                <div className='bg-[#EBEDFA] rounded-full w-[60px] h-[60px]'>
        
                </div>
                <div>
                    <h6 className='font-semibold text-lg md:text-xl'>1478 286</h6>
                    <p className='text-sm'>Pending Requests</p>

                    <div className='mt-2 flex gap-2'>
                        <div>
                            <p className='text-sm'>4.07%</p>
                        </div>
                        <div>
                            <p className='text-sm'>Last Month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Cards;