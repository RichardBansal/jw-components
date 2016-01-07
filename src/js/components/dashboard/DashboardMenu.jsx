import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

import ImpactReport from './ImpactReport.jsx';
import DashboardSummary from './DashboardSummary.jsx';
import DashboardResources from './DashboardResources.jsx';
import MyBlogPosts from './MyBlogPosts.jsx';
import Walks from './Walks.jsx';
import WalkLeaders from './WalkLeaders.jsx';

import DashboardActions from './DashboardActions';
import DashboardStore from './DashboardStore';

const getMenu = () => ({
  menuItems: DashboardStore.getMenuItems(),
});

//TODO*: Refactoring Components, and Sticky Active Menu Item
//TODO*: Show number of each menu item

const getComponent = ({componentName}) => {
  let component = null;
  if (componentName === 'Walks') component =  Walks;
  if (componentName === 'WalkLeaders') component =  WalkLeaders;
  if (componentName === 'MyBlogPosts') component =  MyBlogPosts;
  if (componentName === 'DashboardResources') component =  DashboardResources;
  return component;
};

export default class DashboardMenu extends React.Component {
  constructor(props, ...args){
    super(props, ...args);
    this.state = getMenu();
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    DashboardStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    DashboardStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getMenu);
  }

  render() {
    const {menuItems} = this.state;

    const menu = menuItems.map((item, i) => {
      const Component = item.active ? getComponent(item) : null;
      return (
          <section>
            <li key={i} className={item.active ? 'activeMenuItem' : null } onClick={() => DashboardActions.toggleMenuItems(item.display)}>
              <i className="icon-caret-right"></i>
              {item.display}
            </li>
            {Component ? <Component location={item.link}/> : null }
          </section>);
      }
    );

    const displayResources = menuItems.every(a => a.active === false);

    return (
      <section className="dashboardMenu">
        <ul>{menu}</ul>
        { displayResources ? <DashboardResources/> : null }
      </section>
    );
  }

};

export default DashboardMenu;