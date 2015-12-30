import React from 'react';

import Walks from './Walks.jsx';
import DashboardStore from './DashboardStore';

//TODO: Walk common component found in <Itinerary/> and <WalkPage/>, Refactor to a single component or mixin

const CityWalks = () => (
  <div>
    <Walks walks={DashboardStore.getCityWalks().walks}/>
  </div>
);

CityWalks.PropTypes = {
  //TODO:
};

export default CityWalks;