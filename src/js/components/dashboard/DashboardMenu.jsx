import React from 'react';
import {Link} from 'react-router';


const DashboardMenu = ({style, menuItems}) => {

  const menu = menuItems.map((item,i) => (<li key={i}><i class="icon-caret-right"></i><Link to={item.link}>{item.display}</Link></li>));

  return (
    <section className={`dashboardMenu ${style}`}>
      <ul>{menu}</ul>
    </section>
  );
};

DashboardMenu.PropTypes = {
  name: React.PropTypes.string.isRequired,
  style: React.PropTypes.string.isRequired,
};

export default DashboardMenu;