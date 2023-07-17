import React from 'react'

const Cards = ({bgColor,icon, trendStatus, title, subtitle}) => {
    return ( 
        <>
        <div className='bg-white rounded-lg py-4 px-6'>
            <div className='flex gap-3'>
                <div className={`${bgColor} flex justify-center items-center rounded-full w-[50px] h-[50px]`}>
                    {icon}
                </div>
                <div>
                    <h6 className='font-semibold text-lg md:text-xl'>{title}</h6>
                    <p className='text-sm'>{subtitle}</p>

                    <div className='mt-2 flex items-center gap-2'>
                        <div className='flex gap-1 items-center'>
                            {trendStatus}
                            <p className='text-sm'>4.07%</p>
                        </div>
                        <div>
                            <p className='text-sm text-[#BDBDBD]'>Last Month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Cards;