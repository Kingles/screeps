var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var resourceManager = require('resourceManager');

module.exports.loop = function () {

    var tower = null;
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }

    resourceManager.run();

    for(var name in Game.creeps) {
        const creep = Game.creeps[name];
        if(creep.memory.role === roleHarvester.roleName) {
            roleHarvester.run(creep);
        }
        if(creep.memory.role === roleUpgrader.roleName) {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role === roleBuilder.roleName) {
            roleBuilder.run(creep);
        }
    }
}
