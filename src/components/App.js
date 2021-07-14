import BooksList from '../containers/BooksList';
import BooksForm from './BooksForm';
import '../App.css';

const App = () => (
  <div className="App">
    <BooksForm />
    <BooksList />
  </div>
);

export default App;
