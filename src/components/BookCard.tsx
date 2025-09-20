import type { FC } from "react";
import type { IBook } from "../App";
import { Select } from "./Select";

interface Props {
  book: IBook;
  ratings: string[];
}

export const BookCard: FC<Props> = ({ book, ratings }) => {
  const { title, author, year, genre, isRead, showTitle, rateBook  } = book;

  const handleRateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    rateBook(title, e.target.value);
  };

  return (
    <div
      style={{
        borderBottom: "1px solid #ddd",
        padding: "8px 0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3
        style={{ cursor: "pointer" }}
        onClick={() => showTitle(title)}
      >
        {title}
      </h3>
      <span>{author}</span>
      <span>{year} | {genre}</span>
      {isRead && <span style={{ color: "#4CAF50" }}>Read</span>}

      <label style={{ marginTop: "4px" }}>
        Rating:
        <Select
          options={ratings}
          defaultValue="3"
          onChange={handleRateChange}
          style={{ padding: "4px 8px", marginLeft: "8px" }}
        />
      </label>
    </div>
  );
};
