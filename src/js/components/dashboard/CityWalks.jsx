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
  //TODO: Need Dashboard Menu visble (add with React Router)

  //Next: Display walks

  render() {

    const {walks} = this.props.city;


    const Walks = walks.map(({map, id, title, time, team}) =>
      <Walk
        title={title}
        meeting={map.markers[0].title}
        start={time.slots[0][0]}
        id={id}
        key={id}
        team={team}
      />
    );

    //NEXT: CityWalksFilter (need to work with City Data further

    return (<div className="cityWalks">
      <h1>CityWalks</h1>
      <CityWalksMenu {...this.props}/>
      <CityWalksFilter {...this.props}/>
      <ul>
        {Walks}
      </ul>
    </div>);
  }
}

CityWalks.PropTypes = {
  //TODO:
};