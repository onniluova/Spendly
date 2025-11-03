import React from "react";
import Button from "../components/Button.tsx" 

export default function Home( { children }: { children: React.ReactNode } ) {
    type Categories = {
        grocery: number,
        clothing: number,
        entertainment: number,
    }

    let categories: Categories = {
        grocery: 0,
        clothing: 0,
        entertainment: 0
    }

    return (
    <>
    <div className="flex flex-col gap-6 items-center justify-center min-h-screen">
        <h1 className="font-semibold text-2xl">{children}</h1>
        <form className="flex p-1 m-1 gap-4" action="">Type:
            <select className="border-2 border-gray-300 p-2 rounded-md">
                <option value="grocery">Grocery</option>
                <option value="clothing">Clothing</option>
                <option value="entertainment">Entertainment</option>
            </select>

            <input className="bg-gray-200" type="Add" />

            <Button className="bg-blue-500 p-1 m-1 border-1 rounded-sm hover:bg-blue-600 hover:scale-105 cursor-pointer">Add Spending</Button>
        </form>
    </div>
    </> 
    )
}