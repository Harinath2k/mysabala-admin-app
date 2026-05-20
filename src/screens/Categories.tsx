import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AddCategory } from "../components/Ui/AddCategory";
import { useState } from "react"; 

export function Categories() {

  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/categories/add')} className="flex items-center gap-2 rounded-full px-6 py-3 bg-orange-600 text-white text-sm font-semibold shadow-md border border-orange-500 hover:bg-orange-500 hover:shadow-lg active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"><Plus size={20}/>Add Category</button>
    </div>
  );
}