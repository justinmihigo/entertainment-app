import React from "react";
import "./cardRec.css"
import movies from "../../assets/icon-category-movie.svg";
import series from "../../assets/icon-category-tv.svg";
import play from "../../assets/icon-play.svg";
// import imgcard from "../../assets/thumbnails/bottom-gear/trending/large.jpg";
interface TypeProps {
    id?: any,
    title: string,
    img: string | undefined,
    year: number,
    category: string,
    isBookmarked: boolean,
    rating: string,
    isTrending: boolean,
    onBookmarkToggle?: (title:any)=>void|undefined;
}

const CardRec: React.FC<TypeProps> = ({  title, img, year, rating, isBookmarked, category, onBookmarkToggle }: TypeProps) => {
    // const [bookmarkStatus, setBoomarkStatus] = useState<boolean>(() => {
    //     // Retrieve isBookmarked value from local storage
    //     const storedData = localStorage.getItem('allDatas');
    //     if (storedData) {
    //         const parsedData = JSON.parse(storedData);
    //         const item = parsedData.find((item: any) => item.title === title);
    //         return item.isBookmarked
    //     }
    //     return isBookmarked;
    // });
    // const handleClick = () => {
    //     const updatedData = data.map(item => {
    //         if (item.title === title) { // Use === for comparison
    //             return { ...item, isBookmarked: !bookmarkStatus };
    //         }
    //         return item;
    //     });
    //     const updatedItem = updatedData.find(item => item.title === title);
    //     if (updatedItem) {
    //         setBoomarkStatus(updatedItem.isBookmarked);
    //         localStorage.setItem('updatedData', JSON.stringify(updatedData));
    //     }
    // };
    
    // const handleClick = () => {
    //     const updatedData = data
    //     .map(item => {
    //         if (item.title ===title) {
    //             return { ...item, isBookmarked: !bookmarkStatus }
    //         }
    //         return item;
    //     });
    //     setBoomarkStatus(!bookmarkStatus);
    //     localStorage.setItem('updatedData', JSON.stringify(updatedData));
    //     const fromLs = JSON.parse(localStorage.getItem('updatedDdata')!);
    //     if (fromLs) {
    //         var bookmarkLs = fromLs[id].isBookmarked;
    //         console.log(bookmarkLs);
    //         setBoomarkStatus(bookmarkLs);
    //         console.log(isBookmarked); 
    //     }
        

    // }
    // const [bookmarkStatus, setBoomarkStatus] = useState(isBookmarked);

    // useEffect(() => {
    //     fetch(`http://localhost:3001/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ isBookmarked: bookmarkStatus }),
    //     });
    // }, [bookmarkStatus, id]);

    // const handleClick = () => {
    //     setBoomarkStatus(!bookmarkStatus);
    // };

    return (
        <div>
            {/* <input type='text' placeholder="Search for movies or TV series" className="search"/>
            <h2>Trending</h2> */}
            <div className="movieCards">
                <div className="play">
                    <div className="playBtn"><img src={play} /> Play</div>
                    <div className="imgCont">
                        <img src={img} alt='movie' />
                    </div>
                    <div className="bookmark-icons" onClick={()=>onBookmarkToggle!(title)}>
                        {isBookmarked ? <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z" fill="#FFF" /></svg> : <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" stroke-width="1.5" fill="none" /></svg>}
                    </div>
                </div>
            </div>
            <div className="descs">
                <div className="desc-cont">
                    <p>{year} &nbsp;.</p>
                    <img src={category === 'Movie' ? movies : series} alt='series icon' />
                    <p>&nbsp; . {rating}</p>
                </div>
                <div className="titles">{title}</div>
            </div>
        </div>
    )
}
export default CardRec;