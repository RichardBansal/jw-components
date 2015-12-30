import React from 'react';

import CityWalksMenu from './CityWalksMenu.jsx';
import CityWalksFilter from './CityWalksFilters.jsx';
import WalksMap from './WalksMap.jsx';
import DashboardStore from './DashboardStore';

//TODO: This is an almost exact duplicate of CityWalks, except the state and 'My Walks' text, refactor to remove duplication

//TODO: Walk common component found in <Itinerary/> and <WalkPage/>, Refactor to a single component or mixin

//TODO: REFACTOR Specify the walks, so props.activeWalks or something that you want to pass in
//the rest can stay the same

import Walk from './Walk.jsx';

export default class CityWalks extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      activeFilters: props.activeFilters || [],
      activeWalks: DashboardStore.getMyWalks() || [],
      currentView: 'list',
    };
  }

  //TODO: Hide Past Walks | Exports Spreadsheet
  //TODO: Correct: This is doing an OR operation, not an AND operation
  filterWalks() {
    const {activeFilters, activeWalks} = this.state;
    const {walks} = DashboardStore.getMyWalks();

    if (!activeFilters.length) this.setState({activeWalks: walks});
    else {
      const filteredWalks = walks.filter(walk => {

        return activeFilters.reduce((p, c)=> {

          if (p) return p;

          //TODO: Assumed wards is a single string
          const ward = walk.wards ? walk.wards.indexOf(c) !== -1 : false;
          const theme = walk.checkboxes ? Object.keys(walk.checkboxes).indexOf('theme-' + c) !== -1 : false;
          const accessibility = walk.checkboxes ? Object.keys(walk.checkboxes).indexOf('accessible-' + c) !== -1 : false;

          if ( ward || theme || accessibility) return true;
          return false;
        }, false);
      });

      this.setState({activeWalks: filteredWalks});
    }
  }

  render() {
    let {activeFilters, activeWalks, currentView} = this.state;

    const Walks = activeWalks.map(({map, id, title, time, team}) =>
      <Walk
        title={title}
        meeting={map.markers[0].title}
        start={time.slots[0][0]}
        id={id}
        key={id}
        team={team}
      />
    );

    //TODO: ensure filters are unique (for display and perf purposes), bring out addFilter and remove filter out for better code clarity
    //NEXT: CityWalksMenu (google maps)
    //TODO: Remove Past Walks and Export Spreadsheet

    return (<div className="cityWalks">
      <button onClick={()=>this.setState({currentView: 'list'})}>List</button>
      <button onClick={()=>this.setState({currentView: 'map'})}>Map</button>
      <button>Hide Past Walks</button>
      <button>Export Spreadsheet</button>
      <CityWalksFilter
        {...this.props}
        {...this.state}
        {...DashboardStore.getCityWalks()} //TODO: to grab filters
        addFilter={(e)=>{activeFilters.push(e); this.setState({activeFilters}); this.filterWalks()}}
        removeFilter={(e)=>{debugger; activeFilters.splice(activeFilters.findIndex(f => f === e), 1); this.setState({activeFilters}); this.filterWalks()}}
      />
      {currentView === 'list' ? Walks : <WalksMap {...this.state} {...this.props} {...DashboardStore.getCityData()}/>}
    </div>);
  }
}

CityWalks.PropTypes = {
  //TODO:
};