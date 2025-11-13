import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router";

export default function TabButtonHeader() {
    let navigate = useNavigate();

    return (
        <nav className="flex justify-center gap-4 rounded-md bg-gray-100 m-1 p-2">
            <Button className="cursor-pointer rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 hover:from-blue-600 hover:to-purple-600 p-4 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200" onClick={() => navigate('/home')}>Home</Button>
            <Button className="cursor-pointer rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 hover:from-blue-600 hover:to-purple-600 p-4 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200" onClick={() => navigate('/charts')}>Charts</Button>
            <Button className="cursor-pointer rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 hover:from-blue-600 hover:to-purple-600 p-4 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200" onClick={() => navigate('/history')}>History</Button>
        </nav>
    )
}
