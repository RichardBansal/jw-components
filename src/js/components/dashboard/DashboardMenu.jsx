import React from 'react';
import {Link} from 'react-router';

const DashboardMenu = ({name, style}) => {
  //TODO: Are the menu items based on available links for each CO or common?
  const menuItems = [ { display: `${name} Walks`, link: '/cityWalks'},
    { display:'My Walks', link: '/myWalks'},
    { display:'Walk Leaders and Volunteers', link: '/walkLeaders'},
    { display:'TODO: My Blog Posts', link: ''},
    { display:'TODO: Impact Report Builder', link: ''},
    { display:'Resources', link: 'resources'}
  ];

  const menu = menuItems.map((item,i) => (<li key={i}><Link to={item.link}>{item.display}</Link></li>));

  return (
    <section className={`dashboardMenu ${style}`}>
      <ul>{menu}</ul>
    </section>
  );
};

DashboardMenu.PropTypes = {
  //TODO:
};

export default DashboardMenu;