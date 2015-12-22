import React from 'react';

import ImpactHeader from './ImpactHeader.jsx';

//Import specific components like <TotalWalks/>
import SingleBarGraph from './SingleBarGraph.jsx';
import MultipleBarsGraph from './MultipleBarsGraph.jsx';
import ScatterGraph from './ScatterGraph.jsx';
import GlobalGraph from './GlobalGraph.jsx';
import './view.less';

//TODO: Naming of impact is not clear, you need a singular and pluaral (so impacts)
//TODO: or just use stats DO THIS BEFORE PR

import {impact, citiesData} from './ImpactStaticData';

const selectRegion = (regionName = 'Global') => {
  return impact.find(d => d.regionName === regionName);
};

const getImpact = (props) => ({
  impact: props.impact || impact,
  citiesData: props.citiesData || citiesData, //TODO: Need to figure this out, stubbed data for now
  currentRegion: selectRegion()
});

export default class Impact extends React.Component {
  constructor(props,...args){
    super(props,...args);
    this.state = getImpact(props);
  }

  //TODO: RegionGraph.jsx (vs. City Graph ?!) - do GlobalGraph first and figure out these two after

  render() {
    return(<div>
      <ImpactHeader {...this.state} changeRegion={regionSelected => this.setState({currentRegion:selectRegion(regionSelected)})}/>

      <SingleBarGraph {...this.state.currentRegion}/>
      <MultipleBarsGraph {...this.state}/>
      <ScatterGraph {...this.state}/>
      <GlobalGraph {...this.state}/>
    </div>)
  }
}

Impact.propTypes = {
  dashboard: React.PropTypes.object.isRequired,
};