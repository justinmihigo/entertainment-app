// import React from "react";
import Card from "./card";
import "./home.css"
import datas from "../../data.json";
import { SearchBar } from "./searchBar";
import Navbar from "../navbar/navbar";

import CardRec from "./cardRec";
import { ChangeEvent, useState } from "react";
const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => { setSearchQuery(e.target.value) }
    // const [isBookmarked, setIsBookmarked] = useState(false); 
    // const handleBookmarkToggle = () => {
    //     setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
    // };
    return (
        <div className="home">
            <Navbar />
            <div className="behind">
                <div className="remove"><SearchBar title='Trending' enableSearch={true} onchange={handleSearch} /></div>
                <div className="aligning">
                    {datas.filter(item => item.isTrending)
                        .map((item, index) => {

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
                <SearchBar title='Recommended' enableSearch={false} />
                <div className="recommended">
                    {datas.slice(2).filter(dataItem => {
                        return searchQuery === '' ? dataItem : dataItem.title.toLowerCase().includes(searchQuery);
                    })
                        .map((dataItem, index) => (
                            <CardRec
                                key={index}
                                title={dataItem.title}
                                img={dataItem.thumbnail.regular.medium}
                                year={dataItem.year}
                                rating={dataItem.rating}
                                isBookmarked={dataItem.isBookmarked}
                                category={dataItem.category}
                                isTrending={dataItem.isTrending}
                                // onBookmarkToggle={handleBookmarkToggle}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}
export default Home;