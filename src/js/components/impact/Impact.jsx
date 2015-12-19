import React from 'react';

import ImpactHeader from './ImpactHeader.jsx';
import './view.less';

export default class Impact extends React.Component {
  constructor(props,...args){
    super(props,...args);
  }

  render(){
    return(<div>
      <ImpactHeader {...this.state}/>
    </div>)
  }
}

Impact.propTypes = {
  dashboard: React.PropTypes.object.isRequired,
};