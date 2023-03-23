/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bit extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Off", "./Bit/costumes/Off.png", { x: 46, y: 46 }),
      new Costume("On", "./Bit/costumes/On.png", { x: 46, y: 46 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Initalize" },
        this.whenIReceiveInitalize
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "BinaryToDecimal" },
        this.whenIReceiveBinarytodecimal
      )
    ];
  }

  *whenIReceiveInitalize() {
    this.clearPen();
    this.costume = "Off";
    this.goto(210, 65);
    for (let i = 0; i < 8; i++) {
      this.stamp();
      this.x -= 60;
      yield;
    }
    this.costume = "On";
    this.visible = false;
  }

  *whenIReceiveBinarytodecimal() {
    this.stage.vars.length = this.toString(this.stage.vars.binary).length;
    this.stage.vars.pos = this.stage.vars.length;
    this.stage.vars.weight = 1;
    this.stage.vars.decimal = 0;
    this.stage.vars.xpos = 210;
    for (let i = 0; i < this.toNumber(this.stage.vars.length); i++) {
      if (
        this.toNumber(
          this.letterOf(this.stage.vars.binary, this.stage.vars.pos - 1)
        ) === 1
      ) {
        this.stage.vars.decimal += this.toNumber(this.stage.vars.weight);
        this.goto(this.toNumber(this.stage.vars.xpos), 65);
        this.visible = true;
        this.stamp();
        this.visible = false;
      }
      this.stage.vars.pos--;
      this.stage.vars.xpos -= 60;
      this.stage.vars.weight = 2 * this.toNumber(this.stage.vars.weight);
      yield;
    }
  }
}
