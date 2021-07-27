import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

const BooksList = () => {
  const newState = useSelector((state) => state.booksReducer);
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
          <Book book={item} key={item.title} />
        ))}
      </tbody>
    </table>
  );
};
export default BooksList;
