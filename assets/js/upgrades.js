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
var upgrades = new Array();


function getQuickBuild(){
    upgrades = new Array();
    for (var i = 0; i < quickBuilds.length; i++){
        for (var j = 0; j < quickBuilds[i].builds.length; j++){
            console.log(quickBuilds[i].builds[j].pilots[0].id + ' ' + current_pilot.xws + ' : ' + quickBuilds[i].builds[j].pilots[0].id === current_pilot.xws);
            if (quickBuilds[i].builds[j].pilots[0].id == current_pilot.xws){
                quickBuild = quickBuilds[i].builds[j];
            }
        }
    }
    if (quickBuild.pilots[0].hasOwnProperty('upgrades')){
    
    if (quickBuild.pilots[0].upgrades.hasOwnProperty('astromech')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.astromech.length; i++){
            
            upgrades.push([getUpgradeByType('astromech',quickBuild.pilots[0].upgrades.astromech[i]), 0]);
        }
    }
    if (quickBuild.pilots[0].upgrades.hasOwnProperty('cannon')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.cannon.length; i++){
            upgrades.push([getUpgradeByType('cannon',quickBuild.pilots[0].upgrades.cannon[i]), 0]);
        }
    }
    if (quickBuild.pilots[0].upgrades.hasOwnProperty('configuration')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.configuration.length; i++){
            upgrades.push([getUpgradeByType('configuration',quickBuild.pilots[0].upgrades.configuration[i]), 0]);
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('crew')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.crew.length; i++){
            upgrades.push([getUpgradeByType('crew',quickBuild.pilots[0].upgrades.crew[i]), 0]);
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('device')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.device.length; i++){
            upgrades.push([getUpgradeByType('device',quickBuild.pilots[0].upgrades.device[i]), 0]);
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('force-power')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades['force-power'].length; i++){
            upgrades.push([getUpgradeByType('force-power',quickBuild.pilots[0].upgrades['force-power'][i]), 0]);
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('gunner')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.gunner.length; i++){
            upgrades.push([getUpgradeByType('gunner',quickBuild.pilots[0].upgrades.gunner[i]), 0]);
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('illicit')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.illicit.length; i++){
            upgrades.push([getUpgradeByType('illicit',quickBuild.pilots[0].upgrades.illicit[i]), 0]);
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('missile')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.missile.length; i++){
            upgrades.push([getUpgradeByType('missile',quickBuild.pilots[0].upgrades.missile[i]), 0]);
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('modification')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.modification.length; i++){
            upgrades.push([getUpgradeByType('modification',quickBuild.pilots[0].upgrades.modification[i]), 0]);
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('sensor')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.sensor.length; i++){
            upgrades.push([getUpgradeByType('sensor',quickBuild.pilots[0].upgrades.sensor[i]), 0]);
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('tactical-relay')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades['tactical-relay'].length; i++){
            upgrades.push([getUpgradeByType('tactical-relay',quickBuild.pilots[0].upgrades['tactical-relay'][i]), 0]);
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('talent')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.talent.length; i++){
            upgrades.push([getUpgradeByType('talent',quickBuild.pilots[0].upgrades.talent[i]), 0]);
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('tech')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.tech.length; i++){
            upgrades.push([getUpgradeByType('tech',quickBuild.pilots[0].upgrades.tech[i]), 0]);
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('title')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.title.length; i++){
            upgrades.push([getUpgradeByType('title',quickBuild.pilots[0].upgrades.title[i]), 0]);
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('torpedo')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.torpedo.length; i++){
            upgrades.push([getUpgradeByType('torpedo',quickBuild.pilots[0].upgrades.torpedo[i]), 0]);
        }
    }if (quickBuild.pilots[0].upgrades.hasOwnProperty('turret')){
        for (var i = 0; i < quickBuild.pilots[0].upgrades.turret.length; i++){
            upgrades.push([getUpgradeByType('turret',quickBuild.pilots[0].upgrades.turret[i]), 0]);
        }
    }
        displayUpgrades();
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

function displayUpgrades(){
    for (var i = 0; i < upgrades.length; i++){
        addUpgradeToPilotTextBox(upgrades[i][0], upgrades[i][1]);
    }
}

function addUpgradeToPilotTextBox(upgrade, side){
    console.log(upgrade);
    $('#pilot_text_box').append('<hr><span id="upgrade_ability" class="card_field">'+getUpgradeName(upgrade, side)+ getUpgradeText(upgrade, side)+'</span>');
}

function getUpgrade(upgrades, upgradeXWS){
    for (var i = 0; i < upgrades.length; i++){
        if (upgrades[i].xws == upgradeXWS){
            return upgrades[i];
        }
    }
}

function getUpgradeName(upgrade, side){
    name = '';
    if (upgrade.hasOwnProperty('limited')) {
            if (upgrade.limited > 0) {
                for (var i = 0; i < upgrade.limited; i++) {
                    name += '•';
                }
                name += ' ';
            }
        }
    name += upgrade.sides[side].title;
    return '<span class="upgrade_name">'+name+'</span>';
}

function getUpgradeText(upgrade, side){
    upgradeText = '';
    upgradeText += getUpgradeAbility(upgrade, side);
    upgradeText += getUpgradeCharges(upgrade, side);
    upgradeText += getUpgradeActions(upgrade, side);
    upgradeText += getUpgradeAttack(upgrade, side);

    return '<br><span class="upgrade_text">'+upgradeText+'</span>';
}
function getUpgradeAttack(upgrade, side){
    if (upgrade.sides[side].hasOwnProperty('attack')){
        arc = convertText(upgrade.sides[side].attack.arc.toLowerCase().replace(/\s/g, ''));
        value = upgrade.sides[side].attack.value;
        minRange = upgrade.sides[side].attack.minrange;
        maxRange = upgrade.sides[side].attack.maxrange;
        if (upgrade.sides[side].attack.ordnance){
            ordnance = convertText('rangebonusindicator');
            return '<span class="attack_upgrade">'+arc + ' ' + value + '<br>' + ordnance + minRange + ' - ' + maxRange + '</span>';
        } else {
            $('#pilot_attack').append('<span class="upgrade_stat"><span class="upgrade_stat_icon">'+arc+'</span><span class="upgrade_stat_value">'+value+'</span></span>');
            return '';
        }
       
        
    } else {
        return '';
    }
}

function getUpgradeForce(upgrade, side){

}

function getUpgradeCharges(upgrade, side){
    if (upgrade.sides[side].hasOwnProperty('charges')){
        value = upgrade.sides[side].charges.value;
        for (var i = 0; i < upgrade.sides[side].charges.recovers; i++){
            value += '⯅';
        }
        return '<span class="upgrade_stat"><span class="upgrade_stat_icon">'+convertIcon('charge')+'</span><span class="upgrade_stat_value">'+value+'</span></span>';
    } else {
        return '';
    }
}
function getUpgradeAbility(upgrade, side){
    if (upgrade.sides[side].hasOwnProperty('ability')){
        return '<span class="upgrade_ability">'+convertGameText(upgrade.sides[side].ability)+'</span>';
    } else {
        return '';
    }
}

function getUpgradeFlavor(upgrade, side){
    if (upgrade.sides[side].hasOwnProperty('text')){
        return '<span class="upgrade_ability">'+convertGameText(upgrade.sides[side].text)+'</span>';
    } else {
        return '';
    }
}

function getUpgradeActions(upgrade, side){
    if (upgrade.sides[side].hasOwnProperty('actions')){
        
        for (var i = 0; i < upgrade.sides[side].actions.length; i++){
            if (upgrade.sides[side].actions[i].hasOwnProperty('linked')){
                $('#pilot_actions').append('<span class="upgrade_action">' + convertIcon(upgrade.sides[side].actions[i].type.toLowerCase().replace(/\s/g, ''), upgrade.sides[side].actions[i].difficulty) + ' ' + convertIcon('linked', upgrade.sides[side].actions[i].difficulty) + ' ' + convertIcon(upgrade.sides[side].actions[i].linked.type.toLowerCase().replace(/\s/g, ''), upgrade.sides[side].actions[i].linked.difficulty) + '</span>');
            } else {
                $('#pilot_actions').append('<span class="upgrade_action">' + convertIcon(upgrade.sides[side].actions[i].type.toLowerCase().replace(/\s/g, ''), upgrade.sides[side].actions[i].difficulty) + '</span>');
            }
        }
        return '';
    } else {
        return '';
    }
}

