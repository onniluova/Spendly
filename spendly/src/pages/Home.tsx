import React from "react";
import AddItem from "../components/AddItem.tsx" 

export default function Home( { children }: { children: React.ReactNode } ) {

    return (
    <>
    <div className="flex flex-col gap-6 items-center justify-center min-h-screen">
        <h1 className="font-semibold text-2xl">{children}</h1>
        <AddItem></AddItem>
    </div>
    </> 
    )
}