import React from 'react';
import { connect } from 'react-redux';
import BasicTable from './BookTable';

const BookList = () => (
  <div>
    <BasicTable />
  </div>
);
const mapStateToProps = (state) => ({ id: state.id, title: state.title, category: state.category });
export default connect(mapStateToProps, null)(BookList);
