import React from 'react-dom';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemove }) => {
  const { id, title, category } = book;
  const deleteRow = (e) => {
    e.preventDefault();
    handleRemove(e, book);
  };

  return (
    <tr>
      <td>
        {id}
      </td>
      <td>
        {title}
      </td>
      <td>
        {category}
      </td>
      <td>
        <button type="button" onClick={deleteRow}>delete</button>
      </td>
    </tr>
  );
};

export default Book;
Book.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleRemove: PropTypes.func.isRequired,
};
