import { BookList } from '@components/BookList'
import './App.css'

export interface IBook {
  title: string;
  author: string;
  year: number;
  genre: string;
  isRead: boolean;
  showTitle: (title: string) => void;
  rateBook: (title: string, rating: string) => void;
}

const showTitle = (title: string) => {
  alert(`Book title: "${title}"`);
};

const rateBook = (title: string, rating: string) => {
  alert(`You rated "${title}" ${rating}/5`);
};

function App() {
  const books: IBook[] = [
    { title: "Dune", author: "Frank Herbert", year: 1965, genre: "Sci-Fi", isRead: true, showTitle, rateBook  },
    { title: "1984", author: "George Orwell", year: 1949, genre: "Dystopia", isRead: false, showTitle, rateBook },
    { title: "Harry Potter and the Philosopher's Stone",  author: "J.K. Rowling", year: 1997, genre: "Fantasy", isRead: false, showTitle, rateBook },
  ];

  const ratings = ["1", "2", "3", "4", "5"];

  return (
   <div>
    <BookList books={books} ratings={ratings} />
   </div>
  )
}

export default App
