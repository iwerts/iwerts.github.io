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
            addUpgradeToPilotTextBox(getUpgradeByType('astromech',quickBuild.pilots[0].upgrades.astromech[i]));
        }
    }
    if (quickBuild.pilots[0].upgrades.hasOwnProperty('cannon')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.cannon.length; i++){
            addUpgradeToPilotTextBox(getUpgradeByType('cannon',quickBuild.pilots[0].upgrades.cannon[i]));
        }
    }
    if (quickBuild.pilots[0].upgrades.hasOwnProperty('configuration')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.configuration.length; i++){
            addUpgradeToPilotTextBox(getUpgradeByType('configuration',quickBuild.pilots[0].upgrades.configuration[i]));
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('crew')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.crew.length; i++){
            addUpgradeToPilotTextBox(getUpgradeByType('crew',quickBuild.pilots[0].upgrades.crew[i]));
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('device')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.device.length; i++){
            addUpgradeToPilotTextBox(getUpgradeByType('device',quickBuild.pilots[0].upgrades.device[i]));
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('force-power')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades['force-power'].length; i++){
            addUpgradeToPilotTextBox(getUpgradeByType('force-power',quickBuild.pilots[0].upgrades.force_powers[i]));
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('gunner')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.gunner.length; i++){
            addUpgradeToPilotTextBox(getUpgradeByType('gunner',quickBuild.pilots[0].upgrades.gunner[i]));
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('illicit')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.illicit.length; i++){
            addUpgradeToPilotTextBox(getUpgradeByType('illicit',quickBuild.pilots[0].upgrades.illicit[i]));
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('missile')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.missile.length; i++){
            addUpgradeToPilotTextBox(getUpgradeByType('missile',quickBuild.pilots[0].upgrades.missile[i]));
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('modification')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.modification.length; i++){
            addUpgradeToPilotTextBox(getUpgradeByType('modification',quickBuild.pilots[0].upgrades.modification[i]));
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('sensor')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.sensor.length; i++){
            addUpgradeToPilotTextBox(getUpgradeByType('sensor',quickBuild.pilots[0].upgrades.sensor[i]));
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('tactical-relay')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades['tactical-relay'].length; i++){
            addUpgradeToPilotTextBox(getUpgradeByType('tactical-relay',quickBuild.pilots[0].upgrades.tactical_relays[i]));
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('talent')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.talent.length; i++){
            addUpgradeToPilotTextBox(getUpgradeByType('talent',quickBuild.pilots[0].upgrades.talent[i]));
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('tech')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.tech.length; i++){
            addUpgradeToPilotTextBox(getUpgradeByType('tech',quickBuild.pilots[0].upgrades.tech[i]));
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('title')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.title.length; i++){
            addUpgradeToPilotTextBox(getUpgradeByType('title',quickBuild.pilots[0].upgrades.title[i]));
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('torpedo')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.torpedo.length; i++){
            addUpgradeToPilotTextBox(getUpgradeByType('torpedo',quickBuild.pilots[0].upgrades.torpedo[i]));
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('turret')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.turret.length; i++){
            addUpgradeToPilotTextBox(getUpgradeByType('turret',quickBuild.pilots[0].upgrades.turret[i]));
        }
    }
}

function getUpgradeByType(upgradeType, upgradeXWS){
    switch (upgradeType){
        case 'astromech':
            return getUpgrade(astromechs, upgradeXWS);
            case 'cannon':
            return getUpgrade(cannons, upgradeXWS);
            case 'configuration':
            return getUpgrade(configurations, upgradeXWS);
            case 'crew':
            return getUpgrade(crews, upgradeXWS);
            case 'device':
            return getUpgrade(devices, upgradeXWS);
            case 'force-power':
            return getUpgrade(force_powers, upgradeXWS);
            case 'gunner':
            return getUpgrade(gunners, upgradeXWS);
            case 'illicit':
            return getUpgrade(illicits, upgradeXWS);
            case 'missile':
            return getUpgrade(missiles, upgradeXWS);
            case 'modification':
            return getUpgrade(modifications, upgradeXWS);
            case 'sensor':
            return getUpgrade(sensors, upgradeXWS);
            case 'tactical-relay':
            return getUpgrade(tactical_relays, upgradeXWS);
            case 'talent':
            return getUpgrade(talents, upgradeXWS);
            case 'tech':
            return getUpgrade(techs, upgradeXWS);
            case 'title':
            return getUpgrade(titles, upgradeXWS);
            case 'torpedo':
            return getUpgrade(torpedoes, upgradeXWS);
            case 'turret':
            return getUpgrade(turrets, upgradeXWS);

    }
}

function addUpgradeToPilotTextBox(upgrade){
    console.log(upgrade);
    $('#pilot_text_box').append('<hr><span id="upgrade_ability">'+getUpgradeName(upgrade)+ getUpgradeText(upgrade)+'</span>');
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
        
    if (upgrade.hasOwnProperty('force')){
        console.log(upgrade.sides[0].force);
        if ($('#force_stat_value').length == 0){
            value = upgrade.sides[0].value;
            if (upgrade.sides[0].hasOwnProperty('recovers')){
                for (var i = 0; i < upgrade.sides[0].recovers; i++){
                    value += '⯅';
                }
            }
            $('#pilot_stats').append('<div class="pilot_stat"><span class="pilot_stat_icon">' + convertIcon('forcecharge')+' </span><span class="pilot_stat_value" id="force_stat_value">'+value + '</span></div>');
        }
    }
    }

    return '<br><span class="upgrade_text">'+upgradeText+'</span>';
}
