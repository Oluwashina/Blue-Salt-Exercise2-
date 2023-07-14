import React from 'react'
import Cards from '../../components/Cards';
import RequestTable from '../../tables/Dashboard/request';

const DashboardPage = () => {
    return ( 
        <>
            {/* overview cards */}
            <div className='grid grid-cols-4 gap-4'>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>

            {/* user inflow stats */}
            <div className='grid grid-cols-4 gap-4 mt-6'>
                <div className='col-span-3 bg-white rounded-lg py-4 px-4'>
                  <p className='text-base font-semibold'>User Inflow Statistics</p>

                </div>
                <div className='bg-[#871073] rounded-lg py-4 px-4'>

                </div>
            </div>

            {/* recent requests table */}
            <div className='grid grid-cols-4 gap-4 mt-6'>
                 <div className='col-span-3 bg-white rounded-lg py-6'>
                    <p className='text-base font-semibold px-4'>Recent Requests</p>
                    <RequestTable />
                 </div>
             </div>
        </>
     );
}
 
export default DashboardPage;