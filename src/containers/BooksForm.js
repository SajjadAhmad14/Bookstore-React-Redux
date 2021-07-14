const BooksForm = () => {
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <form>
        <input type="text" name="title" id="title" />
        <select name="categories" id="categorie">
          <option value={CATEGORIES[0]}>{CATEGORIES[0]}</option>
          <option value={CATEGORIES[1]}>{CATEGORIES[1]}</option>
          <option value={CATEGORIES[2]}>{CATEGORIES[2]}</option>
          <option value={CATEGORIES[3]}>{CATEGORIES[3]}</option>
          <option value={CATEGORIES[4]}>{CATEGORIES[4]}</option>
          <option value={CATEGORIES[5]}>{CATEGORIES[5]}</option>
          <option value={CATEGORIES[6]}>{CATEGORIES[6]}</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};
export default BooksForm;
