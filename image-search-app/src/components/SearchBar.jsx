"use client"
import { Search, X } from "lucide-react"
import { useState } from "react"
import "daisyui"

export default function SearchBar({searchText, placeholder = "Search..." }) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
   if (query.trim() === "") {
    alert("Please enter a search term");
    setQuery("");
     return;
   }
   else{
    searchText(query);
   }
  }
  const handleClear = () => {
    setQuery("");
  }

  return (
   <div className="w-full flex flex-wrap justify-between items-center px-4 py-6 gap-2 bg-white dark:bg-slate-400 shadow-md rounded-lg mb-9 mr-6 
   dark:shadow-slate-600 transition-all duration-300">

  <div className="flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search" color="#121212">
      <path d="m21 21-4.34-4.34" />
      <circle cx="11" cy="11" r="8" />
    </svg>
    <h1 className="text-3xl font-extrabold text-black dark:text-white">
      Pic-Kart
      <span className="bg-blue-100 text-black text-sm font-semibold px-2 py-0.5 rounded ml-2">
        PRO
      </span>
    </h1>
  </div>


  <form onSubmit={handleSubmit} className="flex items-center gap-2 flex-grow justify-center max-w-2xl">
    <input
      type="text"
      placeholder={placeholder}
      className="input input-bordered input-accent w-full max-w-md"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    {query && (
      <button type="button" onClick={handleClear} className="text-red-500">
        <X />
      </button>
    )}
    <button className="btn btn-soft btn-accent">
      Search
    </button>
  </form>

  
  <a
    href="https://github.com/Rehodra"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="text-white bg-[#24292F] hover:bg-[#24292F]/90 ring ring-white font-medium rounded-lg text-sm px-5 py-2.5 flex items-center gap-2">
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 .333A9.911 9.911 0 0 0..."
          clipRule="evenodd"
        />
      </svg>
      My Profile
    </button>
  </a>
</div>

  )
}
