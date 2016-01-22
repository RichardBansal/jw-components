import React from 'react';
import ReactDOM from 'react-dom';
import Itinerary from './itinerary/Itinerary.jsx';
import WalkPage from './walkpage/WalkPage.jsx';
import Impact from './impact/Impact.jsx';
import Dashboard from './dashboard/Dashboard.jsx';
//import staticData from './walk_filters/WalkFiltersStaticData.js';
//import WalkFilter from './walk_filters/WalkFilter.jsx';

//debugger;
//<WalkFilter walks={walks} filters={props.filters} location={_location} />,
//<Itinerary/>
//<WalkPage/>
//<Impact/>
//<Dashboard/>
export default class App extends React.Component {
  render(){
    return (<div>
      <Dashboard/>
    </div>);
  }
};
