import React from "react";
import AddItem from "../components/AddItem.tsx" 
import TabButtonHeader from "../components/Navbar.tsx";
import DatePicker from "../components/DatePicker.tsx";
import DisplayCharts from "../components/DisplayCharts.tsx";

export default function Home( { children }: { children: React.ReactNode } ) {

    return (
        <div className="min-h-screen bg-white">
            <header className="w-full">
                <div className="text-center py-6">
                    <h1 className="text-3xl font-bold">{children}</h1>
                </div>
                <TabButtonHeader />
            </header>

            <main className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex justify-center">
                    <AddItem />
                </div>

                <div className="flex justify-center items-start">
                    <DatePicker />
                </div>
            </main>
        </div>
    );
}