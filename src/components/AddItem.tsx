import React from "react";
import { useState } from "react"
import Button from "../components/Button.tsx" 
import DisplayCharts from "../components/DisplayCharts.tsx"
import { useDataContext } from "../context/DataContextProvider.tsx";

type Categories = {
    grocery: number,
    clothing: number,
    entertainment: number,
}

export default function AddItem ({}) {
    const [amount, setAmount] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<keyof Categories>('grocery');

    const {categories, totalValue, addItem } = useDataContext();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const numValue = parseFloat(amount)
        addItem(selectedCategory, numValue);
    }

    const data = Object.entries(categories).map(([category, value]) => ({
        category,
        value,
    }));

    console.log(categories, totalValue);

    return  ( 
    <form onSubmit={handleSubmit} className="grid grid-cols-1 p-1 m-1 gap-6 w-[40vw]" action="">Type:
        <select 
            className="border-2 border-gray-300 p-2 rounded-md"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as keyof Categories)}
            >
            <option value="grocery">Grocery</option>
            <option value="clothing">Clothing</option>
            <option value="entertainment">Entertainment</option>
        </select>
    
        <input 
            className="bg-gray-200 p-2 rounded-md" 
            type="number" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter price (€)"
        />
    
        <Button className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-200 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
        >Add Spending
        </Button>

        <DisplayCharts className="mx-auto bg-gray-100 rounded-md w-[40vw]" data={data}></DisplayCharts>

        <p className="mx-auto">Total value of spendings: {totalValue}€</p>
    </form> 
    )
}