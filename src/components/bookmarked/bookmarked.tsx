import Navbar from '../navbar/navbar'
import CardRec from '../home/cardRec'
import { SearchBar } from '../home/searchBar'
// import datas from "../../data.json";
import "../series/tvseries.css"
import { ChangeEvent, useEffect, useState } from 'react';
export const Bookmarked = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [allDatas,setAllDatas] = useState<any>([]);
    useEffect(() =>{
        setAllDatas(JSON.parse(localStorage.getItem('allDatas')!));
    })
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => { setSearchQuery(e.target.value) }
    return (
        <div className='flexing'>
            <Navbar />
            <div>
                <SearchBar title='Bookmarked' enableSearch={true} onchange={handleSearch} />
                <div className='cards'>
                    {
                        allDatas.filter((dataItem: { title: string; }) => {
                            return searchQuery === '' ? dataItem : dataItem.title.toLowerCase().includes(searchQuery);
                        })
                            .map((item: { category: string; isBookmarked: boolean; title: string; thumbnail: { regular: { large: string | undefined; }; }; year: number; rating: string; isTrending: boolean; }) => {
                                if (item.category === 'Movie' && item.isBookmarked) {
                                    return <CardRec
                                        title={item.title}
                                        img={item.thumbnail.regular.large}
                                        year={item.year}
                                        rating={item.rating}
                                        isTrending={item.isTrending}
                                        isBookmarked={item.isBookmarked}
                                        category={item.category}
                                    />

                                }
                            })
                    }
                </div>
                <SearchBar title='TV series' enableSearch={false} />
                <div className='cards'>
                    {
                        allDatas.filter((dataItem: { title: string; }) => {
                            return searchQuery === '' ? dataItem : dataItem.title.toLowerCase().includes(searchQuery);
                        })
                        .map((item: { category: string; isBookmarked: boolean; title: string; thumbnail: { regular: { large: string | undefined; }; }; year: number; rating: string; isTrending: boolean; }) => {
                            if (item.category === 'TV Series' && item.isBookmarked) {
                                return <CardRec
                                    title={item.title}
                                    img={item.thumbnail.regular.large}
                                    year={item.year}
                                    rating={item.rating}
                                    isTrending={item.isTrending}
                                    isBookmarked={item.isBookmarked}
                                    category={item.category}
                                />

                            }
                        })
                    }
                </div>
            </div>

        </div>
    )
}
