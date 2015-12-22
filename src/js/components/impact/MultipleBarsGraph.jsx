import React from 'react';
import ReactDOM from 'react-dom';

export default class MultipleBarsGraph extends React.Component {
  constructor(props,...args) {
    super(props,...args);
  }

  componentDidMount() {
    google.load('visualization', '1', {packages: ['corechart', 'bar']});
    //debugger;
    const locations = this.props.impact.slice(0,4); //TODO: graph four items for location, figure out how to decide on these

    //go through each to generate the data
    //let walkData = [];
    let walkYears = [];
    //locations[0].forEach((d,i)=> );
    //get the years, iterate through each location and graph the specific year data

    //TODO: Stubbing data, unsure of the format
    locations.forEach(d => d.walks.forEach(w => {if(walkYears.indexOf(w.year) === -1) walkYears.push(w.year)})); //grab all the years

    //debugger;
    let walkData = walkYears.map(y => {
      //debugger;
      let data = locations.map(d => (d.walks.find(w => w.year === y).walks));
      data.unshift(y.toString());
      return data;
    });

    //debugger; //walkData is being returned as arrays with walks data, need to add styling
    //TODO: Figure out how to reduce re-work when working with actual data 'project.receive'

    let drawBasic = () => {
      const data = new google.visualization.DataTable();

      data.addColumn('string', 'Year');

      locations.forEach((l)=>{
        data.addColumn('number',l.regionName);
      });

      data.addRows(walkData);

      //data.addColumn('number', 'Toronto');
      ////data.addColumn({type:'string', role:'style'});
      ////data.addColumn({type:'string', role:'annotation'}); //TODO: Unable to rotate annotations
      //data.addColumn('number', 'Canada');
      ////data.addColumn({type:'string', role:'style'});
      ////data.addColumn({type:'string', role:'annotation'});
      //data.addColumn('number', 'USA');
      ////data.addColumn({type:'string', role:'style'});
      ////data.addColumn({type:'string', role:'annotation'});
      //data.addColumn('number', 'Global');
      ////data.addColumn({type:'string', role:'style'});

      //const cityStyle = 'color: #a8a8a8; stroke-color: #FFFFFF; stroke-width: 4;';
      //const topCountry1Style = 'color: #c5c5c5; stroke-color: #FFFFFF; stroke-width: 4;';
      //const topCountry2Style = 'color: #737373; stroke-color: #FFFFFF; stroke-width: 4;';
      //const globalStyle = 'color: #bfbfbf; stroke-color: #FFFFFF; stroke-width: 4;';

      //data.addRows([
      //  ['2011', 178, cityStyle, 222,topCountry1Style, 64,topCountry2Style,47, globalStyle],
      //  ['2012', 138, cityStyle, 291,topCountry1Style, 72,topCountry2Style, 114, globalStyle],
      //  ['2013', 150, cityStyle, 357,topCountry1Style, 166,topCountry2Style, 170, globalStyle],
      //  ['2014', 156, cityStyle,468,topCountry1Style, 206,topCountry2Style, 199, globalStyle],
      //  ['2015', 183, cityStyle, 552,topCountry1Style, 332, topCountry2Style, 247, globalStyle],
      //]);

      //data.addRows([
      //  ['2011', 178, 222, 64,47],
      //  ['2012', 138, 291, 72, 114],
      //  ['2013', 150, 357, 166, 170],
      //  ['2014', 156,468, 206, 199],
      //  ['2015', 183, 552, 332,  247],
      //]);

      const options = {
        width: 500,
        height: 700,
        bar: {groupWidth: "90%"},
        //legend: { position: "none" },
        legend: { position: 'top', maxLines: 2 }, //TODO: Create Custom Legend instead
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
        annotations: {
          direction:-1,
          slantedText:true,
          slantedTextAngle:90 // here you can even use 180
        },
        enableInteractivity: true,
        colors: ['#a8a8a8','#c5c5c5','#737373','#bfbfbf'],
      };

      var chart = new google.visualization.ColumnChart(
        ReactDOM.findDOMNode(this));

      chart.draw(data, options);
    };

    google.setOnLoadCallback(drawBasic);

  }

  render() {
    return (<div className="multipleBarsGraph"/>);
  }

}

MultipleBarsGraph.PropTypes = {
  //TODO:
};