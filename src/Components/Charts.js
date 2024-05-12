import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function LineChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    drawChart();
  }, []);



  function drawChart() {
    const data = Array.from({ length: 100 }, () => Math.random() * 100);

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', 800)
      .attr('height', 400);

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1])
      .range([margin.left, 800 - margin.right]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([400 - margin.bottom, margin.top]);

    const line = d3.line()
      .x((d, i) => xScale(i))
      .y(d => yScale(d))
      .curve(d3.curveMonotoneX);

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', line);

    const xAxis = d3.axisBottom(xScale).ticks(data.length / 10);
    const yAxis = d3.axisLeft(yScale).ticks(10);

    svg.append('g')
      .attr('transform', `translate(0,${400 - margin.bottom})`)
      .call(xAxis);

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(yAxis);

    svg.call(d3.zoom().on('zoom', (event) => {
      svg.attr('transform', event.transform);
    }));
  }

  return (
    <div ref={chartRef} />
  );
}

export default LineChart;
