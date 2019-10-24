import React, { Component } from 'react';
import '../App.css';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalRectSeries} from 'react-vis';
const env = require('../env.js');
const backendURL = env.backendURL;
const d3 = require('d3');

class Graph extends Component {
  constructor (props) {
    super(props);
    this.state = {
      locationData:{},
      bins:[],
      binsLabels:[]
    };
  };

  async componentDidMount () {
    let binsLabels1=[];
    let response = await fetch(backendURL+'/personalData/location')
    let data = await response.json();
    await this.setState({locationData:data})
    const histGenerator = d3.histogram()
      .domain([this.state.locationData.minInterval, this.state.locationData.maxInterval])
      .thresholds(99);
    await this.setState({bins:histGenerator(this.state.locationData.dataIntervals)});
    for(let i=0;i<this.state.bins.length;i++){
      binsLabels1.push((this.state.locationData.maxInterval - this.state.locationData.minInterval)/100*i)
    }
    this.setState({binsLabels:binsLabels1});
  }

  render() {

    let DATA = [];
    for(let i=0;i<this.state.bins.length;i++){
      let dataRow = {x0:this.state.binsLabels[i],x:this.state.binsLabels[i]+10,y:this.state.bins[i].length};
      DATA.push(dataRow);
    }
    console.log(DATA[10])
    return (
      <div className="App">
        <XYPlot
          xDomain={[this.state.locationData.minInterval, this.state.locationData.maxInterval]}
          yDomain={[0,800000]}
          xType="linear"
          width={800}
          height={300}
        >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalRectSeries data={DATA} style={{stroke: '#fff'}} />
        </XYPlot>
      </div>
    );
  }
}

export default Graph;
