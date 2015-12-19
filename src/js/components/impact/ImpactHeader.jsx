import React from 'react';

import DropDown from './DropDown.jsx';

//TODO: Generic Drop Down Component with insertable stlyes
//TODO: Just create for now with no dropdown, just clickable items
//<DropDown list={dropdown} cb={console.log}/>
//{dropdown.map((item,i) => (<li key={i} onClick={(ev)=>{cb(ev.target.value)}}>{item}</li>))}
//{dropdown.map((item,i) => (<li key={i} onClick={(ev)=>{console.log(item,ev.target.value)}}>{item}</li>))}

const ImpactHeader = ({dropdown}) => (
  <div>
    <h2>Jane's Walk By The Numbers</h2>
    <DropDown list={dropdown} cb={(e)=>{console.log(e)}}/>
  </div>
);

ImpactHeader.propTypes = {
  //dropdown: React.PropTypes.array.isRequired,
};

//TODO: Stubbed
ImpactHeader.defaultProps = {
  dropdown: ['Global Festival','Calgary'],
};

export default ImpactHeader;