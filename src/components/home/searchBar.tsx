import React from 'react'
import "./searchBar.css";
type propType={
    title:string
    enableSearch:boolean
}
export const SearchBar: React.FC<propType>= ({title,enableSearch}) => {
  return (
    <div>
        {enableSearch && <input type='text' placeholder={`Search for ${title}` }className="search"/>}
        <h2>{title}</h2>
    </div>
  )
}
