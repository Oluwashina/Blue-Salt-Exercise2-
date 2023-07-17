import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const BarChartComp = () => {

    const data = [
        {
          name: 'Jan',
          Users: 240,
        },
        {
          name: 'Feb',
          Users: 398,
        },
        {
          name: 'Mar',
          Users: 1000,
        },
        {
          name: 'Apr',
          Users: 808,
        },
        {
          name: 'May',
          Users: 480,
        },
      ];

    return ( 
        <>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
            height={300}
            data={data}
            margin={{
                top: 10,
                right: 5,
                left: 0,
                bottom: 5,
            }}
            >
           
            <XAxis dataKey="name"  />
            <YAxis fill='#fff' />
            <Tooltip />
            <Legend />
            <Bar dataKey="Users" fill="#fff" />
            </BarChart>
             </ResponsiveContainer>
        </>
     );
}
 
export default BarChartComp;