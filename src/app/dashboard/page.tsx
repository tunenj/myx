import Navbar from "@/components/Navbar/Navbar";
import SalesOverview from "@/components/SalesOverview/SalesOverview";
import TopListings from "@/components/TopListings/TopListings";
import NavigationBar from '@/components/NavigationBar/NavigationBar'

export default function DashboardPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <NavigationBar />
            <main className="p-6 space-y-3">
                <h2 className="font-semibold text-2xl leading-tight tracking-normal">Welcome, Ahmed</h2>
                <SalesOverview />
                <TopListings />
            </main>
        </div>
    );
}
