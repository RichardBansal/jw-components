import React from 'react';
import ReactDOM from 'react-dom';

import DashboardStore from './DashboardStore';

import DashboardHeader from './DashboardHeader.jsx';
import DashboardMenu from './DashboardMenu.jsx';
import DashboardSummary from './DashboardSummary.jsx';

import './view.less';
//TODO: PR updates to remove backticks and include t functions: the piece we'll need first is a `gettext` update that can extract `t` functions from `jsx` code

const Dashboard = () => (
  <section className="dashboard">
    <DashboardHeader {...DashboardStore.getCityData()} {...DashboardStore.getLatestPost()}/>
    <DashboardMenu style="dashboard-page" {...DashboardStore.getCityData()} {...DashboardStore.getMenuItems()}/>
    <DashboardSummary {...DashboardStore.getRegionSummary()}/>
  </section>
);

export default Dashboard;