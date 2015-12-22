import React from 'react';
import ReactDOM from 'react-dom';
import Itinerary from './itinerary/Itinerary.jsx';
import WalkPage from './walkpage/WalkPage.jsx';
import Impact from './impact/Impact.jsx';

//<Itinerary/>
//<WalkPage/>
//<Impact/>
export default class App extends React.Component {
  render(){
    return (<div>
      <Impact/>
    </div>);
  }
};