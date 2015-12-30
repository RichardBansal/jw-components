import React from 'react';
import DashboardHeader from './DashboardHeader.jsx';
import DashboardStore from './DashboardStore';
import DashboardMenu from './DashboardMenu.jsx';

const DashboardTemplate = ( props ) => {
  debugger;
  return (
    <div>
      <DashboardHeader {...DashboardStore.getCityData()} {...DashboardStore.getLatestPost()}/>
      {props.location.pathname === '/' ? <DashboardMenu style="dashboard-page" {...DashboardStore.getCityData()}/> : <DashboardMenu style="navigation-bar" {...DashboardStore.getCityData()}/>}
      {props.children}
    </div>
  );
};

//<DashboardHeader {...props}/>

export default DashboardTemplate;