import React from 'react';
import ReactDOM from 'react-dom';

import DashboardHeader from './DashboardHeader.jsx';
import DashboardMenu from './DashboardMenu.jsx';
import CityWalks from './CityWalks.jsx';
//import WalkLeaders from './WalkLeaders.jsx';


import {dashboard} from './DashboardStaticData';
import './view.less';

const getDashboard = (props) => ({
  dashboard: props.dashboard || dashboard,
});

export default class Dashboard extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = getDashboard(props);
  }
  //<DashboardHeader {...this.state.dashboard}/>
  //<DashboardMenu {...this.state.dashboard}/>
  render() {
    return (<div>
      <CityWalks {...this.state.dashboard}/>
    </div>);
  }
}

Dashboard.PropTypes = {
  //TODO:
};