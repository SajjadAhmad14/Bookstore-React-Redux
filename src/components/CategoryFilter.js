import { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import categories from '../containers/Categories';
import allActions from '../store/actions/index';

const CategoryFilter = () => {
  const CATEGGORIES = categories();
  CATEGGORIES.unshift('All');
  const [filter, setFilter] = useState({
    category: '',
  });
  const dispatch = useDispatch();
  const handleCategory = (e) => {
    e.preventDefault();
    const category = e.target.value;
    setFilter({
      ...filter,
      category,
    });
  };
  dispatch(allActions.filterActions.filterBooks(filter));
  return (
    <div>
      <div className="two fields">
        <div className="field">
          <select className="ui fluid dropdown" name="categories" id="categories" onChange={handleCategory}>
            {CATEGGORIES.map((item) => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
      <h1>{filter.category}</h1>
    </div>
  );
};

export default CategoryFilter;
