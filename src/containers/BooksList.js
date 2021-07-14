import React from 'react';
import { connect } from 'react-redux';
import BasicTable from '../components/BookTable';

const BooksList = () => (
  <div>
    <BasicTable />
  </div>
);
const mapStateToProps = (state) => ({
  id: state.id,
  title: state.title,
  category: state.category,
});
export default connect(mapStateToProps, null)(BooksList);
