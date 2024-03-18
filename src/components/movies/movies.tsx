import Navbar from '../navbar/navbar'
import CardRec from '../home/cardRec'
import { SearchBar } from '../home/searchBar'
import datas from "../../data.json";
import "../series/tvseries.css"
import { ChangeEvent, useState } from 'react';
export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => { setSearchQuery(e.target.value) }

  return (
    <div className='flexing'>
      <Navbar />
      <div>
        <SearchBar title='Movies' enableSearch={true} onchange={handleSearch}/>
        <div className='cards'>
          {
            datas.filter(dataItem => {
              return searchQuery === '' ? dataItem : dataItem.title.toLowerCase().includes(searchQuery);
          })
            .map(item => {
              if (item.category === 'Movie') {
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
