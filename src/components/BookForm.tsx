import { useState, type ChangeEvent, type FC, type FormEvent, type ReactNode } from "react";
import type { IBook } from "../App";

export type BookFormData = Pick<IBook, 'title' | 'author' | 'year' | 'genre'>;

interface BookFormProps {
  buttons: ReactNode;
  defaultValues?: Partial<BookFormData>; 
  onSubmit: (formData: BookFormData) => void;
}

export const BookForm: FC<BookFormProps> = ({ buttons, defaultValues, onSubmit }) => {
  const [form, setForm] = useState({
    title: defaultValues?.title ?? "",
    author: defaultValues?.author ?? "",
    year: defaultValues?.year?.toString() ?? "",
    genre: defaultValues?.genre ?? "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.title) return;

    onSubmit({
      title: form.title.trim(),
      author: form.author.trim(),
      year: Number(form.year),
      genre: form.genre.trim(),
    });

    setTimeout(() => {
      setForm({ title: "", author: "", year: "", genre: "" });
    }, 0);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "32px" }}>
      <div className="inputWrapper">
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />
      </div>

      <div className="inputWrapper">
        <label htmlFor="author">Author:</label>
        <input
          id="author"
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
        />
      </div>

      <div className="inputWrapper">
        <label htmlFor="year">Year:</label>
        <input
          id="year"
          name="year"
          placeholder="Year"
          type="number"
          value={form.year}
          onChange={handleChange}
        />
      </div>

      <div className="inputWrapper">
        <label htmlFor="genre">Genre:</label>
        <input
          id="genre"
          name="genre"
          placeholder="Genre"
          value={form.genre}
          onChange={handleChange}
        />
      </div>

      {buttons}
    </form>
  );
}
