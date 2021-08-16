import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../store/actions/index';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = () => {
  const fState = useSelector((state) => state.filterReducer.category.category);
  let bookState = [];
  if (fState === '') {
    bookState = useSelector((state) => state.booksReducer);
  } else {
    bookState = useSelector((state) => state.booksReducer).filter((i) => i.category === fState);
  }
  const dispatch = useDispatch();
  const handleRemove = (e, book) => {
    e.preventDefault();
    dispatch(allActions.bookActions.removeBook(book));
  };
  const handleFilterChange = (filter) => {
    dispatch(allActions.filterActions.filterBooks(filter));
  };
  return (
    <div>
      <div className="nav-bar">
        <div className="store-links">
          <div className="store-branding">Bookstore CMS</div>
          <div className="books">BOOKS</div>
          <div>
            <CategoryFilter handleFilterChange={handleFilterChange} />
          </div>
        </div>
        <div className="oval">
          <FontAwesomeIcon icon={faUser} className="log-in" />
        </div>
      </div>
      <div className="book-list">
        {bookState.map((item) => (
          <Book book={item} key={item.title} handleRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
};
export default BooksList;
