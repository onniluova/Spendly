import React from "react";

export default function DatePicker() {
    return (
        <div>
            <label htmlFor="range">Select timeframe</label>
            <input type="date" id="range" />
        </div>
    );
}