import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <table className="orange size">
    <thead>
      <tr>
        <td>ID</td>
        <td>Title</td>
        <td>Category</td>
      </tr>
    </thead>
    <tbody>
      {books.map((item) => (
        <Book book={item} key={item} />
      ))}
    </tbody>
  </table>
);
const mapStateToProps = (state) => ({ books: state.booksReducer.books });
export default connect(mapStateToProps, null)(BooksList);

BooksList.propTypes = {
  books: PropTypes.oneOfType([PropTypes.array]).isRequired,
};
