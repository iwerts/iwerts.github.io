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
var quickBuild = [];
var upgrades = new Array();


function getQuickBuild() {
    if (upgrades.length == 0){
    upgrades = new Array();
    for (var i = 0; i < quickBuilds.length; i++) {
        for (var j = 0; j < quickBuilds[i].builds.length; j++) {
            if (quickBuilds[i].builds[j].pilots[0].id == current_pilot.xws) {
                quickBuild.append(quickBuilds[i].builds[j]);
            }
        }
    }

    if (quickBuild.length > 1){
        
    }

    for (var i = 0; i < quickBuild.length; i++){

    if (quickbuild[i].pilots[0].hasOwnProperty('upgrades')) {

        if (quickbuild[i].pilots[0].upgrades.hasOwnProperty('astromech')) {
            for (var i = 0; i < quickbuild[i].pilots[0].upgrades.astromech.length; i++) {

                upgrades.push([getUpgradeByType('astromech', quickbuild[i].pilots[0].upgrades.astromech[i]), 0]);
            }
        }
        if (quickbuild[i].pilots[0].upgrades.hasOwnProperty('cannon')) {
            for (var i = 0; i < quickbuild[i].pilots[0].upgrades.cannon.length; i++) {
                upgrades.push([getUpgradeByType('cannon', quickbuild[i].pilots[0].upgrades.cannon[i]), 0]);
            }
        }
        if (quickbuild[i].pilots[0].upgrades.hasOwnProperty('configuration')) {
            for (var i = 0; i < quickbuild[i].pilots[0].upgrades.configuration.length; i++) {
                upgrades.push([getUpgradeByType('configuration', quickbuild[i].pilots[0].upgrades.configuration[i]), 0]);
            }
        } if (quickbuild[i].pilots[0].upgrades.hasOwnProperty('crew')) {
            for (var i = 0; i < quickbuild[i].pilots[0].upgrades.crew.length; i++) {
                upgrades.push([getUpgradeByType('crew', quickbuild[i].pilots[0].upgrades.crew[i]), 0]);
            }
        } if (quickbuild[i].pilots[0].upgrades.hasOwnProperty('device')) {
            for (var i = 0; i < quickbuild[i].pilots[0].upgrades.device.length; i++) {
                upgrades.push([getUpgradeByType('device', quickbuild[i].pilots[0].upgrades.device[i]), 0]);
            }
        } if (quickbuild[i].pilots[0].upgrades.hasOwnProperty('force-power')) {
            for (var i = 0; i < quickbuild[i].pilots[0].upgrades['force-power'].length; i++) {
                upgrades.push([getUpgradeByType('force-power', quickbuild[i].pilots[0].upgrades['force-power'][i]), 0]);
            }
        } if (quickbuild[i].pilots[0].upgrades.hasOwnProperty('gunner')) {
            for (var i = 0; i < quickbuild[i].pilots[0].upgrades.gunner.length; i++) {
                upgrades.push([getUpgradeByType('gunner', quickbuild[i].pilots[0].upgrades.gunner[i]), 0]);
            }
        } if (quickbuild[i].pilots[0].upgrades.hasOwnProperty('illicit')) {
            for (var i = 0; i < quickbuild[i].pilots[0].upgrades.illicit.length; i++) {
                upgrades.push([getUpgradeByType('illicit', quickbuild[i].pilots[0].upgrades.illicit[i]), 0]);
            }
        } if (quickbuild[i].pilots[0].upgrades.hasOwnProperty('missile')) {
            for (var i = 0; i < quickbuild[i].pilots[0].upgrades.missile.length; i++) {
                upgrades.push([getUpgradeByType('missile', quickbuild[i].pilots[0].upgrades.missile[i]), 0]);
            }
        } if (quickbuild[i].pilots[0].upgrades.hasOwnProperty('modification')) {
            for (var i = 0; i < quickbuild[i].pilots[0].upgrades.modification.length; i++) {
                upgrades.push([getUpgradeByType('modification', quickbuild[i].pilots[0].upgrades.modification[i]), 0]);
            }
        } if (quickbuild[i].pilots[0].upgrades.hasOwnProperty('sensor')) {
            for (var i = 0; i < quickbuild[i].pilots[0].upgrades.sensor.length; i++) {
                upgrades.push([getUpgradeByType('sensor', quickbuild[i].pilots[0].upgrades.sensor[i]), 0]);
            }
        } if (quickbuild[i].pilots[0].upgrades.hasOwnProperty('tactical-relay')) {
            for (var i = 0; i < quickbuild[i].pilots[0].upgrades['tactical-relay'].length; i++) {
                upgrades.push([getUpgradeByType('tactical-relay', quickbuild[i].pilots[0].upgrades['tactical-relay'][i]), 0]);
            }
        } if (quickbuild[i].pilots[0].upgrades.hasOwnProperty('talent')) {
            for (var i = 0; i < quickbuild[i].pilots[0].upgrades.talent.length; i++) {
                upgrades.push([getUpgradeByType('talent', quickbuild[i].pilots[0].upgrades.talent[i]), 0]);
            }
        } if (quickbuild[i].pilots[0].upgrades.hasOwnProperty('tech')) {
            for (var i = 0; i < quickbuild[i].pilots[0].upgrades.tech.length; i++) {
                upgrades.push([getUpgradeByType('tech', quickbuild[i].pilots[0].upgrades.tech[i]), 0]);
            }
        } if (quickbuild[i].pilots[0].upgrades.hasOwnProperty('title')) {
            for (var i = 0; i < quickbuild[i].pilots[0].upgrades.title.length; i++) {
                upgrades.push([getUpgradeByType('title', quickbuild[i].pilots[0].upgrades.title[i]), 0]);
            }
        } if (quickbuild[i].pilots[0].upgrades.hasOwnProperty('torpedo')) {
            for (var i = 0; i < quickbuild[i].pilots[0].upgrades.torpedo.length; i++) {
                upgrades.push([getUpgradeByType('torpedo', quickbuild[i].pilots[0].upgrades.torpedo[i]), 0]);
            }
        } if (quickbuild[i].pilots[0].upgrades.hasOwnProperty('turret')) {
            for (var i = 0; i < quickbuild[i].pilots[0].upgrades.turret.length; i++) {
                upgrades.push([getUpgradeByType('turret', quickbuild[i].pilots[0].upgrades.turret[i]), 0]);
            }
        }
    }
}
        displayUpgrades();
    }
}

function getUpgradeByType(upgradeType, upgradeXWS) {
    switch (upgradeType) {
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

function displayUpgrades() {
    $('.upgrade').remove();
    for (var i = 0; i < upgrades.length; i++) {
        addUpgradeToPilotTextBox(upgrades[i][0], upgrades[i][1]);
    }
}

function addUpgradeToPilotTextBox(upgrade, side) {
    $('#pilot_text_box').append('<div id="upgrade_ability" class="card_field upgrade"><hr>' + getUpgradeText(upgrade, side) + '</div>');
}

function getUpgrade(upgrades, upgradeXWS) {
    for (var i = 0; i < upgrades.length; i++) {
        if (upgrades[i].xws == upgradeXWS) {
            return upgrades[i];
        }
    }
}

function getUpgradeSlots(upgrade, side){
    if (upgrade.sides[side].hasOwnProperty('slots')){
        output = '';
        for (var i = 0; i < upgrade.sides[side].slots.length; i++){
            output += convertText(upgrade.sides[side].slots[i].toLowerCase().replace(/\s/g, ''));
        }
        return '<span class="upgrade_slots upgrade">' + output + '</span>';
    }
}

function getUpgradeName(upgrade, side) {
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
    return '<span class="upgrade_name upgrade" onclick="flipUpgrade(\''+upgrade.xws+'\')">' + name + '</span>';
}

function flipUpgrade(xws){
    
    for (var i = 0; i < upgrades.length; i++){
        if (upgrades[i][0].xws == xws){
            if (upgrades[i][0].sides.length > 1){
            switch (upgrades[i][1]){
                case 0:
                    upgrades[i][1] = 1; 
                    break;
                case 1:
                    upgrades[i][1] = 0;
                    break;
            }}
        }
    }
    displayUpgrades();
}

function getUpgradeText(upgrade, side) {
    upgradeText = getUpgradeName(upgrade, side);
    upgradeText += getUpgradeSlots(upgrade, side);
    upgradeText += getUpgradeAbility(upgrade, side);
    upgradeText += getUpgradeFlavor(upgrade, side);
    upgradeText += getUpgradeCharges(upgrade, side);
    upgradeText += getUpgradeActions(upgrade, side);
    upgradeText += getUpgradeAttack(upgrade, side);
    upgradeText += getUpgradeGrants(upgrade, side);

    return '<br><span class="upgrade_text upgrade">' + upgradeText + '</span>';
}
function getUpgradeAttack(upgrade, side) {
    if (upgrade.sides[side].hasOwnProperty('attack')) {
        arc = convertText(upgrade.sides[side].attack.arc.toLowerCase().replace(/\s/g, ''));
        value = upgrade.sides[side].attack.value;
        minRange = upgrade.sides[side].attack.minrange;
        maxRange = upgrade.sides[side].attack.maxrange;
        if (upgrade.sides[side].attack.ordnance) {
            ordnance = convertText('rangebonusindicator');
            return '<span class="attack_upgrade upgrade">' + arc + ' ' + value + '<br>' + ordnance + minRange + ' - ' + maxRange + '</span>';
        } else {
            $('#pilot_attack').append('<div class="upgrade_stat upgrade"><span class="upgrade_stat_icon">' + arc + '</span><span class="upgrade_stat_value">' + value + '</span><span class="attack_range">' + '(' + minRange + ' - ' + maxRange + ')</span></div>');
            return '';
        }


    } else {
        return '';
    }
}

function getUpgradeForce(upgrade, side) {
    if (upgrade.sides[side].hasOwnProperty('force')){
        value = upgrade.sides[side].force.amount
        recovers = upgrade.sides[side].force.recovers;
        if (current_pilot.hasOwnProperty('force')){
            value += current_pilot.force.amount;
            recovers = Number.max(recovers, current_pilot.force.recovers);
            $('#pilot_stat_force').remove();
        }
        for (var i = 0; i < recovers; i++){
            value += '⯅';
        }
        $('#pilot_stats').append('<div class="upgrade_stat upgrade" id="upgrade_stat_force">'+'<span class="upgrade_stat_icon">' + convertIcon('forcecharge') + '</span><span class="upgrade_stat_value">' + value + '</span></div>');

    }
}

function getUpgradeCharges(upgrade, side) {
    if (upgrade.sides[side].hasOwnProperty('charges')) {
        value = upgrade.sides[side].charges.value;
        for (var i = 0; i < upgrade.sides[side].charges.recovers; i++) {
            value += '⯅';
        }
        return '<span class="upgrade_stat upgrade"><span class="upgrade_stat_icon">' + convertIcon('charge') + '</span><span class="upgrade_stat_value">' + value + '</span></span>';
    } else {
        return '';
    }
}
function getUpgradeAbility(upgrade, side) {
    if (upgrade.sides[side].hasOwnProperty('ability')) {
        return '<span class="upgrade_ability upgrade" >' + convertGameText(upgrade.sides[side].ability) + '</span>';
    } else {
        return '';
    }
}

function getUpgradeFlavor(upgrade, side) {
    if (upgrade.sides[side].hasOwnProperty('text')) {
        return '<span class="upgrade_flavor upgrade">' + convertGameText(upgrade.sides[side].text) + '</span>';
    } else {
        return '';
    }
}

function getUpgradeGrants(upgrade, side) {
    if (upgrade.sides[side].hasOwnProperty('grants')) {
        for (var i = 0; i < upgrade.sides[side].grants.length; i++) {
            switch (upgrade.sides[side].grants[i].type) {
                case 'stat':
                    var stat_type = "#pilot_stat_" + upgrade.sides[side].grants[i].value;
                    var current_value = 0;
                    for (var j = 0; j < current_ship.stats.length; j++){
                            if (current_ship.stats[j].type == upgrade.sides[side].grants[i].value){
                           current_value = current_ship.stats[j].value;

                        }   
                    }
                    if (('#pilot_stats ' + stat_type).length > 0){
                        $(stat_type).remove();
                    }
                    $('#pilot_stats').append('<div class="upgrade_stat upgrade"><span class="upgrade_stat_icon">' + convertText(upgrade.sides[side].grants[i].value.toLowerCase().replace(/\s/g, '')) + '</span><span class="upgrade_stat_value" id="pilot_stat_' + upgrade.sides[side].grants[i].value.toLowerCase().replace(/\s/g, '') + '">' + (parseInt(current_value) + parseInt(upgrade.sides[side].grants[i].amount)) + '*</span></div>')
                    break;
                case 'action':
                    break;
            }
        }
    }
    return '';
}

function getUpgradeActions(upgrade, side) {
    if (upgrade.sides[side].hasOwnProperty('actions')) {

        for (var i = 0; i < upgrade.sides[side].actions.length; i++) {
            if (upgrade.sides[side].actions[i].hasOwnProperty('linked')) {

                $('#pilot_actions').append('<span class="upgrade_action upgrade">' + convertIcon(upgrade.sides[side].actions[i].type.toLowerCase().replace(/\s/g, ''), upgrade.sides[side].actions[i].difficulty) + ' ' + convertIcon('linked', upgrade.sides[side].actions[i].difficulty) + ' ' + convertIcon(upgrade.sides[side].actions[i].linked.type.toLowerCase().replace(/\s/g, ''), upgrade.sides[side].actions[i].linked.difficulty) + '</span>');
            } else {
                if (!($('#' + upgrade.sides[side].actions[i].type.toLowerCase().replace(/\s/g, '') + 'red').length) == 0) {
                    $('#' + upgrade.sides[side].actions[i].type.toLowerCase().replace(/\s/g, '') + 'red').remove();
                }
                $('#pilot_actions').append('<span class="upgrade_action upgrade">' + convertIcon(upgrade.sides[side].actions[i].type.toLowerCase().replace(/\s/g, ''), upgrade.sides[side].actions[i].difficulty) + '</span>');

            }
        }
        return '';
    } else {
        return '';
    }
}



