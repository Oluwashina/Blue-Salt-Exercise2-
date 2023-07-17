import React from 'react'
import search_icon from '../../assets/icons/search-normal.svg'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import logo_white from '../../assets/icons/logo-white.svg'
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const SidebarComp = ({children}) => {

    const location = useLocation()

    return ( 
        <>
            <div className='flex h-screen'>
               <div className='bg-[#9A0E81] md:w-64 flex-shrink-0 px-4 oveflow-y-scroll py-6 hidden lg:block'>
                    <div className='flex justify-center'>
                        <img src={logo_white} alt="logo" />
                    </div>
                  <div className='bg-[#A3258E] w-full h-[1px] mt-2'></div>

                  <div className='mt-6'>
                      <Link to="/" 
                          className={
                            location.pathname.includes('/')
                            ?
                            "flex items-center w-full py-2 px-4 rounded-[4px] bg-[#A3258E] text-white border-r-2 border-[#fff]"
                            :
                            "flex items-center w-full py-4 px-6 rounded-[4px] text-white  hover:bg-[#174A37] duration-300"
                        }>
                            <HomeIcon className='w-[18px] h-[18px]' />
                            <span className="ml-2 text-sm">Dashboard</span>
                        </Link>


                        <Link to="/requests" 
                        className={
                            location.pathname.includes('/requests')
                            ?
                            "flex items-center w-full py-2 mt-5 px-4 rounded-[4px] bg-[#A3258E] text-white  border-r-2 border-[#fff]"
                            :
                            "flex items-center w-full mt-5 py-2 px-4 rounded-[4px] text-[#D69ECD]  hover:bg-[#A3258E] duration-300"
                        }>
                            <HomeIcon className='w-[18px] h-[18px]' />
                            <span className="ml-2 text-sm">Requests</span>
                        </Link>

                        <Link to="/kyc" 
                        className={
                            location.pathname.includes('/kyc')
                            ?
                            "flex items-center w-full py-2 mt-5 px-4 rounded-[4px] bg-[#A3258E] text-white  border-r-2 border-[#fff]"
                            :
                            "flex items-center w-full mt-5 py-2 px-4 rounded-[4px] text-[#D69ECD]  hover:bg-[#A3258E] duration-300"
                        }>
                            <HomeIcon className='w-[18px] h-[18px]' />
                            <span className="ml-2 text-sm text-[#D69ECD]">KYCs</span>
                        </Link>

                        <Link to="/reports" 
                        className={
                            location.pathname.includes('/reports')
                            ?
                            "flex items-center w-full py-2 mt-5 px-4 rounded-[4px] bg-[#A3258E] text-white  border-r-2 border-[#fff]"
                            :
                            "flex items-center w-full mt-5 py-2 px-4 rounded-[4px] text-[#D69ECD]  hover:bg-[#A3258E] duration-300"
                        }>
                            <HomeIcon className='w-[18px] h-[18px]' />
                            <span className="ml-2 text-sm text-[#D69ECD]">Reports</span>
                        </Link>

                        <Link to="/audit" 
                        className={
                            location.pathname.includes('/audit')
                            ?
                            "flex items-center w-full py-2 mt-5 px-4 rounded-[4px] bg-[#A3258E] text-white  border-r-2 border-[#fff]"
                            :
                            "flex items-center w-full mt-5 py-2 px-4 rounded-[4px] text-[#D69ECD]  hover:bg-[#A3258E] duration-300"
                        }>
                            <HomeIcon className='w-[18px] h-[18px]' />
                            <span className="ml-2 text-sm text-[#D69ECD]">Audit Trail</span>
                        </Link>

                        <Link to="/users" 
                        className={
                            location.pathname.includes('/users')
                            ?
                            "flex items-center w-full py-2 mt-5 px-4 rounded-[4px] bg-[#A3258E] text-white  border-r-2 border-[#fff]"
                            :
                            "flex items-center w-full mt-5 py-2 px-4 rounded-[4px] text-[#D69ECD]  hover:bg-[#A3258E] duration-300"
                        }>
                            <HomeIcon className='w-[18px] h-[18px]' />
                            <span className="ml-2 text-sm">Users</span>
                        </Link>

                        <Link to="/settings" 
                        className={
                            location.pathname.includes('/settings')
                            ?
                            "flex items-center w-full py-2 mt-5 px-4 rounded-[4px] bg-[#A3258E] text-white  border-r-2 border-[#fff]"
                            :
                            "flex items-center w-full mt-5 py-2 px-4 rounded-[4px] text-[#D69ECD]  hover:bg-[#A3258E] duration-300"
                        }>
                            <HomeIcon className='w-[18px] h-[18px]' />
                            <span className="ml-2 text-sm">Settings</span>
                        </Link>

                  </div>

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

                            <div className='flex gap-1 items-center'>
                                <p className='text-[#767676] font-semibold'>EN</p>
                                <KeyboardArrowDownIcon style={{color: '#B9B9B9'}} />
                            </div>

                              <div
                                className='bg-[#F9F9F9] w-[40px] h-[40px] flex justify-center cursor-pointer items-center rounded-full'>
                               
                                <WbSunnyIcon style={{color: '#D6D7E3'}} />
                            </div>

                            <div
                                className='bg-[#F9F9F9] w-[40px] h-[40px] flex justify-center cursor-pointer items-center rounded-full relative'>
                                <NotificationsIcon style={{color: '#D6D7E3'}} />
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