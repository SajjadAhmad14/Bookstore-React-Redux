import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
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
      <form className="ui form" onSubmit={handleSubmit}>
        <h4 className="ui dividing header">BOOK STORE</h4>
        <div className="field">
          <label htmlFor="title">
            Book Title
            <div className="two fields">
              <div className="field">
                <input type="text" name="title" id="title" onChange={handleInputChange} placeholder="First Name" />
              </div>
            </div>
          </label>
        </div>
        <div className="two fields">
          <div className="field">
            <select className="ui fluid dropdown" name="categories" id="categories" onChange={handleCategoryChange}>
              <option value={CATEGORIES[0]}>{CATEGORIES[0]}</option>
              <option value={CATEGORIES[1]}>{CATEGORIES[1]}</option>
              <option value={CATEGORIES[2]}>{CATEGORIES[2]}</option>
              <option value={CATEGORIES[3]}>{CATEGORIES[3]}</option>
              <option value={CATEGORIES[4]}>{CATEGORIES[4]}</option>
              <option value={CATEGORIES[5]}>{CATEGORIES[5]}</option>
              <option value={CATEGORIES[6]}>{CATEGORIES[6]}</option>
            </select>
          </div>
        </div>
        <button type="submit" className="ui button">ADD BOOK</button>
      </form>
    </div>
  );
};
export default BooksForm;
