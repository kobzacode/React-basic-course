import { useState } from "react";
import { BookList } from "@components/BookList";
import { BookForm, type BookFormData } from "@components/BookForm";
import { Button } from "@components/Button";
import "./App.css";

export interface IBook {
  id: number;
  title: string;
  author: string;
  year: number;
  genre: string;
  isRead: boolean;
  rate: number;
  comments: string[];
}

const ratings = [1, 2, 3, 4, 5];

function App() {
  const [books, setBooks] = useState<IBook[]>([
    { id: 1, title: "Dune", author: "Frank Herbert", year: 1965, genre: "Sci-Fi", isRead: true, rate: 4, comments: [] },
    { id: 2, title: "1984", author: "George Orwell", year: 1949, genre: "Dystopia", isRead: false, rate: 3, comments: [] },
    { id: 3, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997, genre: "Fantasy", isRead: false, rate: 5, comments: [] },
  ]);

  const addBook = (formData: BookFormData) => {
    const newBook = {
      id: Date.now(),
      title: formData.title,
      author: formData.author,
      year: formData.year,
      genre: formData.genre,
      isRead: false,
      rate: 3,
      comments: [],
    };
    setBooks((prev) => [...prev, newBook]);
  };

  const updateBook = (id: number, updatedFields: Partial<IBook>) => {
    setBooks((prev) =>
      prev.map((book) => (book.id === id ? { ...book, ...updatedFields } : book))
    );
  };

  const addComment = (id: number, comment: string) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, comments: [...book.comments, comment] } : book
      )
    );
  };

  return (
    <div>
      <BookForm
        onSubmit={addBook}
        buttons={<Button type="submit" label="Add Book" style={{ marginTop: "16px" }} />}
      />

      <BookList
        books={books}
        ratings={ratings}
        onUpdate={updateBook}
        onAddComment={addComment}
      />
    </div>
  );
}

export default App
