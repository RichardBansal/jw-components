import React from 'react';
import ReactDOM from 'react-dom';

export default class GlobalGraph extends React.Component {
  constructor(props, ...args){
    super(props,...args)
  }

  componentDidMount() {

    google.load('visualization', '1', {packages: ['geochart']});

    let {impact} = this.props;

    let drawGlobalMap = () => {

      let getWalksForCurrentYear = (place,currentYear) => (
        place.walks.find(item => item.year === currentYear).walks
      );

      let currentYear = (new Date()).getFullYear();
      let generateCountryData = countries => countries.map(c => {
        let walks = getWalksForCurrentYear(c,currentYear)
        return [c.regionName,walks]//,walks/maxWalks];
      });

      let countries = impact.filter(item => item.type === 'Country');

      let maxWalks = countries.reduce((p,c) => {
        return p > getWalksForCurrentYear(c,currentYear) ? p : getWalksForCurrentYear(c,currentYear);
      },0);

      debugger;

      let countryData = generateCountryData(countries);
      countryData.unshift(['Country',   'Walks']); //, 'Area Percentage']);

      const data = google.visualization.arrayToDataTable(countryData);

      const chart = new google.visualization.GeoChart(ReactDOM.findDOMNode(this));

      var options = {
        sizeAxis: { minSize: 20, maxSize: 40 },
        displayMode: 'markers',
        colorAxis: {colors: ['#a8a8a8','#bfbfbf']},
        enableRegionInteractivity: false,
        tooltip: {
          trigger:'none'
        },
        magnifyingGlass: {
          enable: false,
        },
        legend: 'none',
        defaultColor: '#ececec',
      };

      chart.draw(data, options);
    };

    google.setOnLoadCallback(drawGlobalMap);
  }

  render() {
    return (<div className="globalGraph"/>)
  }
}