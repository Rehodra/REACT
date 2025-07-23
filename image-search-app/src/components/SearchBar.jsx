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
    <div className="flex justify-center align-items-center">
      <form onSubmit={handleSubmit} className={`flex justify-center align-items-center border h-18 w-3/5 m-28 mb-14 mt-8 mr-48 rounded-xl bg-slate-300 p-2 ml-96 hover:border-slate-950`}>
      <div className="pl-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search" color="#121212"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
      </div>
      <h1 class="flex items-center text-5xl font-extrabold dark:text-black">Pic-Kart<span class="bg-blue-100 text-black-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded-sm outline outline-2 outline-offset-2 dark:bg-blue-200 dark:text-blue-800 ms-2  ">PRO</span></h1>

      <input type="text" placeholder="Search..." className="input input-accent p-2 mt-2.5 ml-72" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <button type="button" onClick={handleClear} className="ml-2">
          <X className="text-muted-foreground p-0"  color="red" />
        </button>
      )}
      <button type="submit" className="btn btn-soft btn-accent ml-9 mt-2.5">search</button>
    </form>
    <a href="https://github.com/Rehodra" target="_blank" rel="noopener noreferrer">
  <button
  type="button"
  className="text-white bg-[#24292F] hover:bg-[#24292F]/90 ring ring-white ring-offset-0 focus:ring-4 focus:outline-white focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2  mt-11 mb-20"
  href="https://github.com/Rehodra"
>
  <svg
    className="w-4 h-4 me-2"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
      clipRule="evenodd"
    />
  </svg>
  
    my profile
 
  </button>
  </a>
    </div>
  )
}
