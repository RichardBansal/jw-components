import React from 'react';

const DashboardMenu = ({city}) => {
  const {name} = city;
  const menuItems = [`${name} Walks`,'My Walks','Walk Leaders and Volunteers','My Blog Posts','Impact Report Builder'];

  const menu = menuItems.map((item,i) => (<li key={i}>{item}</li>));

  return (
    <section className="dashboardMenu">
      <h1>Dashboard Menu</h1>
      <ul>{menu}</ul>
    </section>
  );
};

DashboardMenu.PropTypes = {
  //TODO:
};

export default DashboardMenu;