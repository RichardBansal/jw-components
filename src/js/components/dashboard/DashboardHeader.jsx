import React from 'react';

//TODO: Dynamic based on city
//TODO: <a href="mailto:kate.watanabe@janeswalk.org?subject=I%20would%20like%20to%20submit%20a%20story%20to%20the%20Toronto%2C%20ON%20blog&amp;body=Please%20begin%20writing%20your%20story%20below%3A%0A%0A%0A" target="_blank" class="btn btn-primary btn-small">Share my story</a>
//TODO: Missing some elements to add to blog post

const DashboardHeader = ({cityOrganizer, name, post}) => {
  return (
    <header>
      <h3>{name.toUpperCase()} Organizer Dashboard</h3>
      <h4>Hi, {`${cityOrganizer.firstName}!`} </h4>
      <section>
        <h4>Latest Blog Post</h4>
        <a href={post.url}>{post.name}</a>
      </section>
      <a href={`mailto:${cityOrganizer.email}`}><button>Share My Story</button></a>
      <a href={`http://janeswalk.org/canada/${name}/${name}-blog/`}><button>See All Posts</button></a>
    </header>
  );
};

//TODO: Message Board, Post Something, See All Posts

DashboardHeader.PropTypes = {
  //TODO:
};

export default DashboardHeader;