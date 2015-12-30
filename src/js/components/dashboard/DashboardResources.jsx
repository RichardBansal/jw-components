import React from 'react';
import DashboardStore from './DashboardStore';

//TODO: Match styles from previous walk dashboard and updated styles (list vs. view): https://github.com/jkoudys/janeswalk-web/commit/892005006ee791fff30a13a774c2653d31612831

const DashboardResources = () => {
  const {cityOrganizers, videoTips, files, featuredWalks} = DashboardStore.getResources();
  return (
    <div>
      <h2>Resources</h2>
      <h3>Connect with Fellow organizers</h3>
      Got a question? Reach out to a fellow City Organizer for help.
      <ul>
        {cityOrganizers.map(co => (<li>{`${co.firstName} from ${co.cityName}: ${co.email}`}</li>))}
      </ul>
      <h3>Walks from around the world</h3>
      Don't know what kind of walk to lead? Here are some fun ones from around the world
      <ul>
        {featuredWalks.map(w => (<li>{`${w.title}`}</li>))}
      </ul>
      <h3>Tips on leading a walk</h3>
      Leading your first or fifth walk? Here are some tips from the Jane's Walk crew?
      <ul>
        {videoTips.map(v => (<li>{`${v}`}</li>))}
      </ul>
      <h3>Files</h3>
      Want help promoting Jane's Walk?
      Use these files to promote Jane's Walk in your city
      <ul>
        {files.map(f => (<li>{`${f.name}`}</li>))}
      </ul>
    </div>
  );
}

DashboardResources.PropTypes = {
  //TODO:
};

export default DashboardResources;