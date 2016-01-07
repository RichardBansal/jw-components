import React from 'react';
import DashboardStore from './DashboardStore';
import DashboardActions from './DashboardActions';

//TODO*: Refactoring Components, WalksFilter is not doing much
//TODO*: Avoid list from changing (you have two lists showing up) so fix this (so it looks less like a puzzle)
//TODO*: Filter by Theme 'name' should match displaying name (this is confusing)

const Filter = ({name, selected, toggleFilter, removeFilter, data, key, activeFilters}) => {

  let ActiveFilters;

  if (Object.keys(activeFilters).includes(name)) {
    ActiveFilters = activeFilters[name].map(({filter, state}, i) =>
      <button key={i} className={state ? "activeFilter" : "inActiveFilter"}>
        <span onClick={e => toggleFilter(filter, name, e.target.value)}> {filter} </span>
        <span onClick={e => removeFilter(filter, name, e.target.value)}> x </span>
      </button>
    );
  }

  return (
    <li>
      <section>
      {ActiveFilters}
      </section>
      <label>{name}</label>
      <select value="Select One" onChange={e => toggleFilter(e.target.value, name)}>
        <option value="">Select One</option>
        {Object.keys(data).map((k,i) => <option key={i} value={k}>{data[k]}</option>)}
      </select>
    </li>
  );
};

const WalksFilter = ({filters, activeFilters, removeFilter, toggleFilter}) => {

  debugger;

  const Filters = Object.keys(filters).map(
    key => <Filter key={key} {...filters[key]} toggleFilter={toggleFilter} removeFilter={removeFilter} activeFilters={activeFilters}/>
  );

  return (
    <div className="walksFilter">
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
