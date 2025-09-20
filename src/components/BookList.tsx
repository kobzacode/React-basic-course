import type { FC } from "react";
import type { IBook } from "../App";
import { BookCard } from "./BookCard";

interface Props {
  books: IBook[];
  ratings: string[];
}

export const BookList: FC<Props> = ({ books, ratings }) => {
  return (
    <div style={{ marginTop: "16px" }}>
      <h1>Book List</h1>
      <div>
        {books.map((book) => (
          <BookCard
            key={book.title}
            book={book}
            ratings={ratings}
          />
        ))}
      </div>
    </div>
  );
};
