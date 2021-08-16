import React from 'react-dom';
import PropTypes from 'prop-types';
import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({ book, handleRemove }) => {
  const { title, category } = book;
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
  const author = 'Suzanne Collins';
  const deleteRow = (e) => {
    e.preventDefault();
    handleRemove(e, book);
  };

  return (
    <div className="book-card">
      <div>
        <div className="category">{capitalizedCategory}</div>
        <div className="title">{capitalizedTitle}</div>
        <div className="author">{author}</div>
        <div className="book-interact">
          <div>
            <button type="button">Comments</button>
          </div>
          <div>
            <button type="button" onClick={deleteRow}>Remove</button>
          </div>
          <div>
            <button type="button">Edit</button>
          </div>
        </div>
      </div>
      <div className="book-data">
        <div className="stats">
          <div style={{ width: 100, height: 100, margin: 10 }}>
            <CircularProgressbar
              value={70}
              styles={buildStyles({
                strokeLinecap: 'butt',
                textSize: '16px',
                pathTransitionDuration: 0.5,
                pathColor: `rgba(62, 152, 199, ${70 / 100})`,
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
            />
          </div>
          <div className="percent">
            64%
            <div className="completed">Completed</div>
          </div>
        </div>
        <div>
          <div className="current-chapter">
            CURRENT CHAPTER
          </div>
          <div>
            TEST
          </div>
          <button type="button" className="update">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
Book.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleRemove: PropTypes.func.isRequired,
};
