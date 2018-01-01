"use strict";

module.exports.constants = {
  creepTypes : [
    "harvester",
    "upgrader",
    "builder",
    "repairer"
  ],
  "creep" : {
    "harvester" : {
      "population" : [5,10],
      "body" : [
        [WORK, CARRY, MOVE, MOVE],
        [WORK, WORK, CARRY, MOVE, MOVE]
      ]
    },
    "upgrader" : {
      "population" : [10,20],
      "body" : [
        [WORK, CARRY, CARRY, MOVE, MOVE]
      ]
    },
    "builder" : {
      "population" : [0,5],
      "body" : [
        [],
        [WORK, WORK, CARRY, MOVE]
      ]
    },
    "repairer" : {
      "population" : [0,5],
      "body" : [
        [],
        [WORK, CARRY, MOVE]
      ]
    }
  }
}
