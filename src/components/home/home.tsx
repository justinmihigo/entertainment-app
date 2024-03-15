// import React from "react";
import Card from "./card";
import "./home.css"
import datas from "../../data.json";

import img1 from "../../assets/thumbnails/beyond-earth/trending/large.jpg"
import img2 from "../../assets/thumbnails/bottom-gear/trending/large.jpg"
import img3 from "../../assets/thumbnails/undiscovered-cities/trending/large.jpg";
import { SearchBar } from "./searchBar";
import Navbar from "../navbar/navbar";

import CardRec from "./cardRec";
const Home = () => {

    return (
        <div className="home">
            <Navbar/>
            <div>
            <SearchBar title='Trending' enableSearch={true} />
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
            <SearchBar title='Recommended' enableSearch={false} />
            <div className="recommended">
                {datas.slice(2).map((dataItem, index) => (
                    <CardRec
                        key={index}
                        title={dataItem.title}
                        img={dataItem.thumbnail.regular.medium}
                        year={dataItem.year}
                        rating={dataItem.rating}
                        isTrending={dataItem.isTrending}
                    />
                ))}
            </div>
        </div>
        </div>
    )
}
export default Home;