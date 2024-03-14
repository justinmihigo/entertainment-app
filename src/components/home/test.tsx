import React from 'react'
// import datas from "../../data.json";
interface Thumbnail {
    small: string;
    large: string;
  }
  
  interface DataItem {
    title: string;
    thumbnail: {
      trending?: Thumbnail;
      regular: {
        small: string;
        medium: string;
        large: string;
      };
    };
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
  }
  
  interface TestProps {
    data: DataItem[];
  }
  
  export const Test: React.FC<TestProps> = ({ data }) => {
    return (
      <div>
        {data.map((item, index) => (
          <img key={index} src={item.thumbnail.regular.small}/>
        ))}
      </div>
    );
  };