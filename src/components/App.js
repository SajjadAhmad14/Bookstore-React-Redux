import Book from './Book';
import BookList from './BookList';
import BooksForm from './BooksForm';
import '../App.css';

const App = () => (
  <div className="App">
    <Book />
    <BooksForm />
    <BookList />
  </div>
);

export default App;
