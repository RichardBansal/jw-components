import React from 'react';

import DashboardStore from './DashboardStore';
import Walks from './Walks.jsx';

//TODO: Walk common component found in <Itinerary/> and <WalkPage/>, Refactor to a single component or mixin (Post-PR)

const MyWalks = () => (
  (<section>
    <Walks walks={DashboardStore.getMyWalks()}/>
  </section>)
)

MyWalks.PropTypes = {
  //TODO:
};

export default MyWalks;