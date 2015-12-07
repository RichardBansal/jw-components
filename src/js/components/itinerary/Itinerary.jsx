import React from 'react';
import ItineraryStore from './ItineraryStore';
import ItineraryActions from './ItineraryActions';

import Walk from './Walk.jsx';
import Header from './Header.jsx';
import AddWalkToListDialog from './AddWalkToListDialog.jsx';

const getItinerary = () => ({
    walks: ItineraryStore.getItinerary().walks,
    title: ItineraryStore.getItinerary().title,
    description: ItineraryStore.getItinerary().description,
    lists: ItineraryStore.getAllLists(),
    activeWalk: ItineraryStore.getWalkSelected(),
});

export default class Itinerary extends React.Component {
  getDefaultProps() {
    return {
      itinerary: null,
    };
  }

  propTypes() {
    return {
      itinerary: React.PropTypes.array,
    };
  }

  constructor(...args) {
    super(...args);
    this.state = this.props.itinerary || getItinerary();
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    ItineraryStore.addChangeListener( this._onChange );
  }

  componentWillUnmount() {
    ItineraryStore.removeChangeListener( this._onChange );
  }

  _onChange() {
    this.setState(getItinerary);
  }

  render() {
    const {walks, title, description} = this.state;
    debugger;
    const ItineraryWalks = walks.map(({map, id, title, time}) =>
        <Walk
            title={title}
            meeting={map.markers[0].title}
            start={time.slots[0][0]}
            id={id}
            remove={ItineraryActions.remove}
            walkSelected={ItineraryActions.walkSelected}
        />
    );

    return (
      <dialog open id="itinerary">
        <AddWalkToListDialog {...this.state} {...ItineraryActions}/>
        <div className="itinerary">
          <section>
            <Header {...this.state} {...ItineraryActions}/>
          </section>
          <ul>
            {ItineraryWalks}
          </ul>
        </div>
      </dialog>
    );
  }
}
