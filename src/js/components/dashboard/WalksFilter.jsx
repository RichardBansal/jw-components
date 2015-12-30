import React from 'react';

//TODO: Default filter to All or 'Select One'
const Filter = ({name, selected, addFilter, data}) => (
  <li>
    <label>{name}</label>
    <select value={selected} onChange={e => addFilter(e.target.value)}>
      <option value="">All</option>
      {Object.keys(data).map(k => <option value={k}>{data[k]}</option>)}
    </select>
  </li>
);

const CityWalksFilter = ({filters, addFilter, activeFilters, removeFilter}) => {

  const Filters = Object.keys(filters).map(
    key => <Filter key={key} {...filters[key]} addFilter={addFilter}/>
  );

  const ActiveFilters = activeFilters.map(f => <button onClick={e => removeFilter(f, e.target.value)}>{f}</button>);

  return (
    <div>
      {ActiveFilters}
      {Filters}
    </div>
  );
};

CityWalksFilter.PropTypes = {
  //TODO:
};

export default CityWalksFilter;