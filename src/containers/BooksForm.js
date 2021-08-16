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
      <h1 className="form-title">ADD NEW BOOK</h1>
      <div className="container-form">
        <form className="form" onSubmit={handleSubmit}>
          <div className="union">
            <div>
              <label htmlFor="title">
                <div>
                  <div>
                    <input type="text" name="title" id="title" onChange={handleInputChange} placeholder="First Name" required="true" />
                  </div>
                </div>
              </label>
            </div>
            <div>
              <div>
                <select name="category" id="category" onChange={handleCategoryChange}>
                  {CATEGORIES.map((item) => (
                    <option value={item} key={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <Button primary type="submit" className="ui button">ADD BOOK</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default BooksForm;
