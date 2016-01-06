import React from 'react';
import DashboardHeader from './DashboardHeader.jsx';
import DashboardStore from './DashboardStore';
import DashboardMenu from './DashboardMenu.jsx';

//TODO: Pass in as properties, rather than loading directly from the store, if it makes sense.
const DashboardTemplate = ( props ) => {
  return (
    <section className="dashboard">
      <DashboardHeader {...DashboardStore.getCityData()} {...DashboardStore.getLatestPost()}/>
      <DashboardMenu style="dashboard-page" {...props} {...DashboardStore.getCityData()} {...DashboardStore.getMenuItems()}/>
      {props.children}
    </section>
  );
};

export default DashboardTemplate;