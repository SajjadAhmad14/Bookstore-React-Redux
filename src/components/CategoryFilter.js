import { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import PropTypes from 'prop-types';
import categories from './Categories';

const CategoryFilter = ({ handleFilterChange }) => {
  const CATEGGORIES = categories();
  CATEGGORIES.unshift('All');
  const [filter, setFilter] = useState({
    category: '',
  });
  const handleCategory = (e) => {
    e.preventDefault();
    let category = e.target.value;
    if (category === 'All') {
      category = '';
    }
    setFilter({
      ...filter,
      category,
    });
  };
  handleFilterChange(filter);
  return (
    <div className="filter">
      <div className="two fields">
        <div className="field">
          <select className="ui fluid dropdown" name="categories" id="categories" onChange={handleCategory}>
            {CATEGGORIES.map((item) => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
