import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import NavBar from './NavBar';
import '../App.css';

const App = () => (
  <div className="App">
    <NavBar />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
