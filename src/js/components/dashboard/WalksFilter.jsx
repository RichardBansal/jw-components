import React from 'react';
import DashboardStore from './DashboardStore';
import DashboardActions from './DashboardActions';

//TODO*: Refactoring Components, WalksFilter is not doing much

const Filter = ({name, selected, toggleFilter, removeFilter, data, key, activeFilters, inActiveFilters}) => {

  let ActiveFilters;
  let InActiveFilters;

  if (Object.keys(activeFilters).includes(name)) {
    ActiveFilters = activeFilters[name].map((f, i) =>
      <button key={i} className="activeFilter">
        <span onClick={e => toggleFilter(f, name, e.target.value)}> {f} </span>
        <span className="buttonClose" onClick={e => removeFilter(f, name, e.target.value)}> × </span>
      </button>
    );
  }

  if (Object.keys(inActiveFilters).includes(name)) {
    InActiveFilters = inActiveFilters[name].map((f, i) =>
      <button key={i} className="inActiveFilter">
        <span onClick={e => toggleFilter(f, name, e.target.value)}> {f} </span>
        <span className="buttonClose" onClick={e => removeFilter(f, name, e.target.value)}> × </span>
      </button>
    );
  }

  return (
    <li>    
      <label>{name}</label>
      <select value="Select One" onChange={e => toggleFilter(e.target.value, name)}>
        <option value="">Select One</option>
        {Object.keys(data).map((k,i) => <option key={i} value={k}>{data[k]}</option>)}
      </select>
      <section>
      {ActiveFilters}
      </section>
      <section>
      {InActiveFilters}
      </section>
    </li>
  );
};

const WalksFilter = ({filters, activeFilters, inActiveFilters, removeFilter, toggleFilter}) => {

  debugger;

  const Filters = Object.keys(filters).map(
    key => <Filter key={key} {...filters[key]} toggleFilter={toggleFilter} removeFilter={removeFilter} activeFilters={activeFilters} inActiveFilters={inActiveFilters}/>
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
