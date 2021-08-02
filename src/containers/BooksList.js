import React from 'react';
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
      <table className="orange size">
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Category</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {bookState.map((item) => (
            <Book book={item} key={item.title} handleRemove={handleRemove} />
          ))}
        </tbody>
      </table>
      <CategoryFilter handleFilterChange={handleFilterChange} />
    </div>
  );
};
export default BooksList;
