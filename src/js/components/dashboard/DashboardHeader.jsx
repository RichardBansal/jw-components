import React from 'react';

const DashboardHeader = ({city}) => {
  let {name, organizer} = city;
  return (
    <header>
      <h1>Dashboard Header</h1>
      <h3>{name.toUpperCase()} Organizer Dashboard</h3>
      <h4>Hi, {`${organizer.firstName}!`} </h4>
    </header>
  );
};

//TODO: Message Board, Post Something, See All Posts

DashboardHeader.PropTypes = {
  //TODO:
};

export default DashboardHeader;