import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

const BooksList = () => {
  const newState = useSelector((state) => state.booksReducer.books);
  console.log(newState);
  return (
    <table className="orange size">
      <thead>
        <tr>
          <td>ID</td>
          <td>Title</td>
          <td>Category</td>
        </tr>
      </thead>
      <tbody>
        {newState.map((item) => (
          <Book book={item} key={item} />
        ))}
      </tbody>
    </table>
  );
};
// const mapStateToProps = (state) => ({ books: state.booksReducer.books });
export default BooksList;

// BooksList.propTypes = {
//   books: PropTypes.oneOfType([PropTypes.array]).isRequired,
// };
