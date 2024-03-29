import React from "react";
import "./card.css"
import movies from "../../assets/icon-category-movie.svg";
import series from "../../assets/icon-category-tv.svg"
import play from "../../assets/icon-play.svg";
// import imgcard from "../../assets/thumbnails/bottom-gear/trending/large.jpg";
interface TypeProps{
    title: string,
    img: string | undefined,
    year: number,
    category: string,
    isBookmarked: boolean,
    rating: string,
    isTrending: boolean,
    onBookmarkToggle?: ()=>void;
}

const Card: React.FC<TypeProps>= ({title,img,year,rating, isBookmarked,category}:TypeProps) => {
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
                    {isBookmarked?<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z" fill="#FFF"/></svg>:<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" stroke-width="1.5" fill="none"/></svg>}
                    </div>
                </div>
                <div className="desc">
                    <div className="desc-cont">
                        <p>{year}</p><span>.</span>
                        <img src={category==='Movie'? movies:series} alt='series icon' />
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