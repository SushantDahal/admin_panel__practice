import React from "react";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
const Home = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className=" ml-[300px] md:h-screen h-full ">
      <div className=" text-white mx-4 py-5">
        <h1 className="text-2xl my-4 font-bold">Dashboard</h1>
        <div className="grid md:grid-cols-4 gap-4 uppercase md:ml-auto">
          <div className="bg-[#64a3ff] rounded-md md:mx-10 m-0 ">
            <div className="flex mx-4 items-center justify-between">
              <h3 className="font-bold py-4">Products</h3>
              <BsFillArchiveFill size={20} />
            </div>
            <h1 className="mx-4 text-2xl font-bold pb-4">249</h1>
          </div>
          <div className="bg-[#ccc507] rounded-md">
            <div className="flex mx-4 items-center justify-between">
              <h3 className="font-bold py-4">Categories</h3>
              <BsFillGrid3X3GapFill size={20} />
            </div>
            <h1 className="mx-4 text-2xl font-bold pb-4">25</h1>
          </div>

          <div className="bg-[#00ff2b] rounded-md">
            <div className="flex mx-4 items-center justify-between">
              <h3 className="font-bold py-4">customers</h3>
              <BsPeopleFill size={20} />
            </div>
            <h1 className="mx-4 text-2xl font-bold pb-4">1500</h1>
          </div>
          <div className="bg-[#ff1912] rounded-md">
            <div className="flex mx-4 items-center justify-between">
              <h3 className="font-bold py-4">Alerts</h3>
              <BsFillBellFill size={20} />
            </div>
            <h1 className="mx-4 text-2xl font-bold pb-4">56</h1>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 my-10" id="chart">
          <div className=" w-full h-[500px]">
            <ResponsiveContainer>
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full h-[500px]">
            <ResponsiveContainer>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
