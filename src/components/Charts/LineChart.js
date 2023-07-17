import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartComp = () => {

    const data = [
        {
          name: 'Dec',
          Agents: 40,
          Users: 24,
          amt: 24,
        },
        {
          name: 'Jan',
          Agents: 30,
          Users: 13,
          amt: 22,
        },
        {
          name: 'Feb',
          Agents: 20,
          Users: 98,
          amt: 22,
        },
        {
          name: 'Mar',
          Agents: 27,
          Users: 39,
          amt: 20,
        },
        {
          name: 'Apr',
          Agents: 18,
          Users: 48,
          amt: 21,
        },
        {
          name: 'May',
          Agents: 23,
          Users: 38,
          amt: 25,
        },
        {
          name: 'Jun',
          Agents: 34,
          Users: 43,
          amt: 21,
        },
      ];

    return (  
        <>
        <ResponsiveContainer width="100%" height="100%" className="mt-5">
        <LineChart
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 5,
            bottom: 40,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Agents" stroke="#5F2EEA" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Users" stroke="#4CDE97" />
        </LineChart>
       </ResponsiveContainer>
        </>
    );
}
 
export default LineChartComp;