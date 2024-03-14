
// types.ts

// Define the structure for thumbnail
interface Thumbnail {
  small: string;
  large: string;
}

// Define the structure for each item in the data array
interface DataItem {
  title: string;
  thumbnail: {
    trending: Thumbnail;
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

// Define the structure for the entire data array
type Data = DataItem[];

// export { Data, DataItem };
