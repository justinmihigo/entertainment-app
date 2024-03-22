// import React from "react";
import Card from "./card";
import "./home.css"
import datas from "../../data.json";
import { SearchBar } from "./searchBar";
import Navbar from "../navbar/navbar";

import CardRec from "./cardRec";
import { ChangeEvent, Key, useEffect, useState } from "react";
const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [items, setItems]= useState<any>([]);
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => { setSearchQuery(e.target.value) }
    // useEffect(() =>{
    //     localStorage.setItem('allDatas', JSON.stringify(datas));
    // },[]);
    useEffect(()=>{
        
        const allDatas = JSON.parse(localStorage.getItem('allDatas')!);
        if(!allDatas){
            localStorage.setItem('allDatas', JSON.stringify(datas));
        }
        if(allDatas){
            setItems(allDatas);
        }
    },[]);
    // const handleBookmarkToggle=()=>{
    //     const newItems= items.filter((item: { title: string; })=>{
    //         return item.title.toLowerCase();
    //     })
    //     .map((item: { title: string; isBookmarked: boolean; })=>{
    //         if(item.title.toLowerCase()){
    //             item.isBookmarked=!item.isBookmarked;
    //         }
    //         return item;
    //     })
    //     setItems(newItems);
    // }
    const handleBookmarkToggle = (title: string) => {
        const newItems = items.map((item: any) => {
            if (item.title === title) {
                return { ...item, isBookmarked: !item.isBookmarked };
            
            }
            return item;
        });
        setItems(newItems);
        localStorage.setItem('allDatas', JSON.stringify(newItems));
    }

    
    return (
        <div className="home">
            <Navbar />
            <div className="behind">
                <div className="remove"><SearchBar title='Trending' enableSearch={true} onchange={handleSearch} /></div>
                <div className="aligning">
                    {items.filter((item: { isTrending: any; }) => item.isTrending)
                        .map((item: { title: string; thumbnail: { regular: { large: string | undefined; }; }; year: number; rating: string; isBookmarked: boolean; category: string; isTrending: boolean; }, index: Key | null | undefined) => {
                            return (<Card
                                key={index}
                                title={item.title}
                                img={item.thumbnail.regular.large}
                                year={item.year}
                                rating={item.rating}
                                isBookmarked={item.isBookmarked}
                                category={item.category}
                                isTrending={item.isTrending}
                            // onBookmarkToggle={handleBookmarkToggle}
                            />
                            )
                        })}
                </div>
                <div className="positioning">
                    <SearchBar title='Recommended' enableSearch={false} />
                    <div className="recommended">
                        {items.slice(2).filter((dataItem: { title: string; }) => {
                            return searchQuery === '' ? dataItem : dataItem.title.toLowerCase().includes(searchQuery);
                        })
                            .map((dataItem: { title: string; thumbnail: { regular: { medium: string | undefined; }; }; year: number; rating: string; isBookmarked: boolean; category: string; isTrending: boolean; }, index: Key | null | undefined) => (
                                <CardRec
                                    key={index}
                                    id={index}
                                    title={dataItem.title}
                                    img={dataItem.thumbnail.regular.medium}
                                    year={dataItem.year}
                                    rating={dataItem.rating}
                                    isBookmarked={dataItem.isBookmarked}
                                    category={dataItem.category}
                                    isTrending={dataItem.isTrending}
                                onBookmarkToggle={()=>handleBookmarkToggle(dataItem.title)}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;