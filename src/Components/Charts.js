import React from 'react';
import * as d3 from 'd3';

class Charts extends React.Component {
  componentDidMount() {
    const data = [12, 36, 25, 30, 44];
    const svg = d3.select(this.refs.chart)
                  .append('svg')
                  .attr('width', 400)
                  .attr('height', 300)
                  .style('background-color', 'lightgrey');

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 80)
      .attr('y', d => 300 - d * 5)
      .attr('width', 75)
      .attr('height', d => d * 5)
      .attr('fill', 'blue');
  }

  render() {
    return <div ref="chart" />;
  }
}

export default Charts;
