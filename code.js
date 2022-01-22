
// Create data
var data = [ 
{name:"Ella", path:"/files/00_ella.mp4", city:"London", type: "video"},
{name:"Ila & Paolo", path:"/files/01_ila_paolo.ogg", city:"Berlin", type: "audio"},
{name:"Giusi", path:"/files/02_giusi.mp4", city:"Rome", type: "audio"},
{name:"Nas & Terenz", path:"/files/03_nas_terenz.ogg", city:"London", type: "audio"},
{name:"Nikklas", path:"/files/04_nikklas.ogg", city:"London", type: "audio"},
{name:"Gabi", path:"/files/07_gabi.ogg", city:"Rome", type: "audio"},
{name:"Bea & Joss", path:"/files/06_bea_joss.ogg", city:"London", type: "audio"},
{name:"Sauve", path:"/files/05_sauve.ogg", city:"Berlin", type: "audio"},
{name:"Conni", path:"/files/08_conni.ogg", city:"Rome", type: "audio"},
{name:"Marco", path:"/files/09_marco.ogg", city:"Rome", type: "audio"}]

var missing = [ 
{name:"Gerta & Luca", path:"/files/XXX.mp4", city:"London", type: "audio"},
{name:"Brian & Andrea", path:"/files/XXX.mp4", city:"Rome", type: "audio"},
{name:"Lavi & Lollo", path:"/files/XXX.mp4", city:"Berlin", type: "audio"},
{name:"Lalli", path:"/files/XXX.mp4", city:"London", type: "audio"},
{name:"Dennis", path:"/files/XXX.mp4", city:"London", type: "audio"},
{name:"Egemen", path:"/files/XXX.mp4", city:"Berlin", type: "audio"},
{name:"Fede T.", path:"/files/XXX.mp4", city:"Rome", type: "audio"},
{name:"Fede P.", path:"/files/XXX.mp4", city:"Rome", type: "audio"},
{name:"Asia", path:"/files/XXX.mp4", city:"Rome", type: "audio"}]

var data_london = getPeopleByCity("London");
var data_berlin = getPeopleByCity("Berlin");
var data_rome = getPeopleByCity("Rome");
var empty_data = [];

var dict = {
  "LDN": data_london,
  "RM": data_rome,
  "BRLN": data_berlin,
  "none": empty_data
};

var divvo = d3.select("#friends");
var root = "C:/Users/paolo/Desktop/xxx"

const btn = document.querySelector('#btn');        
const radioButtons = document.querySelectorAll('input[name="size"]');
btn.addEventListener("click", () => {
    let selectedSize = "none";
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            break;
        }
    }
    // show the output:
    getFriendsFromCity(dict[selectedSize]);
});

function getFriendsFromCity(stuff) {

divvo.selectAll("center").remove();

var figs = divvo.selectAll("center").data(d3.shuffle(stuff));

var lol = figs.enter().append("center").append("figure");

lol.append("figcaption").text(function(d){ return d.name;});

lol.append("video")
  .attr("width",250)
  .attr("height",function(d){ if (d.type === "audio") { return 50 } else { return ""}})
  .attr("src", function(d){ return root + d.path;})
  .property("controls", true)
  .property("autoplay", false);

lol.exit().remove();

 }

function getPeopleByCity(city_name) {
  return data.filter(
      function(data){ return data.city == city_name }
  );
}