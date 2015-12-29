import React from 'react';

import ItineraryActions from '../itinerary/ItineraryActions';
import ItineraryStore from '../itinerary/ItineraryStore';

import WalkHeader from './WalkHeader.jsx';
import WalkDescription from './WalkDescription.jsx';
import WalkRoute from './WalkRoute.jsx';
import WalkAccessibility from './WalkAccessibility.jsx';
import WalkPublicTransit from './WalkPublicTransit.jsx';
import WalkStart from './WalkStart.jsx';
import WalkTeam from './WalkTeam.jsx';
import WalkMenu from './WalkMenu.jsx';
import WalkMap from './WalkMap.jsx';

import {walk} from './WalkStaticData';
import './view.less';

const walkId = walk.walk.id;
const itineraryListId = ItineraryStore.getItineraryList().id; //for stubbed data, assumed first list is Itinerary
const favoriteListId = ItineraryStore.getFavouriteList().id; //for stubbed data, assumed second list is fav

//TODO: Conditionals (? and ||) in getWalk are for stubbed data

const getWalk = (props) => ({
  walk: props.walk || walk.walk,
  page: props.page || walk.page,
  id: props.walk ? props.walk.id : walkId,
  existsInItinerary : ItineraryStore.existsInList(itineraryListId, props.walk ? props.walk.id : walkId),
  existsInFavourites : ItineraryStore.existsInList(favoriteListId, props.walk ? props.walk.id : walkId),
});

export default class WalkPage extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);

    this.state = getWalk(props);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    ItineraryStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    ItineraryStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getWalk);
  }

  render() {
    return (
    <div className="walkPage">

      <WalkHeader
        {...this.state}
        {...ItineraryActions}
        itineraryListId={itineraryListId}
        favoriteListId={favoriteListId}
      />

      <WalkMenu {...this.state}/>

      <WalkDescription {...this.state.walk}/>

      <WalkMap {...this.state.walk}/>

      <WalkRoute {...this.state.walk}/>

      <WalkAccessibility {...this.state.walk}/>

      <WalkPublicTransit {...this.state.walk}/>

      //TODO: add a WalkParking section

      <WalkStart {...this.state.walk}/>

      <WalkTeam {...this.state.walk}/>
      
    
    </div>);
  }
};

WalkPage.propsType = {
 page: React.PropTypes.object.isRequired,
 walk: React.PropTypes.object.isRequired,
};