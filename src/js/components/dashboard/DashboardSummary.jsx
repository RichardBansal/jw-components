import React from 'react';

//TODO: Need to find or solidify the data source for impact data - some items not covered (in dashboard or impact static data) for below recap
//TODO: Bring in <SingleBarGraph/>
//TODO: Place all data collections items within the Store, remove reduces from below - also summary is not working, so remove this from here

const DashboardSummary = ({name, walkLeaders, walks, users, impact}) => {
  debugger;
  return (
    <div>
      <h2>Recap</h2>
      <h4>{`${walkLeaders.length} ${name} walk leaders led ${walks.length} walks as a part of Jane's Walk ${(new Date()).getFullYear()} reaching more than ${users.length} participants` }</h4>

      <h4>{`Since ${name} first participated in Jane's Walk in ${impact.walkLeaders[0].year}, ${impact.walkLeaders.reduce((p,c)=>(p.total + c.total),0)} walk leaders have led ${impact.walks.reduce((p,c)=>(p.total + c.total),0)} Jane's Walks`}</h4>
    </div>
  );
};

DashboardSummary.PropTypes = {
  //TODO:
};

export default DashboardSummary;