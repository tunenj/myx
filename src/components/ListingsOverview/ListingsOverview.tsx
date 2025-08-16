import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function ListingsOverview() {
    return (
        <section className="rounded-xl shadow-sm w-full max-w-md lg:mb-5">
            {/* Header with gray background */}
            <div className="bg-gray-50 rounded-t-xl p-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Home size={20} className="text-blue-600" />
                    <h3 className="font-medium text-base text-black tracking-normal">
                        Listings Overview
                    </h3>
                </div>
                <Link
                    href="#"
                    className="text-blue-600 text-sm font-medium flex items-center hover:underline"
                >
                    View all
                    <ChevronRight size={16} className="ml-1" />
                </Link>
            </div>

            {/* Metrics section with white background */}
            <div className="bg-white rounded-b-xl p-5 flex justify-between">
                <div className="text-center flex-1">
                    <div className="text-xs text-gray-500">Total</div>
                    <div className="mt-1 text-xl font-bold text-black">1.8k</div>
                </div>
                <div className="text-center flex-1">
                    <div className="text-xs text-gray-500">Active</div>
                    <div className="mt-1 text-xl font-bold text-black">80</div>
                </div>
                <div className="text-center flex-1">
                    <div className="text-xs text-gray-500">Archived</div>
                    <div className="mt-1 text-xl font-bold text-black">1k</div>
                </div>
            </div>
        </section>
    );
}
