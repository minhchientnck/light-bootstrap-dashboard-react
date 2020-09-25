import React, { Component } from "react";
import DataTable from 'react-data-table-component';
import PropTypes from "prop-types";

class ReactDataTable extends Component {
  render() {
   return (
    <DataTable 
      {...this.props}
    />
   );
  }
}

ReactDataTable.propTypes = {
  title: PropTypes.string,
  data: PropTypes.shape([]),
  columns: PropTypes.shape([]),
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

ReactDataTable.defaultProps = {
  title: null,
  data: [],
  columns: [],
  className: '',
  style: null,
}

export default ReactDataTable;
