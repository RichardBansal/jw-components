import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link} from 'react-router';
//import createBrowserHistory from 'history/lib/createBrowserHistory';

import DashboardStore from './DashboardStore';

//TODO: Data for ImpactReport
import DashboardHeader from './DashboardHeader.jsx';
import DashboardMenu from './DashboardMenu.jsx';
import DashboardSummary from './DashboardSummary.jsx';

import './view.less';

const Dashboard = () => (
  <section className="dashboard">
    <DashboardHeader {...DashboardStore.getCityData()} {...DashboardStore.getLatestPost()}/>
    <DashboardMenu style="dashboard-page" {...DashboardStore.getCityData()} {...DashboardStore.getMenuItems()}/>
    <DashboardSummary {...DashboardStore.getRegionSummary()}/>
  </section>
);

export default Dashboard;