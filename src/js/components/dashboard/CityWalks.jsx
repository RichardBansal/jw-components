import React from 'react';

import CityWalksMenu from './CityWalksMenu.jsx';
import CityWalksFilter from './CityWalksFilters.jsx';

//TODO: Walk common component found in <Itinerary/> and <WalkPage/>, Refactor to a single component or mixin
import Walk from './Walk.jsx';

export default class CityWalks extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      //TODO:
    }
  }

  //TODO: Need to pass information

  render() {
    return (<div>
      <h1>CityWalks</h1>
      <CityWalksMenu/>
      <CityWalksFilter/>
      <Walk/>
    </div>);
  }
}

CityWalks.PropTypes = {
  //TODO:
};