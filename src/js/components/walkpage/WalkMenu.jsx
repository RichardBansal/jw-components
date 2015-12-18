import React from 'react';
import { dateFormatted } from '../itinerary/ItineraryUtils';


//TODO: Duplicate of Itinerary <Walk/> and WalkPage <WalkHeader/>, refactor/combine components into factory

const WalkMenu = ({walk}) => {

  let {checkboxes, title, map, time, team} = walk;
  const walkLeader = team.find(member => member.role === 'walk-leader');
  const tags = Object.keys(checkboxes).filter(item => item.includes("theme-civic"));

  const tagsRef = {
    "theme-civic-goodneighbour":"Community",
    "theme-civic-international":"International Issues",
    "theme-civic-religion":"Religion",
  };

  const menuItems = ['About This Walk', 'Walk Route', 'Accessibility', 'Taking Public Transit', 'How to find us', 'About the Walk Team'];

  return (
    <section id="walkMenu">
      <header id="walkHeader">
        <h5>{title}</h5>
        <h6>Led By {walkLeader['name-first']} {walkLeader['name-last']} </h6>
        <h6>{dateFormatted(time.slots[0][0])}</h6>
        <h6>Meeting at {map.markers[0].title}</h6>
      </header>
      <section id="menu">
        <ul>
         {menuItems.map(item => <li><a href={`#${item}`}>{item}</a></li>)}
        </ul>
      </section>
      <section id="tags">
        {tags.map(tag => <span>#{tagsRef[tag]}, </span>)}
      </section>
    </section>
  );
};

WalkMenu.propTypes = {
  walk: React.PropTypes.object.isRequired,
};

export default WalkMenu;