import React from 'react-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import allActions from '../store/actions/index';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const { id, title, category } = book;
  const deleteRow = () => {
    dispatch(allActions.bookActions.removeBook(book));
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
};
