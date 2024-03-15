import Navbar from '../navbar/navbar'
import CardRec from '../home/cardRec'
import { SearchBar } from '../home/searchBar'
import datas from "../../data.json";
import "../series/tvseries.css"
export const Bookmarked = () => {
  return (
    <div className='flexing'>
        <Navbar/>
        <div>
        <SearchBar title='Bookmarked' enableSearch={true}/>
        <div className='cards'>
        {
            datas.map(item=> {
                if (item.category==='Movie' && item.isBookmarked){
                return <CardRec 
                title={item.title} 
                img={item.thumbnail.regular.large} 
                year={item.year} 
                rating={item.rating}
                isTrending={item.isTrending}
                />

                }
            })
        }
        </div>
        <SearchBar title='TV series' enableSearch={false}/>
        <div className='cards'>
        {
            datas.map(item=> {
                if (item.category==='TV Series' && item.isBookmarked){
                return <CardRec 
                title={item.title} 
                img={item.thumbnail.regular.large} 
                year={item.year} 
                rating={item.rating}
                isTrending={item.isTrending}
                />

                }
            })
        }
        </div>
        </div>
        
    </div>
  )
}
