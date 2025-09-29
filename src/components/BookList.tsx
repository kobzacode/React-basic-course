import type { FC } from "react";
import type { IBook } from "../App";
import { BookCard } from "./BookCard";

interface Props {
  books: IBook[];
  ratings: number[];
  onUpdate: (id: number, updatedFields: Partial<IBook>) => void;
  onAddComment: (id: number, comment: string) => void;
}

export const BookList: FC<Props> = ({ books, ratings, onUpdate, onAddComment }) => {
  return (
    <div style={{ marginTop: "16px" }}>
      <h1 style={{ marginBottom: 0 }}>Book List</h1>
      <div>
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            ratings={ratings}
            onUpdate={onUpdate}
            onAddComment={onAddComment}
          />
        ))}
      </div>
    </div>
  );
};
