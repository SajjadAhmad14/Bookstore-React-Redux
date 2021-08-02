import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import allActions from '../store/actions/index';
import categories from '../components/Categories';

const BooksForm = () => {
  const CATEGORIES = categories();
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
    document.querySelector('form').reset();
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
                <input type="text" name="title" id="title" onChange={handleInputChange} placeholder="First Name" required="true" />
              </div>
            </div>
          </label>
        </div>
        <div className="two fields">
          <div className="field">
            <select className="ui fluid dropdown" name="categories" id="categories" onChange={handleCategoryChange}>
              {CATEGORIES.map((item) => (
                <option value={item} key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        <Button primary type="submit" className="ui button">ADD BOOK</Button>
      </form>
    </div>
  );
};
export default BooksForm;
