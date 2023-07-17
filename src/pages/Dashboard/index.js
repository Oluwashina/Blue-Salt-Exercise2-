import React from 'react'
import Cards from '../../components/Cards';
import RequestTable from '../../tables/Dashboard/request';
import RestoreIcon from '@mui/icons-material/Restore';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import GroupIcon from '@mui/icons-material/Group';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LineChartComp from '../../components/Charts/LineChart';
import BarChartComp from '../../components/Charts/BarChart';

const DashboardPage = () => {
    return ( 
        <>
            {/* overview cards */}
            <div className='grid md:grid-cols-4 gap-4'>
                <Cards
                 bgColor="bg-[#EBEDFA]"
                 icon={<RestoreIcon style={{color:'#2F49D2'}} />}
                    title={"147,628"}
                    subtitle={"Pending Requests"}
                 trendStatus={<TrendingUpIcon style={{color: '#4CDE97'}}/>}
                 trendValue="4.07%"
                 trendColor="text-[#4CDE97]"
                  />
                <Cards 
                  bgColor="bg-[#FFF8ED]"
                  trendStatus={<TrendingUpIcon style={{color: '#4CDE97'}} />}
                  icon={<DoneAllIcon style={{color: '#FFB647'}}/>} 
                     title={"478,520"}
                    subtitle={"Approved Requests"}
                    trendValue="0.24%"
                    trendColor="text-[#4CDE97]"
                />
                <Cards 
                 bgColor="bg-[#EFEAFD]"
                icon={<LocalMallIcon style={{color: '#9573F1'}} />} trendStatus={<TrendingDownIcon style={{color: '#F26464'}} />} 
                 title={"154,872"}
                 subtitle={"Total Agents"}
                 trendValue="1.64%"
                 trendColor="text-[#F26464]"
                />
                <Cards 
                 bgColor="bg-[#EDFCF5]"
                icon={<GroupIcon style={{color: '#4CDE97'}} />} trendStatus={<TrendingUpIcon style={{color: '#FFB647'}}
                 />} 
                 title={"168"}
                 subtitle={"Total Users"}
                 trendValue="0.00%"
                 trendColor="text-[#FFB647]"
                 />
            </div>

            {/* user inflow stats */}
            <div className='hidden md:grid md:grid-cols-4 gap-4 mt-6 '>
                <div className='col-span-3 bg-white rounded-lg py-4 px-4 h-[400px]'>
                  <p className='text-base font-semibold'>User Inflow Statistics</p>    
                     <LineChartComp />
                </div>
                <div className='bg-[#871073] rounded-lg py-4 px-3'>
                    <BarChartComp />
                    
                </div>
            </div>

            {/* recent requests table */}
            <div className='grid md:grid-cols-4 gap-4 mt-6'>
                 <div className='col-span-3 bg-white rounded-lg py-6'>
                    <p className='text-base font-semibold px-4'>Recent Requests</p>
                    <RequestTable />
                 </div>
             </div>
        </>
     );
}
 
export default DashboardPage;