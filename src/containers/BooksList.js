import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../store/actions/index';
import Book from '../components/Book';

const BooksList = () => {
  const newState = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const handleRemove = (e, book) => {
    e.preventDefault();
    dispatch(allActions.bookActions.removeBook(book));
  };
  return (
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
        {newState.map((item) => (
          <Book book={item} key={item.title} handleRemove={handleRemove} />
        ))}
      </tbody>
    </table>
  );
};
export default BooksList;
