import React, { ChangeEvent } from 'react'
import "./searchBar.css";
type propType={
    title:string,
    enableSearch:boolean,
    onchange?:(e:ChangeEvent<HTMLInputElement>)=>void
}
export const SearchBar: React.FC<propType>= ({title,enableSearch,onchange}) => {
  return (
    <div>
        {enableSearch && <input type='text' placeholder={`Search for ${title}` } onChange={onchange} className="search"/>}
        <h2>{title}</h2>
    </div>
  )
}
