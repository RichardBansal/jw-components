import React from 'react';
import DashboardStore from './DashboardStore';
import DashboardActions from './DashboardActions';

//TODO*: Show previously added filters as grayed out
//TODO*: Add class active for any place a button is clicked on (and remove when not clicked)
//TODO*: Add filters above the specific filter (instead of all of them being on top)

const Filter = ({name, selected, addFilter, data, key}) => (
  <li>
    <label>{name}</label>
    <select value="Select One" onChange={e => addFilter(e.target.value)}>
      <option value="">Select One</option>
      {Object.keys(data).map((k,i) => <option key={i} value={k}>{data[k]}</option>)}
    </select>
  </li>
);

const WalksFilter = ({filters, activeFilters, removeFilter, addFilter}) => {

  const Filters = Object.keys(filters).map(
    key => <Filter key={key} {...filters[key]} addFilter={addFilter}/>
  );

  const ActiveFilters = activeFilters.map(f => <button onClick={e => removeFilter(f, e.target.value)}>{f}</button>);

  return (
    <div className="walksFilter">
      {ActiveFilters}
      {Filters}
    </div>
  );
};

WalksFilter.PropTypes = {
  filters: React.PropTypes.array.isRequired,
  activeFilters: React.PropTypes.array.isRequired,
  removeFilter: React.PropTypes.func.isRequired,
  addFilter: React.PropTypes.func.isRequired,
};

Filter.PropTypes = {
  name: React.PropTypes.string.isRequired,
  addFilter: React.PropTypes.func.isRequired,
  data: React.PropTypes.object.isRequired,
};

export default WalksFilter;
