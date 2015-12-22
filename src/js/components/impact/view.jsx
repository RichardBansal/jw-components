import React from 'react';
import Impact from './Impact.jsx';

let _impact;

JanesWalk.event.on('impact.receive', function(impact){
  _impact = impact;

  React.render(
    <Impact impact={impact}/>,
    document.getElementById('janeswalk-dashboard')
  );
});