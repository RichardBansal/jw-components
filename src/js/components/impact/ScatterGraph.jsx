import React from 'react';
import ReactDOM from 'react-dom';

export default class ScatterGraph extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
  }

  componentDidMount() {
    google.load('visualization', '1', {packages:['corechart']});

    let cities = this.props.citiesData;
    debugger;

    let drawScatter = () => {
      let generateCitiesData = cities => cities.map(c => [c.walks, c.participants]);

      let cityData = generateCitiesData(cities);
      debugger;
      cityData.unshift(['Walks','Participants']);

      debugger;

      const data = google.visualization.arrayToDataTable(cityData);

      const chart = new google.visualization.ScatterChart(
        ReactDOM.findDOMNode(this)
      );

      var options = {
        width: 1200,
        height: 600,
        legend: 'none',
        enableInteractivity: false,
        hAxis: {
          title: 'Walks',
          baselineColor: '#fff',
          gridlineColor: '#fff',
          textStyle: {
            color: "#FFFFFF",
          },
        },
        vAxis: {
          title: 'Participants',
          textStyle: {
            color: "#FFFFFF",
          },
          baselineColor: '#fff',
          gridlineColor: '#fff',
        },
        colors: ['#a8a8a8'],
        pointSize: 20,
      };

      chart.draw(data, options);
    };

    google.setOnLoadCallback(drawScatter);
  }

  render(){
    return (<div className="scatterGraph"/>)
  }
}