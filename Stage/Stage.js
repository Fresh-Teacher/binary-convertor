/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bkGnd", "./Stage/costumes/bkGnd.png", { x: 480, y: 360 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.binary = 67898765678;
    this.vars.decimal = 0;
    this.vars.length = 11;
    this.vars.pos = 0;
    this.vars.weight = 2048;
    this.vars.xpos = -450;
  }
}
