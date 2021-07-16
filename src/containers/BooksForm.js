import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions/index';

const BooksForm = () => {
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [book, setBook] = useState({
    id: 1,
    title: '',
    category: '',
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...book, id: Math.floor(Math.random() * (100000 - 1 + 1)) + 1 }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => { setBook({ ...book, title: e.target.value }); }}
        />
        <select
          name="categories"
          id="categories"
          onChange={(e) => { setBook({ ...book, category: e.target.value }); }}
        >
          <option value={CATEGORIES[0]}>{CATEGORIES[0]}</option>
          <option value={CATEGORIES[1]}>{CATEGORIES[1]}</option>
          <option value={CATEGORIES[2]}>{CATEGORIES[2]}</option>
          <option value={CATEGORIES[3]}>{CATEGORIES[3]}</option>
          <option value={CATEGORIES[4]}>{CATEGORIES[4]}</option>
          <option value={CATEGORIES[5]}>{CATEGORIES[5]}</option>
          <option value={CATEGORIES[6]}>{CATEGORIES[6]}</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
      <h1>{book.title}</h1>
      <h1>{book.category}</h1>
    </div>
  );
};
export default BooksForm;
