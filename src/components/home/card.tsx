import React from "react";
import "./card.css"
import bookmark from "../../assets/icon-bookmark-empty.svg";
import series from "../../assets/icon-category-movie.svg";
import play from "../../assets/icon-play.svg";
// import imgcard from "../../assets/thumbnails/bottom-gear/trending/large.jpg";
interface TypeProps{
    title: string;
    img: string | undefined;
    year: number;
    rating: string;
    isTrending: boolean;
}

const Card: React.FC<TypeProps>= ({title,img,year,rating}:TypeProps) => {
    return (
        <div>
            {/* <input type='text' placeholder="Search for movies or TV series" className="search"/>
            <h2>Trending</h2> */}
            <div className="movieCard">
                <div className="play">
                    <div className="playBtn"><img src={play}/> Play</div>
                    
                    <div className="imgConts">
                        <img src={img} alt='movie' />
                    </div>
                    <div className="bookmark-icon">
                        <img src={bookmark} alt='bookmark icon' />
                    </div>
                </div>
                <div className="desc">
                    <div className="desc-cont">
                        <p>{year}</p><span>.</span>
                        <img src={series} alt='series icon' />
                        <span>.</span>
                        <p>{rating}</p>
                    </div>
                    <div className="title">{title}</div>
                </div>
            </div>
        </div>
    )
}
export default Card;