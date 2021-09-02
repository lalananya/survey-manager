import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
// import {Chart,BarSeries,Title,ArgumentAxis,ValueAxis} from '@devexpress/dx-react-chart-material-ui';

import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    BarSeries,
  } from '@devexpress/dx-react-chart-material-ui';
  
  
import { scaleBand } from '@devexpress/dx-chart-core';
import { ArgumentScale, Stack } from '@devexpress/dx-react-chart';

class Demo extends Component {
    constructor(props) {
        super(props);
    }

render() {
    
    // const { data: chartData } = this.props;
    return (<Paper>
        <Chart
          data={this.props.data}
        >
          <ArgumentScale factory={scaleBand} />
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            valueField="answer"
            argumentField="option"
            name="Young"
          />
          <Stack />
        </Chart>
      </Paper>)
}

}

export default Demo;