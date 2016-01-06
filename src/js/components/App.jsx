import React from 'react';
import ReactDOM from 'react-dom';
import Itinerary from './itinerary/Itinerary.jsx';
import WalkPage from './walkpage/WalkPage.jsx';
import Impact from './impact/Impact.jsx';
import Dashboard from './dashboard/Dashboard.jsx';

//<Itinerary/>
//<WalkPage/>
//<Impact/>
//<Dashboard/>
export default class App extends React.Component {
  render(){
    return (<div>
      <Dashboard />
    </div>);
  }
};
