import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Driver from "./Driver/Driver.js";
import Bit from "./Bit/Bit.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Driver: new Driver({
    x: -134,
    y: -120,
    direction: 90,
    costumeNumber: 1,
    size: 100.00000002328306,
    visible: true,
    layerOrder: 2
  }),
  Bit: new Bit({
    x: -253,
    y: 65,
    direction: 105,
    costumeNumber: 2,
    size: 100.00000002328306,
    visible: false,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
