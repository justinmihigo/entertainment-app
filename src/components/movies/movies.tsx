import Navbar from '../navbar/navbar'
import CardRec from '../home/cardRec'
import { SearchBar } from '../home/searchBar'
import datas from "../../data.json";
import "../series/tvseries.css"
export const Movies = () => {
  return (
    <div className='flexing'>
        <Navbar/>
        <div>
        <SearchBar title='Movies' enableSearch={true}/>
        <div className='cards'>
        {
            datas.map(item=> {
                if (item.category==='Movie'){
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
