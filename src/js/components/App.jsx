import React from 'react';
import ReactDOM from 'react-dom';
import Itinerary from './itinerary/Itinerary.jsx';
import WalkPage from './walkpage/WalkPage.jsx';

export default class App extends React.Component {
  render(){
    return (<div>
      <Itinerary/>
      <WalkPage/>
    </div>);
  }
};