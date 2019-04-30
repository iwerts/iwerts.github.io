var astromechs = returnJSON('https://iwerts.github.io/xwing-data2/data/upgrades/astromech.json');
var cannons = returnJSON('https://iwerts.github.io/xwing-data2/data/upgrades/cannon.json');
var configurations = returnJSON('https://iwerts.github.io/xwing-data2/data/upgrades/configuration.json');
var crews = returnJSON('https://iwerts.github.io/xwing-data2/data/upgrades/crew.json');
var devices = returnJSON('https://iwerts.github.io/xwing-data2/data/upgrades/device.json');
var force_powers = returnJSON('https://iwerts.github.io/xwing-data2/data/upgrades/force-power.json');
var gunners = returnJSON('https://iwerts.github.io/xwing-data2/data/upgrades/gunner.json');
var illicits = returnJSON('https://iwerts.github.io/xwing-data2/data/upgrades/illicit.json');
var missiles = returnJSON('https://iwerts.github.io/xwing-data2/data/upgrades/missile.json');
var modifications = returnJSON('https://iwerts.github.io/xwing-data2/data/upgrades/modification.json');
var sensors = returnJSON('https://iwerts.github.io/xwing-data2/data/upgrades/sensor.json');
var tactical_relays = returnJSON('https://iwerts.github.io/xwing-data2/data/upgrades/tactical-relay.json');
var talents = returnJSON('https://iwerts.github.io/xwing-data2/data/upgrades/talent.json');
var techs = returnJSON('https://iwerts.github.io/xwing-data2/data/upgrades/tech.json');
var titles = returnJSON('https://iwerts.github.io/xwing-data2/data/upgrades/title.json');
var torpedoes = returnJSON('https://iwerts.github.io/xwing-data2/data/upgrades/torpedo.json');
var turrets = returnJSON('https://iwerts.github.io/xwing-data2/data/upgrades/turret.json');

function getUpdateByType(updateType, updateXWS){
    switch (updateType){
        case 'astromech':
            return getUpdate(astromechs, updateXWS);
    }
}

function getUpdate(updates, updateXWS){
    for (var i = 0; i < updates.length; i++){
        if (updates[i].xws == updateXWS){
            return updates[i];
        }
    }
}
