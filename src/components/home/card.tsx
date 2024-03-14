import React from "react";
import "./card.css"
import bookmark from "../../assets/icon-bookmark-empty.svg";
import series from "../../assets/icon-category-movie.svg";
import imgcard from "../../assets/thumbnails/bottom-gear/trending/large.jpg";
const Card:React.FC=()=>{
    return(
        <div>
            <div>
                <div className="imgCont">
                <img src={imgcard} alt='movie'/>
                </div>
                <img src={bookmark} alt='bookmark icon'/>
            </div>
            <div className="desc">
                <div className="desc-cont">
                <p>2019 &nbsp;.</p>
                <img src={series} alt='series icon'/>
                <p>&nbsp; . PG</p>
                </div>
                <div>The Great Lands</div>
            </div>
        </div>
    )
}
export default Card;