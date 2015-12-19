import React from 'react';

const DropDown = ({list,cb}) => (
  <ul>
    {list.map((item,i) => (<li key={i} onClick={(ev)=>{cb(item,ev.target.value)}}>{item}</li>))}
  </ul>
);

DropDown.propTypes = {
  list: React.PropTypes.array.isRequired,
  cb: React.PropTypes.func.isRequired
};

export default DropDown;