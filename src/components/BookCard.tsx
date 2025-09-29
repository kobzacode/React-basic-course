import { type FC, useState } from "react";
import { Select } from "./Select";
import { Button } from "./Button";
import type { IBook } from "../App";
import { BookForm, type BookFormData } from "./BookForm";

interface Props {
  book: IBook;
  ratings: number[];
  onUpdate: (id: number, updatedFields: Partial<IBook>) => void;
  onAddComment: (id: number, comment: string) => void;
}

export const BookCard: FC<Props> = ({ book, ratings, onUpdate, onAddComment }) => {
  const { id, title, author, year, genre, isRead, rate, comments } = book;

  const [isEditMode, setIsEditMode] = useState(false)
  const [editData, setEditData] = useState(book);
  const [newComment, setNewComment] = useState("");

  const handleSave = (formData: BookFormData) => {
    onUpdate(id, formData);
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setEditData(book)
    setIsEditMode(false)
  }

  return (
    <div style={{ borderBottom: "1px solid #ddd", padding: "8px 0" }}>
      {isEditMode ? (
        <>
          <h2>{title}</h2>
          <BookForm
            defaultValues={editData}
            onSubmit={handleSave} 
            buttons={
              <>
                <Button type="submit" label="Save" style={{ marginTop: "16px" }} />
                <Button label="Cancel" onClick={handleCancel} />
              </>
            }
          />
        </>
      ) : (
        <div
          style={{
            padding: "8px 0",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2>{title}</h2>
          <span style={{ fontSize: "20px" }}>{author}</span>
          <span style={{ fontSize: "20px" }}>{year} | {genre}</span>

          <Button
            label="Edit"
            onClick={() => {
              setEditData(book);
              setIsEditMode(true);
            }}
            style={{ marginTop: "16px", marginBottom: "16px" }}
          />

          <div className="checkbox">
            <input
              id="read"
              type="checkbox"
              checked={isRead}
              onChange={(e) => onUpdate(id, { isRead: e.target.checked })}
            />
            <label htmlFor="read">Read</label>
          </div>
        </div>
      )}

      <div style={{ marginTop: "8px" }}>
        <h4>Comments</h4>
        <ul>
          {comments.map((c, i) => (
            <li key={i} style={{ fontSize: "0.9em" }}>{c}</li>
          ))}
        </ul>
        <div className="inputWrapper">
          <label htmlFor="comment">Comment:</label>
          <input
            id="comment"
            placeholder="Add comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && newComment.trim()) {
                onAddComment(id, newComment);
                setNewComment("");
              }
            }}
          />
        </div>
      </div>

      <div style={{ marginTop: "16px", marginBottom: "16px" }} className="inputWrapper">
        <Select
          label="Rating:"
          htmlFor="rate"
          options={ratings}
          value={rate}
          onChange={(e) => onUpdate(id, { rate: Number(e.target.value) })}
        />
      </div>
    </div>
  );
};
