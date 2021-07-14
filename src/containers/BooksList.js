import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BooksList = ({ books }) => (
  <div>
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Title</td>
          <td>Category</td>
        </tr>
      </thead>
      <tbody>
        {books.map((item) => (
          <tr key={item}>
            <td key={item.id}>{item.id}</td>
            <td key={item.title}>{item.title}</td>
            <td key={item.category}>{item.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
const mapStateToProps = (state) => ({ books: state.booksReducer.books });
export default connect(mapStateToProps, null)(BooksList);

BooksList.propTypes = {
  books: PropTypes.oneOfType([PropTypes.array]).isRequired,
};
