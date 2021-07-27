import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../store/actions/index';

const BooksForm = () => {
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [book, setBook] = useState({
    id: 1,
    title: '',
    category: '',
  });
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
    const title = e.target.value;
    setBook(
      {
        ...book,
        id,
        title,
      },
    );
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    const category = e.target.value;
    setBook(
      {
        ...book,
        category,
      },
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(allActions.bookActions.addBook(book));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleInputChange}
        />
        <select
          name="categories"
          id="categories"
          onChange={handleCategoryChange}
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
    </div>
  );
};
export default BooksForm;
