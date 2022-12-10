import { AppState } from "./appState.js";
import { World } from "./world.js";

AppState.width = 800;
AppState.height = 600;

document.getElementById('SvgContour').style.width = AppState.width.toString().concat("px");
document.getElementById('SvgContour').style.height = AppState.height.toString().concat("px");

const world = new World(AppState.width, AppState.height, 5);
world.render();


document.onkeydown = function(){ 
  world.unselect(); 
};
