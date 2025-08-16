"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { salesData } from "../../constants/data/mockData";
import Image from "next/image";
import TimeFilter from "../TimeFilter/TimeFilter";
import ListingsOverview from "@/components/ListingsOverview/ListingsOverview";
import UsersOverview from "@/components/UsersOverview/UsersOverview";

export default function SalesOverview() {
    return (
        <div className="">
            <div className="flex flex-col sm:flex-row justify-between gap-6">
                {/* Left side: Sales Overview */}
                <div className="flex flex-col bg-white p-4 rounded-xl border-gray-300 border w-full max-w-[856px] h-[325px]">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                        <div className="lg:mb-6">
                            <h3 className="text-black font-semibold text-[20px] leading-[100%] pt-4 py-3.5">Sales Overview</h3>
                            <span className="text-gray-400 font-normal text-[12px] leading-[100%]">Showing overview Jan 2022 - Sep 2022</span>
                        </div>
                        <div className="ml-auto mt-4 sm:mt-0">
                            <button className="px-9 py-3.5 text-sm border border-gray-300 rounded-3xl lg:mb-4">View Transactions</button>
                            <TimeFilter />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                        <div className="flex items-center lg:mt-20">
                            <Image src="/icons/left.png" alt="Arrow Down" width={24} height={24} className="w-3 h-3" />
                        </div>
                        <div className="w-full sm:w-1/2">
                            <ResponsiveContainer width="100%" height={200}>
                                <BarChart data={salesData}>
                                    <XAxis dataKey="month" tickLine={false} strokeWidth={0.2} tick={{ fontSize: 10 }} />
                                    <YAxis stroke="#808080" strokeWidth={0.2} tickFormatter={(value) => `${value}m`} tick={{ fontSize: 10 }} />
                                    <Tooltip />
                                    <Bar dataKey="tradition" fill="#4F46E5" />
                                    <Bar dataKey="msp" fill="#22C55E" />
                                    <Bar dataKey="commission" fill="#EF4444" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex items-center lg:mt-20">
                            <Image src="/icons/right.png" alt="Arrow Down" width={18} height={18} className="w-3 h-3" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full sm:w-1/2">
                            {/* Total Inflow */}
                            <div className="bg-white rounded-xl border border-gray-300 w-full sm:w-[189px] p-4 shadow-xl flex flex-col">
                                <span className="font-semibold text-[19px] leading-[130%] text-blue-600">₦120,000,000.00</span>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-black font-medium text-[10px]">Total Inflow</span>
                                    <span className="text-green-500 text-xs flex items-center gap-1">
                                        <Image src="/icons/frame.png" alt="Arrow Down" width={12} height={12} className="w-3 h-3" />
                                        2.5%
                                    </span>
                                </div>
                            </div>

                            {/* MRR */}
                            <div className="bg-white rounded-xl border border-gray-300 w-full sm:w-[189px] p-4 shadow flex flex-col">
                                <span className="font-semibold text-[19px] leading-[130%] text-green-600">₦50,000,000.00</span>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-black font-medium text-[10px]">MRR</span>
                                    <span className="text-green-500 text-xs flex items-center gap-1">
                                        <Image src="/icons/frame.png" alt="Arrow Down" width={12} height={12} className="w-3 h-3" />
                                        2.5%
                                    </span>
                                </div>
                            </div>

                            {/* Commission Revenue */}
                            <div className="bg-white rounded-xl border border-gray-300 w-full sm:w-[189px] p-4 shadow flex flex-col">
                                <span className="font-semibold text-[19px] leading-[130%] text-[#14B8A6]">₦200,000,000.00</span>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-black font-medium text-[10px]">Commission Revenue</span>
                                    <span className="text-[#14B8A6] text-xs flex items-center gap-1">
                                        <Image src="/icons/fram1.png" alt="Arrow Down" width={12} height={12} className="w-3 h-3" />
                                        0.5%
                                    </span>
                                </div>
                            </div>

                            {/* GMV */}
                            <div className="bg-white rounded-xl border border-gray-300 w-full sm:w-[189px] p-4 shadow flex flex-col">
                                <span className="font-semibold text-[19px] leading-[130%] text-red-600">₦100,000,000.00</span>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-black font-medium text-xs">GMV</span>
                                    <span className="text-red-500 text-xs flex items-center gap-1">
                                        <Image src="/icons/frame2.png" alt="Arrow Down" width={12} height={12} className="w-3 h-3" />
                                        0.5%
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side: Listings Overview and Users Overview */}
                <div className="lg:w-1/3 sm:w-2/3 md:grid-cols-2">
                    <ListingsOverview />
                    <UsersOverview />
                </div>
            </div>

        </div>
    );
}
