import React from 'react';
import Impact from './Impact.jsx';

let _dashboard;

JanesWalk.event.on('dashboard.receive', function(dashboard){
  _dashboard = dashboard;

  React.render(
    <Impact dashboard={dashboard}/>
    document.getElementById('janeswalk-dashboard')
  );
});