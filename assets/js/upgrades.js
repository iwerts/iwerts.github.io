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
var quickBuild = '';
function getQuickBuild(){
    for (var i = 0; i < quickBuilds.length; i++){
        for (var j = 0; j < quickBuilds[i].builds.length; j++){
            if (quickBuilds[i].builds[j].pilots[0].id == current_pilot.xws){
                quickBuild = quickBuilds[i].builds[j];
            }
        }
    }
    
    if (quickBuild.pilots[0].upgrades.hasOwnProperty('astromech')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.astromech.length; i++){
            addUpgradeToPilotTextBox(getUpgradeByType('astromech',quickBuild.pilots[0].upgrades[i]));
        }
    }
}

function getUpgradeByType(upgradeType, upgradeXWS){
    switch (upgradeType){
        case 'astromech':
            return getUpdate(astromechs, upgradeXWS);
    }
}

function addUpgradeToPilotTextBox(upgrade){
    $('#pilot_text_box').append('<span id="upgrade_ability">'+getUpgradeName(upgrade)+ getUpgradeText(upgrade)+'</span>';
}

function getUpgrade(upgrades, upgradeXWS){
    for (var i = 0; i < upgrades.length; i++){
        if (upgrades[i].xws == upgradeXWS){
            return upgrades[i];
        }
    }
}

function getUpgradeName(upgrade){
    name = '';
    if (upgrade.hasOwnProperty('limited')) {
            if (upgrade.limited > 0) {
                for (var i = 0; i < upgrade.limited; i++) {
                    name += '•';
                }
                name += ' ';
            }
        }
    name += upgrade.name;
    return '<span class="upgrade_name">'+name+'</span>';
}

function getUpgradeText(upgrade){
    upgradeText = '';
    if (upgrade.hasOwnProperty('sides')){
        if (upgrade.sides[0].hasOwnProperty('ability')){
            upgradeText += convertGameText(upgrade.sides[0].ability);
        }
    }
    return '<span class="upgrade_text">'+upgradeText+'</span>';
}
