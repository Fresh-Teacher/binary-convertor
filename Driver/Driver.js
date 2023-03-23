/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Driver extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Driver/costumes/costume1.png", {
        x: 190,
        y: 176
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.broadcastAndWait("Initalize");
    yield* this.askAndWait("Enter an 8-bit binary number");
    this.stage.vars.binary = this.answer;
    yield* this.broadcastAndWait("BinaryToDecimal");
    this.say(
      this.toString(this.stage.vars.binary) +
        (" = " + this.toString(this.stage.vars.decimal))
    );
  }
}
