import React from 'react';
import ReactDOM from 'react-dom';

export default class SingleBarGraph extends React.Component {
  constructor(props,...args) {
    super(props,...args);
  }

  componentDidMount() {
    //TODO: Maybe generalize this based on each component
    google.load('visualization', '1', {packages: ['corechart', 'bar']});

    let {walks} = this.props;

    let drawBasic = () => {
      //TODO: Function specified by the Parent Component as a fx
      let generateWalkData = walks => walks.map(w => [w.year.toString(),w.walks,'color: #e5e4e2',w.walks.toString()]);

      let walkData = generateWalkData(walks);

      //TODO: Format specified by the Parent Component
      walkData.unshift(['Year', 'Walks', { role: 'style' }, { role: 'annotation' }]);
      walkData[walkData.length-1][2] = '#808080';

      //[
      //  ['Year', 'Walks', { role: 'style' }, { role: 'annotation' } ],
      //  ['2011', 511, 'color: #e5e4e2', '511' ],
      //  ['2012', 615, 'color: #e5e4e2', '615' ],
      //  ['2013', 843, 'color: #e5e4e2', '843' ],
      //  ['2014', 1029, 'color: #e5e4e2', '1029' ],
      //  ['2015', 1314, 'color: #e5e4e2', '1314' ],
      //  ['2016', 1654, 'color: #808080', '1654' ]
      //]
      const data = google.visualization.arrayToDataTable(walkData);

      const options = {
        width: 500,
        height: 600,
        bar: {groupWidth: "80%"},
        legend: { position: "none" },
        vAxis: {
          textStyle: {
            color: "#FFFFFF",
          },
          baselineColor: '#fff',
          gridlineColor: '#fff',
        },
        hAxis: {
          baselineColor: '#fff',
          gridlineColor: '#fff',
        },
        annotations:{
          alwaysOutside: true
        },
        enableInteractivity: false,
      };

      const chart = new google.visualization.ColumnChart(
        ReactDOM.findDOMNode(this)
      );

      chart.draw(data, options);
    };

    google.setOnLoadCallback(drawBasic);

  }

  render() {
    return (<div className="singleBarGraph"/>);
  }

}

SingleBarGraph.PropTypes = {
  //TODO:
};