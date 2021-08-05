import React from 'react-dom';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemove }) => {
  const { id, title, category } = book;
  const capitalize = (target) => {
    const str = target;
    const arr = str.split(' ');
    for (let i = 0; i < arr.length; i += 1) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(' ');
    return str2;
  };
  const capitalizedTitle = capitalize(title);
  const capitalizedCategory = capitalize(category);

  const deleteRow = (e) => {
    e.preventDefault();
    handleRemove(e, book);
  };

  return (
    <div className="book-card">
      <div>{id}</div>
      <div className="title">{capitalizedTitle}</div>
      <div className="category">{capitalizedCategory}</div>
      <button type="button" onClick={deleteRow}>delete</button>
    </div>
  );
};

export default Book;
Book.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleRemove: PropTypes.func.isRequired,
};
