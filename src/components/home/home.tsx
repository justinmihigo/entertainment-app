// import React from "react";
import Card from "./card";
import "./home.css"
import datas from "../../data.json";

import img1 from "../../assets/thumbnails/beyond-earth/trending/large.jpg"
import img2 from "../../assets/thumbnails/bottom-gear/trending/large.jpg"
import img3 from "../../assets/thumbnails/undiscovered-cities/trending/large.jpg";
import { SearchBar } from "./searchBar";
import { Test } from "./test";
const Home=()=>{
    
    return(
        <div className="home">
            <SearchBar title='Trending' enableSearch={true}/>
            <div className="aligning">
            <Card
            title={datas[0].title}
            img={img1}
            year={datas[0].year}
            rating={datas[0].rating}
            isTrending={datas[0].isTrending}
            />
            <Card
            title={datas[1].title}
            img={img2}
            year={datas[1].year}
            rating={datas[1].rating}
            isTrending={datas[1].isTrending}
            />
            <Card
            title={datas[2].title}
            img={img3}
            year={datas[2].year}
            rating={datas[2].rating}
            isTrending={datas[2].isTrending}
            />
            </div>
            <SearchBar title='Recommended' enableSearch={false}/>
            <Test data={datas}/> 
        </div>
    )
}
export default Home;