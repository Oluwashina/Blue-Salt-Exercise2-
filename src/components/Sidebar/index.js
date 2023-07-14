import React from 'react'
import notification_icon from '../../assets/icons/notification.svg'
import search_icon from '../../assets/icons/search-normal.svg'

const SidebarComp = ({children}) => {
    return ( 
        <>
            <div className='flex h-screen'>
               <div className='bg-[#9A0E81] md:w-64 flex-shrink-0 oveflow-y-scroll py-6 hidden lg:block'>
                </div>

                <div className='flex-grow flex-auto flex-shrink overflow-y-scroll'>
                    {/* navbar */}
                    <div className='flex px-4 md:px-4 py-4 justify-between items-center bg-white'>
                        <div>
                            <h4 className='md:text-2xl text-lg font-semibold'>Dashboard</h4>
                        </div>
                        <div className='flex gap-4 items-center'>
                             <div className='relative hidden md:block'>
                             <img src={search_icon} alt="search icon" className='absolute w-[18px] h-[18px] top-1/2 transform -translate-y-1/2 left-4 cursor-pointer' />
                                <input
                                    type="text"
                                    name="text"
                                    placeholder="Enter keywords"
                                    className="appearance-none 
                                    placeholder:text-[#B9B9B9] placeholder:text-[13px]
                                    text-[#212121] text-sm  md:min-w-[500px]
                                    border-none focus:outline-none rounded-[4px] bg-[#F9F9F9] py-3 px-10"
                                />
                            </div>

                              <div
                                className='bg-[#F9F9F9] w-[40px] h-[40px] flex justify-center cursor-pointer items-center rounded-full'>
                                <img src={notification_icon} alt="notification" className='' />
                            </div>

                            <div
                                className='bg-[#F9F9F9] w-[40px] h-[40px] flex justify-center cursor-pointer items-center rounded-full relative'>
                                <img src={notification_icon} alt="notification" className='' />
                                <div className='w-[8px] h-[8px] rounded-full bg-[#E40000] absolute right-3 top-3'></div>
                            </div>

                            <div className='w-[40px] h-[40px] bg-[#D8D8D8] rounded-full'>
                            </div>
                        </div>
                     </div>

                    <div className='px-4 md:px-4 py-6'>
                        {children}
                    </div>

                 </div>    
                
            </div> 
        </>
    );
}
 
export default SidebarComp;