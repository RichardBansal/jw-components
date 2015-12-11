import React from 'react';

let _walk;


JanesWalks.event.on('walk.receive', function(walk){
  _walk = walk;

  React.render(
    <WalkPage walk={walk}/>,
    document.getElementById('janeswalk-walk-page');
  );
});