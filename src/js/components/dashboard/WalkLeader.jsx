import React from 'react';

import { dateFormatted } from './../itinerary/ItineraryUtils';

//TODO: Common component from <Itinerary/> <Walk/>, List component should be generic with configuration specified (maybe a mixing or factory)

//TODO: Need to show volunteers as well - so static data generated is not correct (confirm with json data provided before proceeding with any changes

//TODO: Grab Email

const Walk = ({firstName, lastName, walks}) => {

  const Walks = walks.map(w => {
    const fullYear = (new Date(w.time.slots[0][0]*1000)).getFullYear();
    return (<li>Walk Leader: {w.title} ({fullYear})</li>)
  });

  return (
    <li>
      <div className="walk">
        <h3>{`${firstName} ${lastName}`}</h3>
        <h3>email</h3>
        <ul>
          <h4>
            {Walks}
          </h4>
        </ul>
      </div>
    </li>
  );
};

Walk.propTypes = {
//TODO:
};

Walk.defaultProps = {
//TODO:
};

export default Walk;