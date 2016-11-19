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
    run: function() {
         /** @param {Array<StructureSpawn>} spawns **/
        const spawnNames = Object.keys(Game.spawns);
        spawnNames.forEach(spawnName => {
            const spawn = Game.spawns[spawnName];
            if (spawn.canCreateCreep(builder.requirements)) {
               spawn.createCreep.apply(spawn, builder.requirements);
            }
        })
    }
}
