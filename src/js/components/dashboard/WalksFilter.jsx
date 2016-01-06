import React from 'react';
import DashboardStore from './DashboardStore';
import DashboardActions from './DashboardActions';

//TODO*: Add filters above the specific filter (instead of all of them being on top)

const Filter = ({name, selected, toggleFilter, data, key}) => (
  <li>
    <label>{name}</label>
    <select value="Select One" onChange={e => toggleFilter(e.target.value)}>
      <option value="">Select One</option>
      {Object.keys(data).map((k,i) => <option key={i} value={k}>{data[k]}</option>)}
    </select>
  </li>
);

const WalksFilter = ({filters, activeFilters, inActiveFilters, removeFilter, toggleFilter}) => {

  const Filters = Object.keys(filters).map(
    key => <Filter key={key} {...filters[key]} toggleFilter={toggleFilter}/>
  );

  const ActiveFilters = activeFilters.map((f, i) => <button key={i} className="activeFilter" onClick={e => toggleFilter(f, e.target.value)}>{f}</button>);
  const InActiveFilters = inActiveFilters.map((f, i) =>
    <button key={i} className="inActiveFilter">
      <span onClick={e => toggleFilter(f, e.target.value)}> {f} </span>
      <span onClick={e => removeFilter(f, e.target.value)}> x </span>
    </button>
  );

  return (
    <div className="walksFilter">
      {ActiveFilters}
      {InActiveFilters}
      {Filters}
    </div>
  );
};

WalksFilter.PropTypes = {
  filters: React.PropTypes.array.isRequired,
  activeFilters: React.PropTypes.array.isRequired,
  removeFilter: React.PropTypes.func.isRequired,
  toggleFilter: React.PropTypes.func.isRequired,
};

Filter.PropTypes = {
  name: React.PropTypes.string.isRequired,
  toggleFilter: React.PropTypes.func.isRequired,
  data: React.PropTypes.object.isRequired,
};

export default WalksFilter;
