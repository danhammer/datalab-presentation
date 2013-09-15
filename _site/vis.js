var width = 960, height = 960, 
velocity = .015, then = Date.now();  

var projection = d3.geo.orthographic()
  .center([0, 10])
  .clipAngle(90)  
  .scale(300)
  .rotate([-15,0]);

var svg = d3.select("#chart").append("svg")
  .attr("width", width)
  .attr("height", height);

var path = d3.geo.path()
  .projection(projection);

var world = svg.append("svg:g");
var humid  = svg.append("svg:g");

// load and display the humid tropical biome

d3.json("readme-world-110m.json", function(error, topology) {

  var countries = topojson.object(topology, topology.objects.countries)

  world.selectAll("path")
    .data(countries.geometries)
  .enter().append("path")
    .attr("class", function(d) { return "subunit c" + d.id; })
    .attr("d", path);

}); 

// load and display the humid tropical biome

d3.json("humid.json", function(error, topology) {
  humid.selectAll("path")
    .data(topojson.object(topology, topology.objects.humid)
          .geometries)
    .enter()
    .insert("path")
    .attr("d", path)
    .style("fill", "rgb(200,50,50)")
    .style("opacity", ".4")
});


function startAnimation() {
  d3.timer(function() {  
    var angle = velocity * (Date.now() - then);  
    projection.rotate([angle,0,0]);  
    svg.selectAll("path")  
      .attr("d", path);  
  })
}

startAnimation();

