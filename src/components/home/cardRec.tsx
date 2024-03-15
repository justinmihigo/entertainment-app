import React from "react";
import "./cardRec.css"
import bookmark from "../../assets/icon-bookmark-empty.svg";
import series from "../../assets/icon-category-movie.svg";
// import imgcard from "../../assets/thumbnails/bottom-gear/trending/large.jpg";
interface TypeProps{
    title: string;
    img: string | undefined;
    year: number;
    rating: string;
    isTrending: boolean;
}

const CardRec: React.FC<TypeProps>= ({title,img,year,rating}:TypeProps) => {
    return (
        <div>
            {/* <input type='text' placeholder="Search for movies or TV series" className="search"/>
            <h2>Trending</h2> */}
            <div className="movieCards">
                <div>
                    <div className="imgCont">
                        <img src={img} alt='movie' />
                    </div>
                    <div className="bookmark-icons">
                        <img src={bookmark} alt='bookmark icon' />
                    </div>
                </div>
            </div>
            <div className="descs">
                    <div className="desc-cont">
                        <p>{year} &nbsp;.</p>
                        <img src={series} alt='series icon' />
                        <p>&nbsp; . {rating}</p>
                    </div>
                    <div className="titles">{title}</div>
                </div>
        </div>
    )
}
export default CardRec;