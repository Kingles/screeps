'use strict';

/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('resourceManager');
 * mod.thing == 'a thing'; // true
 */
var builder = require('role.harvester');

module.exports = {
    run: function run() {
        /** @param {Array<StructureSpawn>} spawns **/
        var spawnNames = Object.keys(Game.spawns);
        spawnNames.forEach(function (spawnName) {
            var spawn = Game.spawns[spawnName];
            if (spawn.canCreateCreep(builder.requirements)) {
                spawn.createCreep.apply(spawn, builder.requirements);
            }
        });
    }
};