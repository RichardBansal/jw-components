import React from 'react';
import ReactDOM from 'react-dom';
import DashboardStore from './DashboardStore';

const MyBlogPosts = () => {
  const posts = DashboardStore.getMyBlogPosts().map(p => (
    <li>
      <a href={p.url}>
        <h2>{p.name}</h2>
      </a>
    </li>
  ));

  return(<ul className="dashboardMyBlogPosts">{posts}</ul>);
};

MyBlogPosts.PropTypes = {
  //TODO:
};

export default MyBlogPosts;