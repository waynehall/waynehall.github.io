var w = 275,
	h = 275;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Fultz','Average Draft PG'];

//Data
var d = [
		  [
			{axis:"FG%",value:0.93},
			{axis:"3PT%",value:0.82},
			{axis:"FT%",value:0.74},
			{axis:"AST%",value:0.83},
			{axis:"PTS/40",value:0.82},
			{axis:"REB%",value:0.33},
			{axis:"STL%",value:0.23},
			{axis:"BLK%",value:0.37},
			{axis:"PER",value:0.68},
			{axis:"OBPM",value:0.57},
			{axis:"DBPM",value:0.38}
		  ],[
			{axis:"FG%",value:0.73},
			{axis:"3PT%",value:0.42},
			{axis:"FT%",value:0.64},
			{axis:"AST%",value:0.53},
			{axis:"PTS/40",value:0.42},
			{axis:"REB%",value:0.63},
			{axis:"STL%",value:0.83},
			{axis:"BLK%",value:0.67},
			{axis:"PER",value:0.88},
			{axis:"OBPM",value:0.57},
			{axis:"DBPM",value:0.78}
		  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 1,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
/*var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("What % of owners");
	*/	
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(190,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	