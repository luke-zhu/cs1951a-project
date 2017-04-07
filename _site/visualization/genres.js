var margin = {top: 100, right: 20, bottom: 20, left: 200};
var width = 960 - margin.right;
var height = 500 - margin.top - margin.bottom;

var xScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, width]);
var xAxis = d3.axisTop(xScale);

var yScale = d3.scaleBand()
  .rangeRound([0, height])
  .padding(.1);

var svg = d3.select('#chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

d3.json('/cs1951a-project/visualization/genre_counts.json', (genre_counts) => {
  var data = Object.keys(genre_counts[0])
    .map(d => [d, genre_counts[0][d]])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20);

  yScale.domain(data.map(d => d[0]));
  var yAxis = d3.axisLeft(yScale);

  svg.append('g')
    .attr('class', 'x axis')
    .call(xAxis);
  svg.append('g')
    .attr('class', 'y axis')
    .call(yAxis);

  svg.append('text')
  .attr('class', 'x label')
  .attr('text-anchor', 'middle')
  .attr('x', width / 2)
  .attr('y', -24)
  .text('Frequency');

  svg.append('text')
    .attr('class', 'y label')
    .attr('text-anchor', 'middle')
    .attr('x', -height / 2)
    .attr('y', -100)
    .attr('transform', 'rotate(-90)')
    .text('Genre');

  var yearLabel = svg.append('text')
    .attr('class', 'year label')
    .attr('text-anchor', 'end')
    .attr('x', width)
    .attr('y', height - 24)
    .text('1959');

  var updateColor = (d, i) => {
    if (data[i][0].includes('pop')) {
      return 'red';
    }

    if (data[i][0].includes('rock')) {
      return 'blue';
    }

    if (data[i][0].includes('rap')) {
      return 'yellow';
    }

    if (data[i][0].includes('soul')) {
      return 'green';
    }
    return 'gray';
  };

  var bar = svg.selectAll('rect')
    .data(data)
    .enter()
    .append('g')
    .attr('class', 'bars')
    .append('rect')
    .attr('fill', 'gray')
    .attr('x', 0)
    .attr('y', d => yScale(d[0]))
    .attr('height', yScale.bandwidth())
    .attr('width', d => xScale(d[1]))
    .attr('fill', updateColor);

  console.log(yearLabel)
  var box = yearLabel.node().getBBox();

  var overlay = svg.append('rect')
    .attr('class', 'overlay')
    .attr('x', box.x)
    .attr('y', box.y)
    .attr('width', box.width)
    .attr('height', box.height);

  var updateBars = (year) => {
    data = Object.keys(genre_counts[year - 1959])
      .map(d => [d, genre_counts[year - 1959][d]])
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20);

    yScale.domain(data.map(d => d[0]));
    svg.select('.y.axis')
      .call(yAxis);

    bar.attr('y', (d, i) => yScale(data[i][0]))
      .attr('width', (d, i) => xScale(data[i][1]))
      .attr('fill', updateColor);
  }
  
  var update = () => {
    var yearScale = d3.scaleLinear()
      .domain([box.x, box.x + box.width])
      .range([1959, 2016]);
    var year = yearScale(d3.event.clientX - margin.left - 48);
    yearLabel.text(Math.round(year));
    updateBars(Math.round(year));
  }

  overlay.on('mousemove', update);
})