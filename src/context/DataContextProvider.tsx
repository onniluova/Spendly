import React, { createContext, useContext, useState } from "react";

type Categories = {
    grocery: number,
    clothing: number,
    entertainment: number,
}

type DataContextType = {
  categories: Categories;
  totalValue: number;
  addItem: (category: keyof Categories, amount: number) => void;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [categories, setCategories] = useState<Categories>({
      grocery: 0,
      clothing: 0,
      entertainment: 0,
    });
  
    const [totalValue, setTotalValue] = useState(0);

    const addItem = (category: keyof Categories, amount: number) => {
        setCategories(prev => ({
            ...prev,
            [category]: prev[category] + amount,
        }));
        
        setTotalValue((prev) => prev + amount); 
    }

    return (
      <DataContext.Provider value={{ categories, totalValue, addItem }}>
        {children}
      </DataContext.Provider>
    )
}

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return context;
};