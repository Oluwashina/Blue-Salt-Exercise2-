import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const RequestTable = () => {
    return ( 
        <>
            <div className="overflow-x-auto relative mt-4">
                <table className="w-full text-left">
                    <thead className="text-[#8492AB] text-sm border-b-[#F7F7F7] border-b">
                    <tr>
                        <th scope="col" className="px-4 py-4 font-semibold ">
                        Name/Email
                        </th>

                        <th scope="col" className="px-4 py-4 font-semibold">
                        Type
                        </th>
                        <th scope="col" className="px-4 py-4 font-semibold">
                        Status
                        </th>
                        <th scope="col" className="px-4 py-4 font-semibold">
                        Date
                        </th>
                        <th scope="col" className="px-4 py-4 font-semibold">
                        
                        </th>
                    </tr>
                 </thead>

                 <tbody>
                   <tr
                    className="bg-white text-sm cursor-pointer border-b-[#F7F7F7] border-b"
                      >
                        <th
                          scope="row"
                          className="py-4 px-4 font-normal text-[#5C715E] whitespace-nowrap "
                        >
                          <div className='flex items-center gap-2'>
                            <div className='w-[30px] bg-[#D8D8D8] h-[30px] rounded-md'></div>
                            <div>
                                <h6 className='font-semibold'>Micheal Olu</h6>
                                <p className='text-[#9AA6BB] text-xs'>micheal@gmail.com</p>
                            </div>
                          </div>
                        </th>

                        <td className="py-4 px-4 text-[#8492AB]">
                          New Agent
                        </td>
                        <td className="py-4 px-4 text-[#5C715E]">
                         <div className='pending-badge'>
                            <p>Pending</p>
                         </div>
                        </td>
                        <td className="py-4 px-4 text-[#8492AB]">
                          23/4/18
                        </td>
                        
                        <td className="py-4 px-4">
                           <div className='bg-[#EEF5FD] w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                           <KeyboardArrowRightIcon style={{color: '#CC87C0'}} />
                           </div>
                        </td>
                      </tr>
                      <tr
                    className="bg-white text-sm cursor-pointer border-b-[#F7F7F7] border-b"
                      >
                        <th
                          scope="row"
                          className="py-4 px-4 font-normal text-[#5C715E] whitespace-nowrap "
                        >
                          <div className='flex items-center gap-2'>
                            <div className='w-[30px] bg-[#D8D8D8] h-[30px] rounded-md'></div>
                            <div>
                                <h6 className='font-semibold'>Chioma James</h6>
                                <p className='text-[#9AA6BB] text-xs'>alexa@mail.com</p>
                            </div>
                          </div>
                        </th>

                        <td className="py-4 px-4 text-[#8492AB]">
                          Account Deactivation
                        </td>
                        <td className="py-4 px-4 text-[#5C715E]">
                         <div className='pending-badge'>
                            <p>Pending</p>
                         </div>
                        </td>
                        <td className="py-4 px-4 text-[#8492AB]">
                          23/12/20
                        </td>
                        
                        <td className="py-4 px-4">
                           <div className='bg-[#EEF5FD] w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                           <KeyboardArrowRightIcon style={{color: '#CC87C0'}} />
                           </div>
                        </td>
                      </tr>
                      <tr
                    className="bg-white text-sm cursor-pointer border-b-[#F7F7F7] border-b"
                      >
                        <th
                          scope="row"
                          className="py-4 px-4 font-normal text-[#5C715E] whitespace-nowrap "
                        >
                          <div className='flex items-center gap-2'>
                            <div className='w-[30px] bg-[#D8D8D8] h-[30px] rounded-md'></div>
                            <div>
                                <h6 className='font-semibold'>Boluwatife Ade</h6>
                                <p className='text-[#9AA6BB] text-xs'>laure@mail.com</p>
                            </div>
                          </div>
                        </th>

                        <td className="py-4 px-4 text-[#8492AB]">
                          New User
                        </td>
                        <td className="py-4 px-4 text-[#5C715E]">
                         <div className='active-badge'>
                            <p>Active</p>
                         </div>
                        </td>
                        <td className="py-4 px-4 text-[#8492AB]">
                          13/04/19
                        </td>
                        
                        <td className="py-4 px-4">
                           <div className='bg-[#EEF5FD] w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                              <KeyboardArrowRightIcon style={{color: '#CC87C0'}} />
                           </div>
                        </td>
                      </tr>
                      <tr
                    className="bg-white text-sm cursor-pointer"
                      >
                        <th
                          scope="row"
                          className="py-4 px-4 font-normal text-[#5C715E] whitespace-nowrap "
                        >
                          <div className='flex items-center gap-2'>
                            <div className='w-[30px] bg-[#D8D8D8] h-[30px] rounded-md'></div>
                            <div>
                                <h6 className='font-semibold'>Miriam Eric</h6>
                                <p className='text-[#9AA6BB] text-xs'>miriam@mail.com</p>
                            </div>
                          </div>
                        </th>

                        <td className="py-4 px-4 text-[#8492AB]">
                          Email Auth
                        </td>
                        <td className="py-4 px-4 text-[#5C715E]">
                         <div className='active-badge'>
                            <p>Active</p>
                         </div>
                        </td>
                        <td className="py-4 px-4 text-[#8492AB]">
                          03/04/21
                        </td>
                        
                        <td className="py-4 px-4">
                           <div className='bg-[#EEF5FD] w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                           <KeyboardArrowRightIcon style={{color: '#CC87C0'}} />
                           </div>
                        </td>
                      </tr>
                 </tbody>
                </table>
            </div>
        </>
     );
}
 
export default RequestTable;