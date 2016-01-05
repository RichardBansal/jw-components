import React from 'react';
import ReactDOM from 'react-dom';
import DashboardStore from './DashboardStore';

const MyBlogPosts = () => {
  const posts = DashboardStore.getMyBlogPosts().map((p, i) => (
    <li key={i}>
      <a href={p.url}>
        <h2>{p.name}</h2>
      </a>
    </li>
  ));

  return(<ul>{posts}</ul>);
};

export default MyBlogPosts;