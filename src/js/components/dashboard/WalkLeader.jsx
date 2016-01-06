import React from 'react';

import { dateFormatted } from './../itinerary/ItineraryUtils';

//TODO: Common component from <Itinerary/> <Walk/>, List component should be generic with configuration specified (maybe a mixing or factory) (Post-PR)

//TODO: Need to show volunteers as well - so static data generated is not correct (confirm with json data provided before proceeding with any changes (PR)

const Walk = ({firstName, lastName, walks, email}) => {

  const Walks = walks.map(w => {
    const fullYear = (new Date(w.time.slots[0][0]*1000)).getFullYear();
    return (<li>Walk Leader: {w.title} ({fullYear})</li>)
  });

  return (
    <li>
      <div className="walkLeader">
        <h3>{`${firstName} ${lastName}`} <span className="walkLeaderEmail">{email}</span></h3>
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