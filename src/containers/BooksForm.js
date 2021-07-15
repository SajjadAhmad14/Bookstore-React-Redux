import React, { useState } from 'react';

const BooksForm = () => {
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [book, setBook] = useState({
    id: 0,
    title: '',
    category: 0,
  });

  // const handleChange = (e) => {
  //   const { value } = e.traget.value;
  //   return value;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const categories = document.getElementById('categories');
    const category = categories.value;
    const id = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
    setBook({
      id,
      title,
      category,
    });
  };

  return (
    <div>
      <form>
        <input type="text" name="title" id="title" />
        <select name="categories" id="categories">
          <option value={CATEGORIES[0]}>{CATEGORIES[0]}</option>
          <option value={CATEGORIES[1]}>{CATEGORIES[1]}</option>
          <option value={CATEGORIES[2]}>{CATEGORIES[2]}</option>
          <option value={CATEGORIES[3]}>{CATEGORIES[3]}</option>
          <option value={CATEGORIES[4]}>{CATEGORIES[4]}</option>
          <option value={CATEGORIES[5]}>{CATEGORIES[5]}</option>
          <option value={CATEGORIES[6]}>{CATEGORIES[6]}</option>
        </select>
        <button type="submit" onClick={handleSubmit}>Add Book</button>
      </form>
      <h1>{book.id}</h1>
      <h1>{book.title}</h1>
      <h1>{book.category}</h1>
    </div>
  );
};
export default BooksForm;
