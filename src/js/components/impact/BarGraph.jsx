import React from 'react';
import ReactDOM from 'react-dom';

//TODO: This file is redundant, created components for different types of bar graphs

export default class BarGraph extends React.Component {
  constructor(props,...args) {
    super(props,...args);
    //TODO: Need some sort of bar graph data
  }

  componentDidMount() {
    google.load('visualization', '1', {packages: ['corechart', 'bar']});
    debugger;

    //NEXT STEP - Modular using stubbed data

    let drawBasic1 = () => {
      const data = google.visualization.arrayToDataTable([
        ['Year', 'Walks', { role: 'style' }, { role: 'annotation' } ],
        ['2011', 511, 'color: #e5e4e2', '511' ],
        ['2012', 615, 'color: #e5e4e2', '615' ],
        ['2013', 843, 'color: #e5e4e2', '843' ],
        ['2014', 1029, 'color: #e5e4e2', '1029' ],
        ['2015', 1314, 'color: #e5e4e2', '1314' ],
        ['2016', 1654, 'color: #808080', '1654' ]
      ]);

      var options = {
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
        //document.getElementById('chart_div')
        ReactDOM.findDOMNode(this)
      );

      chart.draw(data, options);
    }; //<SingleBarGraph/>
    let drawBasic2 = () => {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Year');
      data.addColumn('number', 'Toronto');
      data.addColumn({type:'string', role:'style'});
      //data.addColumn({type:'string', role:'annotation'}); //TODO: Unable to rotate annotations
      data.addColumn('number', 'Canada');
      data.addColumn({type:'string', role:'style'});
      //data.addColumn({type:'string', role:'annotation'});
      data.addColumn('number', 'USA');
      data.addColumn({type:'string', role:'style'});
      //data.addColumn({type:'string', role:'annotation'});
      data.addColumn('number', 'Global');
      data.addColumn({type:'string', role:'style'});

      const cityStyle = 'color: #a8a8a8; stroke-color: #FFFFFF; stroke-width: 4;';
      const topCountry1Style = 'color: #c5c5c5; stroke-color: #FFFFFF; stroke-width: 4;';
      const topCountry2Style = 'color: #737373; stroke-color: #FFFFFF; stroke-width: 4;';
      const globalStyle = 'color: #bfbfbf; stroke-color: #FFFFFF; stroke-width: 4;';

      data.addRows([
        ['2011', 178, cityStyle, 222,topCountry1Style, 64,topCountry2Style,47, globalStyle],
        ['2012', 138, cityStyle, 291,topCountry1Style, 72,topCountry2Style, 114, globalStyle],
        ['2013', 150, cityStyle, 357,topCountry1Style, 166,topCountry2Style, 170, globalStyle],
        ['2014', 156, cityStyle,468,topCountry1Style, 206,topCountry2Style, 199, globalStyle],
        ['2015', 183, cityStyle, 552,topCountry1Style, 332, topCountry2Style, 247, globalStyle],
      ]);

      //const data = google.visualization.arrayToDataTable([
      //  ['Year', 'City', { role: 'style' }, 'Country', { role: 'style' } ],
      //  ['2011', 511, 'color: #e5e4e2', 511, 'color: #e5e4e2'],
      //  ['2012', 615, 'color: #e5e4e2', 511, 'color: #e5e4e2'],
      //  ['2013', 843, 'color: #e5e4e2', 511, 'color: #e5e4e2'],
      //  ['2014', 1029, 'color: #e5e4e2', 511, 'color: #e5e4e2'],
      //  ['2015', 1314, 'color: #e5e4e2', 511, 'color: #e5e4e2'],
      //  ['2016', 1654, 'color: #808080', 511, 'color: #e5e4e2']
      //]);

      var options = {
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
    }; //<MultipleBarsGraph/>

    google.setOnLoadCallback(drawBasic1);

  }

  render() {
    return (<div className="barGraph"/>);
  }

}

BarGraph.PropTypes = {
  //TODO:
};