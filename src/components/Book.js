import React from 'react-dom';
const Book = (book) => (
  <div>
    <tr>
      <td>
        {book.id}
      </td>
      <td>
        {book.title}
      </td>
      <td>
        {book.category}
      </td>
    </tr>
  </div>
);

export default Book;
