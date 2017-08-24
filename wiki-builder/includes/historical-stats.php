<?php
if (!defined('BUNGIE_URL')) define('BUNGIE_URL', 'https://www.bungie.net');
$cachePath = BUILDERPATH.'/cache/cache.json';

$enumsPath = BUILDERPATH.'/data/enums.json';

$races = array(
	'Fallen' => array(
		'raceId' => 'Fallen',
		'name' => 'Fallen',
		'symbol' => 'symbol_fallen.svg'
	),
	'Hive' => array(
		'raceId' => 'Hive',
		'name' => 'Hive',
		'symbol' => 'symbol_hive.svg'
	),
	'Vex' => array(
		'raceId' => 'Vex',
		'name' => 'Vex',
		'symbol' => 'symbol_vex.svg'
	),
	'Cabal' => array(
		'raceId' => 'Cabal',
		'name' => 'Cabal',
		'symbol' => 'symbol_cabal.svg'
	),
	'Taken' => array(
		'raceId' => 'Taken',
		'name' => 'Taken',
		'symbol' => 'symbol_taken.svg'
	)
);

$factions = array(
	'FallenDevils' => array('factionId' => 'FallenDevils', 'factionName' => 'House of Devils'),
	'FallenExile' => array('factionId' => 'FallenExile', 'factionName' => 'House of Exile'),
	'FallenKings' => array('factionId' => 'FallenKings', 'factionName' => 'House of Kings'),
	'FallenWinter' => array('factionId' => 'FallenWinter', 'factionName' => 'House of Winter'),
	'FallenWolves' => array('factionId' => 'FallenWolves', 'factionName' => 'House of Wolves'),
	
	'FallenDevilSplicers' => array('factionId' => 'FallenDevilSplicers', 'factionName' => 'Devil Splicers'),

	'HiveSpawnOfCrota' => array('factionId' => 'HiveSpawnOfCrota', 'factionName' => 'Spawn of Crota'),
	'HiveHiddenSwarm' => array('factionId' => 'HiveHiddenSwarm', 'factionName' => 'Hidden Swarm'),
	'HiveBloodOfOryx' => array('factionId' => 'HiveBloodOfOryx', 'factionName' => 'Blood of Oryx'),

	'VexHezenCorrective' => array('factionId' => 'VexHezenCorrective', 'factionName' => 'Hezen Corrective'),
	'VexHezenProtective' => array('factionId' => 'VexHezenProtective', 'factionName' => 'Hezen Protective'),
	'VexVirgo' => array('factionId' => 'VexVirgo', 'factionName' => 'Virgo Prohibition'),
	'VexDivisive' => array('factionId' => 'VexDivisive', 'factionName' => 'Sol Divisive'),
	'VexProgeny' => array('factionId' => 'VexProgeny', 'factionName' => 'Sol Progeny'),
	'VexPrecursors' => array('factionId' => 'VexPrecursors', 'factionName' => 'Precursors'),
	'VexDescendants' => array('factionId' => 'VexDescendants', 'factionName' => 'Descendants'),
	'VexFactionAphix' => array('factionId' => 'VexFactionAphix', 'factionName' => 'Aphix Invasive'),

	'CabalBlindLegion' => array('factionId' => 'CabalBlindLegion', 'factionName' => 'Blind Legion'),
	'CabalDustGiants' => array('factionId' => 'CabalDustGiants', 'factionName' => 'Dust Giants'),
	'CabalIceReapers' => array('factionId' => 'CabalIceReapers', 'factionName' => 'Ice Reapers'),
	'CabalSandEaters' => array('factionId' => 'CabalSandEaters', 'factionName' => 'Sand Eaters'),
	'CabalSiegeDancers' => array('factionId' => 'CabalSiegeDancers', 'factionName' => 'Siege Dancers'),
	'CabalSkyBurners' => array('factionId' => 'CabalSkyBurners', 'factionName' => 'Sky Burners'),
);

$prefixes = array(
	'Fallen' => array('heroic' => 'Elder', 'epic' => 'Noble', 'major' => 'Reaver'),
	'Hive' => array('heroic' => 'Chosen', 'epic' => 'Ascendant', 'major' => 'Hallowed'),
	'Vex' => array('heroic' => 'Disciple', 'epic' => 'Zealot', 'major' => 'Axis'),
	'Cabal' => array('heroic' => 'Fleet', 'epic' => 'Elite', 'major' => 'Imperial'),
	'Taken' => array('heroic' => 'Consumed', 'epic' => 'Devoured', 'major' => 'Tortured'),
);

$weapons = array(
	'ShockPistol' => array('weaponId' => 'ShockPistol', 'weaponName' => 'Shock Pistol', 'damageType' => 'Arc', 'enemyRace' => 'Fallen'),
	'ShockRifle' => array('weaponId' => 'ShockRifle', 'weaponName' => 'Shock Rifle', 'damageType' => 'Arc', 'enemyRace' => 'Fallen'),
	'WireRifle' => array('weaponId' => 'WireRifle', 'weaponName' => 'Wire Rifle', 'damageType' => 'Arc', 'enemyRace' => 'Fallen'),
	'ShrapnelLauncher' => array('weaponId' => 'ShrapnelLauncher', 'weaponName' => 'Shrapnel Launcher', 'damageType' => 'Solar', 'enemyRace' => 'Fallen'),
	'ShockDagger' => array('weaponId' => 'ShockDagger', 'weaponName' => 'Shock Dagger', 'damageType' => 'Arc', 'enemyRace' => 'Fallen'),
	'ShockBlade' => array('weaponId' => 'ShockBlade', 'weaponName' => 'Shock Blade', 'damageType' => 'Arc', 'enemyRace' => 'Fallen'),
	'ShockGrenade' => array('weaponId' => 'ShockGrenade', 'weaponName' => 'Shock Grenade', 'damageType' => 'Arc', 'enemyRace' => 'Fallen'),
	'ShockTurret' => array('weaponId' => 'ShockTurret', 'weaponName' => 'Shock Turret', 'damageType' => 'Arc', 'enemyRace' => 'Fallen'),

	'Shredder' => array('weaponId' => 'Shredder', 'weaponName' => 'Shredder', 'damageType' => 'Void', 'enemyRace' => 'Hive'),
	'Boomer' => array('weaponId' => 'Boomer', 'weaponName' => 'Boomer', 'damageType' => 'Arc', 'enemyRace' => 'Hive'),
	'Cleaver' => array('weaponId' => 'Cleaver', 'weaponName' => 'Cleaver', 'damageType' => '', 'enemyRace' => 'Hive'),

	'Exploder' => array('weaponId', 'Exploder', 'weaponName' => 'Explode', 'enemyRace' => 'Hive'),

	'SlapRifle' => array('weaponId' => 'SlapRifle', 'weaponName' => 'Slap Rifle', 'damageType' => 'Solar', 'enemyRace' => 'Vex'),
	'LineRifle' => array('weaponId' => 'LineRifle', 'weaponName' => 'Line Rifle', 'damageType' => 'Solar', 'enemyRace' => 'Vex'),
	'TorchHammer' => array('weaponId' => 'TorchHammer', 'weaponName' => 'Torch Hammer', 'damageType' => 'Void', 'enemyRace' => 'Vex'),
	'SlapGrenade' => array('weaponId' => 'SlapGrenade', 'weaponName' => 'Slap Grenade', 'damageType' => 'Void', 'enemyRace' => 'Vex'),

	'SlugRifle' => array('weaponId' => 'SlugRifle', 'weaponName' => 'Slug Rifle', 'damageType' => 'Solar', 'enemyRace' => 'Cabal'),
	'ProjectionRifle' => array('weaponId' => 'ProjectionRifle', 'weaponName' => 'Projection Rifle', 'damageType' => 'Solar', 'enemyRace' => 'Cabal'),
	'HeavySlugThrower' => array('weaponId' => 'HeavySlugThrower', 'weaponName' => 'Heavy Slug Thrower', 'damageType' => 'Solar', 'enemyRace' => 'Cabal'),
	'CabalShield' => array('weaponId' => 'CabalShield', 'weaponName' => 'Cabal Shield', 'damageType' => '', 'enemyRace' => 'Cabal'),

	'WebMines' => array('weaponId' => 'WebMines', 'weaponName' => 'Web Mines', 'damageType' => 'Arc', 'enemyRace' => 'Fallen'),
	'ScorchCannon' => array('weaponId' => 'ScorchCannon', 'weaponName' => 'Scorch Cannon', 'damageType' => 'Solar', 'enemyRace' => 'Fallen'),

	'TakenWireRifle' => array('weaponId' => 'TakenWireRifle', 'weaponName' => 'Wire Rifle', 'damageType' => 'Solar', 'enemyRace' => 'Taken'),
	'TakenShrapnelLauncher' => array('weaponId' => 'TakenShrapnelLauncher', 'weaponName' => 'Shrapnel Launcher', 'damageType' => 'Arc', 'enemyRace' => 'Taken'),
	'TakenShredder' => array('weaponId' => 'TakenShredder', 'weaponName' => 'Shredder', 'damageType' => 'Solar', 'enemyRace' => 'Taken'),
	'TakenBoomer' => array('weaponId' => 'TakenBoomer', 'weaponName' => 'Taken Boomer', 'damageType' => 'Void', 'enemyRace' => 'Taken'),
	'TakenLineRifle' => array('weaponId' => 'TakenLineRifle', 'weaponName' => 'Line Rifle', 'damageType' => 'Void', 'enemyRace' => 'Taken'),
	'TakenTorchHammer' => array('weaponId' => 'TakenTorchHammer', 'weaponName' => 'Torch Hammer', 'damageType' => 'Solar', 'enemyRace' => 'Taken'),
	
	'TakenNecromanticGaze' => array('weaponId' => 'TakenNecromanticGaze', 'weaponName' => 'Necromantic Gaze', 'damageType' => 'Solar', 'enemyRace' => 'Taken'),
	'TakenBurn' => array('weaponId' => 'TakenBurn', 'weaponName' => 'Burn', 'damageType' => 'Solar', 'enemyRace' => 'Taken'),
	'RageOfOryx' => array('weaponId' => 'RageOfOryx', 'weaponName' => 'Rage of Oryx', 'enemyRace' => 'Taken'),

);

$enemyOverrides = array(
	'FallenDreg' => array('enemyWeapon' => 'ShockPistol', 'enemyOtherWeapons' => array('ShrapnelLauncher'), 'enemyTier' => 'Minor', 'heroicPrefix' => ''),
	'FallenVandal' => array('enemyWeapon' => 'ShockRifle', 'enemyOtherWeapons' => array('WireRifle', 'ShrapnelLauncher'), 'enemyTier' => 'Minor'),
	//'FallenVandalElite' => array(),
	'FallenMajorStealthVandalA' => array('enemyName' => 'Stealth Vandal', 'enemyTier' => 'Minor'),
	'FallenMajorStealthVandalAShockBlade' => array('enemyName' => 'Stealth Vandal'),
	'FallenMajorStealthVandalAWireRifle' => array('enemyName' => 'Stealth Vandal'),
	'FallenMajorVandalAShockBlade' => array('enemyName' => 'Revear Vandal'),
	//'MajorStealthValdalAShockBlade' => array('raceClass' => 'FallenVandal'),
	'FallenCaptain' => array('enemyShield' => 'ArcShield', 'enemyWeapon' => 'ShrapnelLauncher', 'enemyOtherWeapons' => array('ShockRifle'), 'enemyTier' => 'Minor'),
	//'FallenCaptainEliteShockBlade' => array(),
	'FallenMajorCaptainAShockBlade' => array('enemyName' => 'Captain'),
	'FallenShank' => array('enemyTier' => 'Minor'),
	'EliteShankA' => array('enemyName' => 'Noble Shank', 'enemyShield' => 'SolarShield'),
	'FallenServitor' => array('enemyTier' => 'Minor'),
	'FallenReaver' => array('enemyName' => 'Walker', 'raceClass' => 'FallenReaver', 'enemyTier' => 'Ultra'),
	'FallenSkiff' => 'Skiff',

	'HiveAcolyte' => array('enemyWeapon' => 'Shredder', 'enemyOtherWeapons' => array('Boomer'), 'enemyTier' => 'Minor'),
	'HiveEliteAcolyteA' => 'Ascendant Acolyte',
	'HiveKnight' => array('enemyWeapon' => 'Boomer', 'enemyOtherWeapons' => array('Shredder'), 'enemyTier' => 'Minor'),
	'HiveKnightElite' => array('enemyShield' => 'ArcShield'),
	'HiveMajorKnightACleaver' => array('enemyName' => 'Knight'),
	'HiveWizard' => array('enemyShield' => 'SolarShield', 'enemyTier' => 'Minor'),
	//'HiveKnightElite' => array(),
	'HiveOgre' => array('enemyTier' => 'Minor'),
	'EliteOgreA' => 'Ascendant Ogre',
	'HiveThrall' => array('enemyTier' => 'Minor'),
	'HiveCutter' => 'Tomb Ship',

	'VexGoblin' => array('enemyTier' => 'Minor', 'enemyWeapon' => 'SlapRifle', 'enemyOtherWeapons' => array('TorchHammer')),
	'VexHobgoblin' => array('enemyTier' => 'Minor', 'enemyWeapon' => 'LineRifle'),
	//'EliteHobgoblinA' => array(),
	'VexMinotaur' => array('enemyTier' => 'Minor', 'enemyShield' => 'VoidShield', 'enemyWeapon' => 'TorchHammer', 'enemyOtherWeapons' => array('SlapRifle'), 'enemyTier' => 'Minor'),
	//'VexMinotaurElite' => array(),
	'VexHarpy' => array('enemyTier' => 'Minor'),
	'EliteHarpyA' => array('enemyName' => 'Harpy Zealot', 'enemyShield' => 'ArcShield'),
	'VexCyclops' => array('enemyTier' => 'Minor', 'enemyName' => 'Cyclops', 'raceClass' => 'VexCyclops'),

	'CabalLegionary' => array('enemyTier' => 'Minor', 'enemyWeapon' => 'SlugRifle'),
	'CabalPhalanx' => array('enemyTier' => 'Minor', 'enemyWeapon' => 'SlugRifle'),
	'CabalCenturion' => array('enemyShield' => 'SolarShield', 'enemyTier' => 'Minor', 'enemyWeapon' => 'ProjectionRifle'),
	'CabalColossus' => array('enemyTier' => 'Minor', 'enemyWeapon' => 'HeavySlugThrower'),
	'CabalPsion' => array('enemyTier' => 'Minor', 'enemyWeapon' => 'SlugRifle'),
	'CabalPsionElite' => array('enemyShield' => 'VoidShield'),
	'CabalInterceptor' => 'Interceptor',
	'CabalDropship' => 'Harvester',
	//'CabalGoliath' => '',

	'FallenUltraCaptainA' => array('enemyShield' => ''),
	'HiveUltraKnightA' => array('enemyShield' => ''),
	'VexUltraMinotaurA' => array('enemyShield' => ''),
	'CabalUltraCenturionA' => array('enemyShield' => ''),

	// ============================
	// Vanilla Destiny
	// ============================
	'R1S1EventCosmoMajor3' => array('raceClass' => 'HiveMajorKnightA', 'location' => 'Rocketyard', 'faction' => 'HiveHiddenSwarm'),
	'R1S1EventCosmoMajor4' => array('raceClass' => 'HiveMajorAcolyteA', 'location' => 'Rocketyard', 'enemyWeapon' => 'Boomer', 'faction' => 'HiveHiddenSwarm'),
	'R1S1EventCosmoMajor5' => array('raceClass' => 'FallenMajorVandalA', 'location' => 'Mothyards', 'enemyWeapon' => 'WireRifle', 'faction' => 'FallenDevils'),
	'R1S1EventCosmoMajor6' => array('raceClass' => 'FallenMajorVandalA', 'location' => 'ForgottenShore', 'faction' => 'FallenDevils'),
	'R1S1EventCosmoMajor7' => array('raceClass' => 'FallenMajorCaptainA', 'location' => 'ForgottenShore', 'faction' => 'FallenDevils'),

	//'R1S1EventMarsMinor0' => '',
	//'R1S1EventMarsMinor1' => '',
	//'R1S1EventMarsMinor2' => '',
	'R1S1EventMarsMajor0' => array('raceClass' => 'CabalMajorCenturionA', 'location' => 'Scablands'),
	//'R1S1EventMarsMajor1' => '',
	'R1S1EventMarsMajor2' => array('raceClass' => 'CabalMajorCenturionA', 'location' => 'TheHollows'),
	'R1S1EventMarsMajor3' => array('raceClass' => 'VexMajorMinotaurA', 'location' => 'TheBuriedCity'),

	// A Guardian Rises
	'R1S1StoryCosmo0Minor0' => array('enemyShield' => '', 'faction' => 'FallenDevils', 'location' => 'Dock13'),

	// Restoration
	'R1S1StoryCosmo0Ultra0' => array('raceClass' => 'FallenUltraCaptainA', 'faction' => 'FallenDevils', 'location' => 'Dock13'),

	// The Dark Within
	//'R1S1StoryCosmo1Major0' => '',
	'R1S1StoryCosmo1Major1' => array('raceClass' => 'HiveMajorWizardA', 'location' => 'LunarComplex', 'faction' => 'HiveHiddenSwarm'),

	// The Warmind
	//'R1S1StoryCosmo2Major0' => '',

	// The Last Array
	//'R1S1StoryCosmo3Ultra0' => '',

	// The Dark Beyond
	//'R1S1StoryMoon1Minor0' => '',
	'R1S1StoryMoon1Major0' => array('raceClass' => 'HiveMajorWizardA', 'location' => 'TempleOfCrota', 'faction' => 'HiveHiddenSwarm'),

	// The World's Grave
	'R1S1StoryMoon3Major0' => array('raceClass' => 'HiveMajorKnightA', 'location' => 'CircleOfBones', 'faction' => 'HiveHiddenSwarm'),

	// The Sword of Crota
	'R1S1StoryMoon4Major0' => array('cardId' => 502090, 'raceClass' => 'HiveMajorKnightACleaver', 'location' => 'Hellmouth', 'faction' => 'HiddenSwarm'),
	'R1S1StoryMoon4Major1' => array('cardId' => 502090, 'raceClass' => 'HiveMajorKnightACleaver', 'location' => 'TheGatehouse', 'faction' => 'HiddenSwarm'),
	'R1S1StoryMoon4Major2' => array('cardId' => 502090, 'raceClass' => 'HiveMajorKnightACleaver', 'location' => 'TheGatehouse', 'faction' => 'HiddenSwarm'),
	'R1S1StoryMoon4Major3' => array('cardId' => 502090, 'raceClass' => 'HiveMajorKnightACleaver', 'location' => 'TheGatehouse', 'faction' => 'HiddenSwarm'),

	// Chamber of Night
	'R1S1StoryMoon5Minor0' => array('raceClass' => 'HiveMajorWizardA', 'location' => 'ChamberOfTheNight', 'faction' => 'HiveHiddenSwarm'),
	'R1S1StoryMoon5Major0' => array('raceClass' => 'HiveMajorOgreA', 'location' => 'ChamberOfTheNight', 'faction' => 'HiveHiddenSwarm'),

	// Shrine of Oryx
	'R1S1StoryMoon6Major0' => array('raceClass' => 'FallenMajorCaptainA', 'location' => 'TheGatehouse', 'faction' => 'FallenExile'),
	'R1S1StoryMoon6Ultra0' => array('raceClass' => 'HiveUltraKnightA', 'location' => 'ShrineOfOryx', 'faction' => 'HiveBloodOfOryx'),

	// Ishtar Collective
	'R1S1StoryVenus2Major0' => array('raceClass' => 'VexCyclops', 'location' => 'IshtarCliffs', 'faction' => 'VexHezenCorrective'),

	// The Archive
	'R1S1StoryVenus5Major0' => array('raceClass' => 'FallenMajorCaptainA', 'location' => 'TheArchive', 'faction' => 'FallenWinter'),
	'R1S1StoryVenus5Major1' => array('raceClass' => 'FallenMajorServitorA', 'location' => 'HallOfWhispers', 'faction' => 'FallenWinter'),

	// Scourge of Winter
	'R1S1StoryVenus6Major0' => array('raceClass' => 'FallenMajorVandalA', 'faction' => 'FallenWinter', 'enemyWeapon' => 'ShockBlade'),
	'R1S1StoryVenus6Major1' => array('enemyName' => 'Kell\'s Guard', 'raceClass' => 'FallenMajorVandalA', 'faction' => 'FallenWinter', 'enemyWeapon' => 'ShockRifle'),
	'R1S1StoryVenus6Ultra0' => array('raceClass' => 'FallenUltraCaptainA', 'location' => 'WintershipSimiksFel', 'faction' => 'FallenWinter'),

	// Eye of a Gate Lord
	'R1S1StoryVenus7Ultra0' => array('raceClass' => 'VexUltraMinotaurA', 'location' => 'EndlessSteps'),

	// Exclusion Zone
	'R1S1StoryMars1Major0' => array('raceClass' => 'CabalMajorCenturionA', 'location' => 'GiantsPass', 'faction' => 'SandEaters'),

	//'R1S1StoryMars2Major0' => '',

	// The Buried City
	'R1S1StoryMars3Major0' => array('raceClass' => 'CabalMajorCenturionA', 'faction' => 'CabalSandEaters', 'location' => 'TheBuriedCity'),

	// The Garden's Spire
	'R1S1StoryMars5Ultra0' => array('raceClass' => 'CabalUltraCenturionA', 'faction' => 'CabalBlindLegion', 'location' => 'TheLegionsKeep'),

	// A Rising Tide
	'R1S1StoryMars6Major0' => array('raceClass' => 'VexMajorMinotaurA', 'faction' => 'VexVirgo', 'location' => 'TharsisJunction'),

	// The Black Garden
	'R1S1StoryMars7Major0' => array('raceClass' => 'MajorHydraA', 'location' => 'BlackGardenDescent', 'faction' => 'VexDivisive'),
	'R1S1StoryMars7Ultra0' => array('raceClass' => 'VexUltraMinotaurA', 'location' => 'BlackGardenHeart', 'cardId' => 504150, 'faction' => 'VexHezenCorrective'),
	'R1S1StoryMars7Ultra1' => array('raceClass' => 'VexUltraMinotaurA', 'location' => 'BlackGardenHeart', 'cardId' => 504150, 'faction' => 'VexDescendants'),
	'R1S1StoryMars7Ultra2' => array('raceClass' => 'VexUltraMinotaurA', 'location' => 'BlackGardenHeart', 'cardId' => 504150, 'faction' => 'VexPrecursors'),

	// Thorn Bounty
	'R1S1BountyMoon2Major0' => array('enemyName' => 'Xyor, the Unwed', 'raceClass' => 'HiveMajorWizardA', 'faction' => 'HiveHiddenSwarm', 'location' => 'TheSummoningPits'),

	// The Devil's Lair
	'R1S1StrikeCosmo1Major0' => array('raceClass' => 'FallenMajorCaptainA', 'faction' => 'FallenDevils'),
	'R1S1StrikeCosmo1Ultra0' => array('raceClass' => 'FallenUltraServitorA', 'faction' => 'FallenDevils'),

	// The Summoning Pits
	'R1S1StrikeMoon2Major0' => array('raceClass' => 'HiveMajorWizardA', 'location' => 'TheGatehouse', 'faction' => 'HiveHiddenSwarm'),
	'R1S1StrikeMoon2Ultra0' => array('raceClass' => 'HiveUltraOgreA', 'location' => 'TheSummoningPits', 'faction' => 'HiveSpawnOfCrota'),

	// The Nexus Mind
	'R1S1StrikeVenus1Ultra0' => array('raceClass' => 'UltraHydraA', 'location' => 'TheNexus'),

	// Winters Run
	'R1S1StrikeVenus2Ultra0' => array('raceClass' => 'FallenUltraCaptainA', 'location' => 'WintersRun', 'faction' => 'FallenWinter'),

	// Dust Palace
	'R1S1StrikeMars1Major0' => array('raceClass' => 'CabalMajorPsionA', 'enemyShield' => 'ArcShield', 'faction' => 'CabalIceReapers'),
	'R1S1StrikeMars1Major1' => array('raceClass' => 'CabalMajorPsionA', 'enemyShield' => 'SolarShield', 'faction' => 'CabalIceReapers'),
	'R1S1StrikeMars1Major2' => array('raceClass' => 'CabalMajorPsionA', 'enemyShield' => 'VoidShield', 'faction' => 'CabalIceReapers'),
	'R1S1StrikeMars1Major3' => array('raceClass' => 'CabalMajorPsionA', 'epic' => array('enemyShield' => 'ArcShield'), 'faction' => 'CabalIceReapers'),
	'R1S1StrikeMars1Major4' => array('raceClass' => 'CabalMajorPsionA', 'epic' => array('enemyShield' => 'SolarShield'), 'faction' => 'CabalIceReapers'),
	'R1S1StrikeMars1Major5' => array('raceClass' => 'CabalMajorPsionA', 'epic' => array('enemyShield' => 'VoidShield'), 'faction' => 'CabalIceReapers'),
	//'R1S1StrikeMars1Major6' => array(),
	'R1S1StrikeMars1Major7' => array('raceClass' => 'CabalMajorGladiatorA'),
	//'R1S1StrikeMars1Major8' => array(),
	'R1S1StrikeMars1Major9' => array('raceClass' => 'CabalMajorCenturionA'),
	//'R1S1StrikeMars1Major10' => array(),

	// Cerberus Vae III
	'R1S1StrikeMars2Major0' => array('raceClass' => 'CabalMajorCenturionA', 'location' => 'Trenchworks'),
	'R1S1StrikeMars2Major1' => array('raceClass' => 'CabalMajorCenturionA', 'location' => 'Trenchworks'),
	'R1S1StrikeMars2Major2' => array('raceClass' => 'CabalMajorCenturionA', 'location' => 'Trenchworks'),
	'R1S1StrikeMars2Ultra0' => array('raceClass' => 'CabalUltraGladiatorA', 'location' => 'CerberusVaeIII'),

	// Vault of Glass
	'R1S1RaidVenus0BobgoblinFuture' => array('raceClass' => 'VexMajorHobgloblinA', 'faction' => 'VexPrecursors'),
	'R1S1RaidVenus0GoblinFuture' => array('raceClass' => 'VexMajorGloblinA', 'faction' => 'VexPrecursors'),
	'R1S1RaidVenus0GoblinPast' => array('raceClass' => 'VexMajorGloblinA', 'faction' => 'VexDescendants'),
	'R1S1RaidVenus0HobgoblinPast' => array('raceClass' => 'VexMajorHobgloblinA', 'faction' => 'VexDescendants'),
	'R1S1RaidVenus0HarpyMissile' => array('faction' => 'VexAphix'),
	'r1S1RaidVenus0GoblinHeadless' => array('raceClass' => 'VexMajorGoblinA'),

	'R1S1RaidVenus0Major0' => array('raceClass' => 'VexMajorHarpyA', 'cardId' => 603025, 'location' => 'GorgonsLabyrinth'),
	'R1S1RaidVenus0Major1' => array('raceClass' => 'VexMajorHarpyA', 'cardId' => 603025, 'location' => 'GorgonsLabyrinth'),
	'R1S1RaidVenus0Major2' => array('raceClass' => 'VexMajorHarpyA', 'cardId' => 603025, 'location' => 'GorgonsLabyrinth'),
	'R1S1RaidVenus0Major3' => array('raceClass' => 'VexMajorMinotaurA', 'location' => 'VaultOfGlass', 'faction' => 'VexDescendants'),
	'R1S1RaidVenus0Major4' => array('raceClass' => 'VexMajorMinotaurA', 'faction' => 'VexVirgo'),
	'R1S1RaidVenus0Major5' => array('raceClass' => 'VexMajorMinotaurA', 'faction' => 'VexPrecursors'),
	'R1S1RaidVenus0Major6' => array('raceClass' => 'MajorHydraA', 'faction' => 'VexDescendants'),
	'R1S1RaidVenus0Major7' => array('raceClass' => 'MajorHydraA'),
	'R1S1RaidVenus0Major8' => array('raceClass' => 'MajorHydraA', 'faction' => 'VexPrecursors'),
	'R1S1RaidVenus0Ultra0' => array('raceClass' => 'UltraHydraA'),
	'R1S1RaidVenus0Ultra1' => array('raceClass' => 'VexUltraMinotaurA'),

	// Grouped Enemies
	'TheGorgons' => array('raceClass' => 'VexMajorHarpyA', 'cardId' => 603025, 'activityType' => 'Raid', 'activity' => 'RaidVenus0', 'destination' => 'Venus', 'location' => 'GorgonsLabyrinth'),
	'DustPalaceBosses' => array('raceClass' => 'CabalMajorPsionA', 'cardId' => 601040, 'activityType' => 'Strike', 'activity' => 'StrikeMars1'),
	'ThePsionFlayers' => array('raceClass' => 'CabalMajorPsionA', 'cardId' => 601040, 'activityType' => 'Strike', 'activity' => 'StrikeMars1'),
	'SwarmPrinces' => array('raceClass'=> 'HiveMajorKnightACleaver', 'cardId' => 502090, 'activityType' => 'Story', 'destination' => 'Moon', 'faction' => 'HiveHiddenSwarm'),
	'BossesAtVaultOfGlass' => array('cardId' => 603020),
	'RaidBosses' => array('cardId' => 603010),
	'SolProgeny' => array('enemyName' => 'Sol Progeny', 'raceClass' => 'VexUltraMinotaurA', 'location' => 'BlackGardenHeart', 'cardId' => 504150, 'activityType' => 'Story', 'activity' => 'StoryMars7'),

	// ============================
	// Expansion I: The Dark Below
	// ============================

	'R1S2BountyCosmoMinor0' => array('enemyName' => 'Servant of the Hand', 'raceClass' => 'HiveThrall', 'location' => 'LunarComplex', 'faction' => 'HiveSpawnOfCrota'),
	'R1S2BountyCosmoMinor1' => array('enemyName' => 'Servant of the Eyes', 'raceClass' => 'HiveMajorKnightACleaver', 'location' => 'TerrestrialComplex', 'faction' => 'HiveSpawnOfCrota'),
	'R1S2BountyCosmoMinor2' => array('enemyName' => 'Servant of the Heart', 'raceClass' => 'HiveAcolyte', 'location' => 'Refinery', 'faction' => 'HiveSpawnOfCrota'),
	'R1S2BountyCosmoMajor0' => array('enemyName' => 'Blade of Crota', 'raceClass' => 'HiveMajorKnightACleaver', 'faction' => 'HiveSpawnOfCrota', 'cardId' => 692010),
	'R1S2BountyCosmoMajor1' => array('enemyName' => 'Sardon, Fist of Crota', 'raceClass'=> 'HiveMajorKnightACleaver', 'faction' => 'HiveSpawnOfCrota', 'location' => 'TheGrottos'),
	'R1S2BountyCosmoMajor2' => array('enemyName' => 'Hand of Crota', 'raceClass'=> 'HiveMajorKnightACleaver', 'faction' => 'HiveSpawnOfCrota', 'location' => 'LunarComplex'),
	//'R1S2BountyCosmoMajor3' => '',
	'R1S2BountyCosmoMajor4' => array('enemyName' => 'Heart of Crota', 'raceClass'=> 'HiveWizard', 'faction' => 'HiveSpawnOfCrota', 'location' => 'Refinery'),
	'R1S2BountyCosmoMajor5' => array('enemyName' => 'Urzok, the Hated', 'raceClass'=> 'HiveMajorKnightACleaver', 'faction' => 'HiveSpawnOfCrota', 'location' => 'Skywatch', 'enemyShield' => 'ArcShield'),
	//'R1S2BountyCosmoMajor6' => '',
	'R1S2BountyCosmoMajor7' => array('enemyName' => 'Eyes of Crota', 'raceClass'=> 'HiveAcolyte', 'faction' => 'HiveSpawnOfCrota', 'location' => 'TerrestrialComplex', 'enemyWeapon' => 'Boomer'),
	'R1S2BountyCosmoUltra0' => array('enemyName' => 'Might of Crota', 'raceClass' => 'HiveOgre', 'faction' => 'HiveSpawnOfCrota', 'location' => 'BunkerRas2'),

	'R1S2BountyMoonMinor0' => array('enemyName' => 'Watcher of Crota', 'raceClass' => 'HiveWizard', 'location' => 'BunkerRas2', 'faction' => 'HiveSpawnOfCrota'),

	// Ritual of Sacrifice
	//'R1S2BountyMoonMinor1' => '', // Malgor, the Forsaken (Ogre)
	//'R1S2BountyMoonMinor2' => '', // Thogar, the Forsaken (Ogre)

	'R1S2BountyMoonTurret0' => array('enemyName' => 'Soul of Crota', 'raceName' => 'Hive', 'enemyTier' => 'Major', 'location' => 'ChamberOfNight'),
	//'R1S2BountyMoonUltra0' => '',

	//'R1S2EventAnyMajor1' => '',
	//'R1S2EventCosmoMinor0' => '',
	//'R1S2EventCosmoMinor1' => '',
	//'R1S2EventCosmoMinor2' => '',
	//'R1S2EventCosmoMinor3' => '',

	//'R1S2StoryCosmo5Major0' => '',
	//'R1S2StoryCosmo6Ultra0' => '',

	// The Wakening
	'R1S2StoryMoon7Major0' => array('enemyName' => 'Watcher of Crota', 'raceClass' => 'HiveMajorWizardA', 'location' => 'ChamberOfNight'),
	//'R1S2StoryMoon7Major1' => '',

	// The Will of Crota
	//'R1S2StrikeCosmoMajor0' => '',
	'R1S2StrikeCosmo1Major0' => array('raceClass' => 'HiveWizard', 'enemyShield' => 'ArcShield', 'faction' => 'HiveSpawnOfCrota', 'location' => 'JovianComplex', 'cardId' => 601071),
	//'R1S2StrikeCosmo1Major1' => '',
	'R1S2StrikeCosmo2Major0' => array('enemyName' => 'Phyksin, King Baron', 'raceClass' => 'FallenCaptain', 'faction' => 'FallenKings'),
	//'R1S2StrikeCosmo2Major1' => '',
	//'R1S2StrikeCosmo2Major2' => '',
	'R1S2StrikeCosmo2Major3' => array('enemyName' => 'Protector of the Will', 'raceClass' => 'HiveKnight', 'enemyWeapon' => 'Cleaver', 'faction' => 'HiveBloodOfOryx', 'location' => 'Skywatch'),

	// The Undying Mind
	'R1S2StrikeMars3Minor0' => array('enemyName' => 'Depraved Goblin', 'raceClass' => 'VexGoblin', 'faction' => 'VexPrecursors'),
	//'R1S2StrikeMars3Minor1' => '',
	//'R1S2StrikeMars3Major0' => '',
	'R1S2StrikeMars3Ultra0' => array('raceClass' => 'UltraHydraA', 'faction' => 'VexDivisive', 'cardId' => 603073),


	'R1S2RaidMoon0Major0' => array('enemyName' => 'Ir Yût, the Deathsinger', 'raceClass' => 'HiveMajorWizardA', 'location' => 'OversoulThrone'),
	'R1S2RaidMoon0Major1' => array('enemyName' => 'Gatekeeper', 'raceClass' => 'HiveMajorKnightACleaver', 'location' => 'OversoulThrone'),
	'R1S2RaidMoon0Major2' => array('enemyName' => 'Swordbearer', 'raceClass' => 'HiveMajorKnightACleaver', 'location' => 'OversoulThrone'),
	//'R1S2RaidMoon0Major3' => '',
	//'R1S2RaidMoon0Major4' => '',
	'R1S2RaidMoon0Major5' => array('enemyName' => 'Thrall', 'raceClass' => 'HiveThrall', 'location' => 'TheStills'), // Glow in the Dark Thrall
	'R1S2RaidMoon0Ultra0' => array('enemyName' => 'Crota, Son of Oryx', 'raceClass' => 'HiveUltraKnightA', 'enemyWeapon' => 'Cleaver', 'location' => 'OversoulThrone'),
	'R1S2RaidMoon0LanternDisplayName' => array('enemyName' => 'Abyssal Lamp', 'raceName' => 'Hive', 'location' => 'TheStills'),

	// ============================
	// Expansion II: House of Wolves
	// ============================

	//'FallenSpiderShank' => '',

	// The Ruling House
	'R1S3StoryCosmo7Major0' => array('enemyName' => 'Vekis, King Baron', 'raceClass' => 'FallenCaptain', 'enemyWeapon' => 'ShockBlade', 'faction' => 'FallenKings'),
	'R1S3StoryCosmo7Major1' => array('enemyName' => 'Yavek, Wolf Baron', 'raceClass' => 'FallenCaptain', 'enemyWeapon' => 'ShockRifle'),
	'R1S3StoryCosmo7Major2' => array('enemyName' => 'Paskin, King Baron', 'raceClass' => 'FallenCaptain', 'enemyWeapon' => 'ShrapnelLauncher'),

	'R1S3StoryPersuitMajor0' => array('enemyName' => 'Silent Fang', 'raceClass' => 'FallenVandal', 'faction' => 'FallenWolves', 'cardId' => 688220),
	'R1S3StoryPersuitMajor1' => array('enemyName' => 'Wolves\' Guard', 'raceClass' => 'FallenCaptain', 'enemyWeapon' => 'ScorchCannon', 'faction' => 'FallenWolves', 'cardId' => 688210),
	'R1S3StoryPersuitMajor2' => array('enemyName' => 'Wolf High Servitor', 'raceClass' => 'FallenServitor', 'faction' => 'FallenWolves', 'cardId' => 688160),
	//'R1S3StoryPactMajor0' => '',
	'R1S3StoryPactMajor1' => array('enemyName' => 'Wolf High Servitor', 'raceClass' => 'FallenServitor', 'faction' => 'FallenWolves', 'cardId' => 688160),
	'R1S3StoryTraitorMajor0' => array('enemyName' => 'Vechron, Spire Lord', 'raceClass' => 'VexMajorHarpyA', 'faction' => 'VexHezenProtective'),
	'R1S3StoryTraitorMajor1' => array('enemyName' => 'Headless Praetorian', 'raceClass' => 'R1S1RaidVenus0Major4'),

	// The Archon-Slayer
	'R1S3StoryNightcrawlerUltra0' => array('enemyName' => 'Skoriks, Archon-Slayer', 'raceClass' => 'FallenUltraCaptainA', 'cardId' => 688030),

	'R1S3StrikeMoonMajor0' => array('enemyName' => 'Wolf Captain', 'raceClass' => 'FallenCaptain', 'enemyWeapon' => 'ShrapnelLauncher', 'faction' => 'FallenWolves', 'cardId' => 688230),
	'R1S3StrikeMoonUltra0' => array('enemyName' => 'Wolf Walker', 'raceClass' => 'FallenReaver', 'faction' => 'FallenWolves'),
	'R1S3StrikeMoonUltra1' => array('enemyName' => 'Taniks, the Scarred', 'raceClass' => 'FallenUltraCaptainA'),

	'R1S3ArenaReefMajor0' => array('enemyName' => 'Worm Keeper', 'raceClass' => 'HiveMajorWizardA', 'faction' => 'HiveHiddenSwarm'),
	'R1S3ArenaReefUltra1' => array('enemyName' => 'Pilot Servitor', 'raceClass' => 'FallenUltraServitorA'),
	'R1S3ArenaReefUltra2' => array('enemyName' => 'Val Aru\'un', 'raceClass' => 'CabalUltraCenturionA'),
	'R1S3ArenaReefUltra3' => array('enemyName' => 'Overmind Minotaur', 'raceClass' => 'VexUltraMinotaurA'),
	'R1S3ArenaReefUltra4' => array('enemyName' => 'Wretched Knight', 'raceClass' => 'HiveUltraKnightA'),
	'R1S3ArenaReefUltra5' => array('enemyName' => 'Urrox, Flame Prince', 'raceClass' => 'HiveUltraKnightA'),
	'R1S3ArenaReefUltra6' => array('enemyName' => 'Gulrot, Unclean', 'raceClass' => 'HiveUltraOgreA'),
	'R1S3ArenaReefUltra8' => array('enemyName' => 'Kaliks Reborn', 'raceClass' => 'FallenUltraServitorA'),
	'R1S3ArenaReefUltra9' => array('enemyName' => 'Qodron, Gate Lord', 'raceClass' => 'VexUltraMinotaurA'),
	'R1S3ArenaReefUltra11' => array('enemyName' => 'Valus Trau\'ug', 'raceClass' => 'CabalUltraCenturionA'),
	'R1S3ArenaReefUltra12' => array('enemyName' => 'Skolas, Kell of Kells', 'raceClass' => 'FallenUltraCaptainA', 'cardId' => 601904),

	'AiShankExploder' => array('enemyName' => 'Exploder Shank', 'expansionId' => 'R1S3'),
	'AiShankShockTurret' => array('enemyName' => 'Repeater Shank', 'expansionId' => 'R1S3'),
	'AiShankWireRifle' => array('enemyName' => 'Tracer Shank', 'expansionId' => 'R1S3'),
	'AiMajorShankShockTurret' => array('enemyName' => 'Repeater Shank', 'expansionId' => 'R1S3', 'enemyTier' => 'Major'),
	'AiMajorCaptainSpearLauncherHouseOfWolves' => array('enemyName' => 'Scorch Captain', 'raceClass' => 'FallenMajorCaptainA', 'enemyWeapon' => 'ScorchCannon', 'expansionId' => 'R1S3'),

	'R1S3WantedMajor0' => array('enemyName' => 'Wolf Scavenger', 'raceClass' => 'FallenMajorDregA', 'faction' => 'FallenWolves', 'destination' => 'Moon', 'location' => 'HallOfWisdom', 'cardId' => 688140),
	//'R1S3WantedMajor1' => '',
	//'R1S3WantedMajor2' => '', // Moon
	//'R1S3WantedMajor3' => '',
	//'R1S3WantedMajor4' => '',
	//'R1S3WantedMajor5' => '', // Cosmo
	//'R1S3WantedMajor6' => '', // Venus
	//'R1S3WantedMajor8' => '', // Venus
	'R1S3WantedMajor10' => array('enemyName' => 'Silent Fang', 'raceClass' => 'FallenMajorVandalA', 'faction' => 'FallenWolves', 'destination' => 'Cosmo', 'location' => 'TheGrottos', 'cardId' => 688220),
	'R1S3WantedMajor12' => array('enemyName' => 'Tracer Shank', 'raceClass' => 'AiShankWireRifle', 'destination' => 'Cosmo', 'location' => 'TheBreach', 'cardId' => 688250), // Cosmo
	//'R1S3WantedMajor13' => '', // Venus

	/*Twisted Claw 688150 // Moon
	High Servitor 688160 // Moon
	Queenbreaker Vandal 688170 // Venus
	Howling Raider 688180 // Venus
	Repeater Shank 688190 // Venus
	Ether Runner 688200 // Venus
	Wolves' Guard 688210 // Venus
	Wolf Enforcer 688230 // Cosmo
	Queenbreaker Captain 688240 // Cosmo*/

	'R1S3WantedEventMinor0' => array('enemyName' => 'Wolf Scavenger', 'raceClass' => 'FallenDreg', 'faction' => 'FallenWolves'),
	'R1S3WantedEventMinor1' => array('enemyName' => 'Wolf Vandal', 'raceClass' => 'FallenVandal', 'faction' => 'FallenWolves'),
	//'R1S3WantedEventMinor2' => '',
	'R1S3WantedEventMinor3' => array('enemyName' => 'Wolf Servitor', 'raceClass' => 'FallenServitor', 'faction' => 'FallenWolves'),
	'R1S3WantedEventMinor4' => array('enemyName' => 'Wolf Stealth Vandal', 'raceClass' => 'FallenMajorStealthVandalA', 'faction' => 'FallenWolves'),
	//'R1S3WantedEventMinor5' => '',
	//'R1S3WantedEventMinor6' => '',
	//'R1S3WantedEventMinor7' => '',

	//'R1S3WantedEventMajor0' => '',
	'R1S3WantedEventMajor1' => array('enemyName' => 'Grayor, Wolf Assassin', 'cardId' => 688040, 'raceClass' => 'FallenMajorVandalA', 'enemyWeapon' => 'ShockBlade', 'destination' => 'Cosmo', 'location' => 'Mothyards'), // Cosmo
	'R1S3WantedEventMajor2' => array('enemyName' => 'Drevis, Wolf Baroness', 'cardId' => 688050, 'raceClass' => 'FallenMajorCaptainA', 'destination' => 'Cosmo', 'location' => 'ForgottenShore'),
	'R1S3WantedEventMajor3' => array('enemyName' => 'Pirsis, Pallas-Bane', 'cardId' => 688060, 'raceClass' => 'FallenMajorCaptainA', 'destination' => 'Cosmo', 'location' => 'TheDivide'), // Cosmo
	'R1S3WantedEventMajor4' => array('enemyName' => 'Kaliks-12', 'cardId' => 688070, 'raceClass' => 'FallenMajorServitorA', 'location' => 'Skywatch'),
	'R1S3WantedEventMajor5' => array('enemyName' => 'Veliniks, The Ravenous', 'cardId' => 688080, 'raceClass' => 'FallenMajorVandalAShockBlade', 'destination' => 'Moon', 'location' => 'Hellmouth'), // Moon
	'R1S3WantedEventMajor6' => array('enemyName' => 'Peekis, The Disavowed', 'cardId' => 688090, 'raceClass' => 'FallenMajorDregA', 'destination' => 'Venus', 'location' => 'TheCitadel'), // Venus
	'R1S3WantedEventMajor7' => array('enemyName' => 'Beltrik, The Veiled', 'cardId' => 688100, 'raceClass' => 'FallenMajorCaptainA', 'destination' => 'Venus', 'location' => 'EmberCaves'), // Venus
	'R1S3WantedEventMajor8' => array('enemyName' => 'Mecher Orbiks-11', 'cardId' => 688110, 'raceClass' => 'FallenMajorServitorA', 'destination' => 'Venus', 'location' => 'IshtarCliffs'), // Venus
	'R1S3WantedEventMajor9' => array('enemyName' => 'Saviks, Queenbreaker', 'cardId' => 688120, 'raceClass' => 'FallenMajorCaptainA', 'destination' => 'Moon', 'location' => 'AnchorOfLight'), // Moon
	'R1S3WantedEventMajor10' => array('enemyName' => 'Weksis, The Meek', 'cardId' => 688130, 'raceClass' => 'FallenMajorDregA', 'destination' => 'Moon', 'location' => 'ArchersLine'), // Moon

	// ============================
	// Expansion III: The Taken King
	// ============================

	'Taken' => array('enemyName' => 'Taken', 'expansionId' => 'R1S4'),
	'TakenCenturion' => array('enemyName' => 'Taken Centurion', 'enemyShield' => 'ArcShield', 'expansionId' => 'R1S4', 'enemyWeapon' => 'TakenProjectionRifle'),
	//'TakenGladiator' => 'Taken Colossus',
	//'TakenLegionary' => 'Taken Legionary',
	'TakenPhalanx' => array('enemyName' => 'Taken Phalanx', 'expansionId' => 'R1S4', 'enemyWeapon' => 'TakenSlugRifle'),
	'TakenPsion' => array('enemyName' => 'Taken Psion', 'expansionId' => 'R1S4', 'enemyWeapon' => 'TakenSlugRifle'),

	'TakenCaptain' => array('enemyName' => 'Taken Captain', 'enemyShield' => 'SolarShield', 'enemyWeapon' => 'TakenShrapnelLauncher', 'expansionId' => 'R1S4'),
	//'TakenDreg' => 'Taken Dreg',
	//'TakenServitor' => 'Taken Servitor',
	//'TakenShank', 'Taken Shank',
	'TakenVandal' => array('enemyName' => 'Taken Vandal', 'expansionId' => 'R1S4', 'enemyWeapon' => 'TakenWireRifle'),

	'TakenKnight' => array('enemyName' => 'Taken Knight', 'expansionId' => 'R1S4', 'enemyWeapon' => 'TakenBoomer', 'otherWeapons' => array('TakenBurn')),
	'TakenOgre' => array('enemyName' => 'Taken Ogre', 'expansionId' => 'R1S4'),
	'TakenThrall' => array('enemyName' => 'Taken Thrall', 'expansionId' => 'R1S4'),
	//'TakenThrallExploder' => 'Taken Cursed Thrall',
	'TakenAcolyte' => array('enemyName' => 'Taken Acolyte', 'expansionId' => 'R1S4', 'epic' => array('enemyShield' => 'VoidShield'), 'enemyWeapon' => 'TakenShredder'),
	'TakenWizard' => array('enemyName' => 'Taken Wizard', 'expansionId' => 'R1S4', 'enemyShield' => 'VoidShield', 'otherWeapons' => array('TakenNecromanticGaze')),

	//'TakenHarpy' => 'Taken Harpy',
	'TakenMinotaur' => array('enemyName' => 'Taken Minotaur', 'expansionId' => 'R1S4'),
	'TakenHydra' => array('enemyName' => 'Taken Hydra', 'expansionId' => 'R1S4'),
	'TakenGoblin' => array('enemyName' => 'Taken Goblin', 'expansionId' => 'R1S4'),
	'TakenHobgoblin' => array('enemyName' => 'Taken Hobgoblin', 'expansionId' => 'R1S4'),

	//'TakenBlightDisturbance' => '',
	'TakenTurret' => array('enemyName' => 'Acolyte\'s Eye', 'expansionId' => 'R1S4'),

	'HiveChampions' => array('enemyName' => 'Hive Champions', 'expansionId' => 'R1S4'),
	'CabalChampions' => array('enemyName' => 'Cabal Champions', 'expansionId' => 'R1S4'),
	'TakenChampions' => array('enemyName' => 'Taken Champions', 'expansionId' => 'R1S4'),

	'R1S4StoryCosmoElevatorUltra0' => array('enemyName' => 'Echo of Oryx', 'enemyRace' => 'Taken', 'enemyWeapon' => 'RageOfOryx'),

	'R1S4StoryPhobosDarksnowMajor2' => array('enemyName' => 'Syrok, Word of Oryx', 'raceClass' => 'TakenMajorKnightA'),

	'R1S4StoryHiveshipTopknotUltra0' => array('enemyName' => 'Oryx', 'enemyRace' => 'Hive', 'cardId' => 700460),

	'R1S4StrikeCosmoReliquaryUltra0' => array('enemyName' => 'S.A.B.E.R.-2', 'raceClass' => 'FallenMajorShankA'),
	'R1S4StrikeVenusTrackerUltra0' => array('enemyName' => 'Theosyion, The Restorative Mind', 'raceClass' => 'UltraHydraA'),
	'R1S4StrikeHiveshipPandoraUltra0' => array('enemyName' => 'Alak-Hul, The Darkblade', 'raceClass' => 'HiveUltraKnightA', 'enemyWeapon' => 'Cleaver'),
	'R1S4StrikeHiveshipOverlordUltra0' => array('enemyName' => 'Valus Tlu\'urn', 'raceClass' => 'CabalUltraCenturionA', 'faction' => 'CabalSkyBurners'),
	'R1S4StrikeHiveshipOverlordUltra1' => array('enemyName' => 'Valus Mau\'ual', 'raceClass' => 'CabalUltraCenturionA', 'faction' => 'CabalSkyBurners'),
//	'R1S1StrikeHiveship1Ultra0' => '',

	// Court of Oryx
	'R1S4EventRobHiveshipMajor0' => array('enemyName' => 'Bracus Horu\'usk', 'raceClass' => 'TakenMajorCenturionA', 'location' => 'HallOfSouls'),
	'R1S4EventRobHiveshipMajor1' => array('enemyName' => 'Krughor', 'raceClass' => 'HiveMajorOgreA', 'location' => 'HallOfSouls'),
	'R1S4EventRobHiveshipMajor2' => array('enemyName' => 'Lokaar', 'raceClass' => 'HiveMajorWizardA', 'location' => 'HallOfSouls'),
	'R1S4EventRobHiveshipMajor3' => array('enemyName' => 'Mengoor', 'raceClass' => 'HiveMajorKnightACleaver', 'location' => 'HallOfSouls', 'cardId' => 701340),
	'R1S4EventRobHiveshipMajor4' => array('enemyName' => 'Cra\'adug', 'raceClass' => 'TakenKnight', 'cardId' => 701340),
	'R1S4EventRobHiveshipMajor5' => array('enemyName' => 'Alzok Däl', 'raceClass' => 'HiveMajorWizardA', 'location' => 'HallOfSouls', 'cardId' => 700500),
	'R1S4EventRobHiveshipMajor6' => array('enemyName' => 'Gornuk Däl', 'raceClass' => 'HiveMajorWizardA', 'location' => 'HallOfSouls', 'cardId' => 700500),
	'R1S4EventRobHiveshipMajor7' => array('enemyName' => 'Zyrok Däl', 'raceClass' => 'HiveMajorWizardA', 'location' => 'HallOfSouls', 'cardId' => 700500),
	'R1S4EventRobHiveshipMajor8' => array('enemyName' => 'Vorlog', 'raceClass' => 'HiveMajorKnightA', 'enemyShield' => 'AllShield', 'location' => 'HallOfSouls'),
	'R1S4EventRobHiveshipMajor9' => array('enemyName' => 'Balwûr', 'raceClass' => 'HiveMajorWizardA', 'location' => 'HallOfSouls'),
	'R1S4EventRobHiveshipMajor10' => array('enemyName' => 'Hagrist, Blade\'s Edge', 'raceClass' => 'HiveMajorKnightACleaver', 'location' => 'HallOfSouls'),
	'R1S4EventRobHiveshipMajor11' => array('enemyName' => 'Thalnok, Fanatic of Crota', 'raceClass' => 'HiveMajorKnightACleaver', 'location' => 'HallOfSouls'),
//	'R1S4EventRobHiveshipMajor12' => '',
	'R1S4EventRobHiveshipWizards' => array('enemyName' => 'Alzok Däl, Gornuk Däl, Zyrok Däl', 'raceClass' => 'HiveMajorWizardA', 'location' => 'HallOfSouls'),
	'MengoorAndCraadug' => array('enemyName' => 'Mengoor and Cra\'adug', 'raceName' => 'Hive', 'activityType' => 'Event', 'activity' => 'EventRobHiveship', 'destination' => 'Hiveship', 'expansionId' => 'R1S4'),
	'Kagoor' => array('enemyName' => 'Kagoor', 'raceClass' => 'TakenMajorWizardA', 'activityType' => 'Event', 'activity' => 'EventRobHiveship', 'destination' => 'Hiveship', 'expansionId' => 'R1S4'),

	'PrimusTaaun' => array('enemyName' => 'Primus Ta\'aun', 'raceClass' => 'TakenUltraGladiatorA', 'destination' => 'Hiveship', 'expansionId' => 'R1S4'),
	'Baxx' => array('enemyName' => 'Baxx, Hand of Oryx', 'raceClass' => 'TakenUltraOgreA', 'destination' => 'Hiveship', 'expansionId' => 'R1S4', 'cardId' => 701320),

	// King's Fall
//	'R1S2RaidHiveship0Major0' => '',
//	'R1S2RaidHiveship0Major1' => '',
//	'R1S2RaidHiveship0Major2' => '',
//	'R1S2RaidHiveship0Major3' => '',
//	'R1S2RaidHiveship0Major4' => '',
//	'R1S2RaidHiveship0Major5' => '',
	'R1S2RaidHiveship0Major6' => array('enemyName' => 'Dredge Exploder', 'raceClass' => 'HiveMajorThrallExploderA'),
//	'R1S2RaidHiveship0Ultra0' => '',
//	'R1S2RaidHiveship0Ultra1' => '',
//	'R1S2RaidHiveship0Ultra2' => '',

	'R1S4RaidEpiphanyUltraKnight' => array('enemyName' => 'The Warpriest', 'raceClass' => 'HiveUltraKnightA', 'destination' => 'Hiveship'),
	'R1S4RaidEpiphanyUltraOgre' => array('enemyName' => 'Golgoroth', 'raceClass' => 'HiveUltraOgreA', 'destination' => 'Hiveship'),
	'R1S4RaidEpiphanyTwinWizard' => array('enemyName' => 'Ir Halak, Deathsinger', 'raceClass' => 'HiveMajorWizardA', 'enemyTier' => 'Ultra', 'destination' => 'Hiveship'),
	'R1S4RaidEpiphanyTwinWizardA' => array('enemyName' => 'Ir Anûk, Deathsinger', 'raceClass' => 'HiveMajorWizardA', 'enemyTier' => 'Ultra', 'destination' => 'Hiveship'),
	'R1S4RaidEpiphanyDeadKing' => array('enemyName' => 'Oryx, The Taken King', 'raceName' => 'Taken', 'enemyTier' => 'Ultra', 'destination' => 'Hiveship', 'cardId' => 700470),

	// ============================
	// Expansion IV: Rise of Iron
	// ============================
	'SivaCaptain' => array('enemyName' => 'SIVA Captain', 'faction' => 'FallenDevilSplicers'),
	'SivaDreg' => array('enemyName' => 'SIVA Dreg', 'faction' => 'FallenDevilSplicers'),
	'SivaServitor' => array('enemyName' => 'SIVA Servitor', 'faction' => 'FallenDevilSplicers'),
	'SivaShank' => array('enemyName' => 'SIVA Shank', 'faction' => 'FallenDevilSplicers'),
	'SivaVandal' => array('enemyName' => 'SIVA Vandal', 'faction' => 'FallenDevilSplicers'),
	'AiIronLord' => array('enemyName' => 'Iron Lords', 'enemyRace' => 'Fallen', 'faction' => 'FallenDevilSplicers'),
	'R1S5StrikeStarfishUltraServitor' => array('enemyName' => 'Sepiks Perfected', 'raceClass' => 'FallenUltraServitorA', 'faction' => 'FallenDevilSplicers'),
	'R1S5StrikeOathUltraCaptain' => array('enemyName' => 'Kovik, Splicer Priest', 'raceClass' => 'FallenUltraCaptainA', 'faction' => 'FallenDevilSplicers', 'enemyWeapon' => 'ScorchCannonVoid'),
	'R1S5RaidPromiseWelderUltraCaptain' => array('enemyName' => 'Vosik, The Archepriest', 'raceClass' => 'FallenUltraCaptainA', 'faction' => 'FallenDevilSplicers', 'enemyWeapon' => 'ScorchCannon'),
	'R1S5RaidPromiseSeraphUltraCaptain' => array('enemyName' => 'Aksis, Archon Prime', 'raceClass' => 'FallenUltraCaptainA', 'faction' => 'FallenDevilSplicers'),
	
);

$enemyNoStats = array(
	//'R1S1VIPCosmoSurveyBoss' => array('enemyName' => 'Survey Boss', 'raceClass' => 'FallenVandal', 'location' => 'TheBreach', 'faction' => 'FallenFactionDevils'),
	//'R1S1VIPCosmoSpyServitor' => array('enemyName' => 'Spy Servitor', 'raceClass' => 'FallenServitor', 'location' => 'TheBreach', 'faction' => 'FallenDevils'),
	'R1S1VIPCosmoMajorKarrhisArchon' => array('enemyName' => 'Karrhis, Archon Rising', 'raceClass' => 'FallenUltraCaptainA', 'location' => 'TheBreach', 'faction' => 'FallenFactionDevils'),
//	'R1S1VIPCosmoSensorShank' => array('enemyName' => 'Sensor Shank', 'raceClass' => 'FallenShank', 'location' => 'LunarComplex', 'faction' => 'FallenFactionDevils'),
//	'R1S1VIPCosmoMajorLeadScout' => array('enemyName' => 'Dreg Lead Scout', 'raceClass' => 'FallenMajorDregA', 'faction' => 'FallenDevils', 'location' => 'LunarComplex'),
//	'R1S1VIPCosmoSalvageBoss' => array('enemyName' => 'Salvage Boss', 'raceClass' => 'FallenVandal', 'location' => 'TerrestrialComplex', 'faction' => 'FallenFactionKings'),
//	'R1S1VIPCosmoTrawlServitor' => array('enemyName' => 'Trawl Servitor', 'raceClass' => 'FallenServitor', 'location' => 'TerrestrialComplex', 'faction' => 'FallenFactionKings'),
//	'R1S1VIPCosmoRiteWizard' => array('enemyName' => 'Rite Wizard', 'raceClass' => 'HiveWizard', 'location' => 'Refinery', 'faction' => 'HiveFactionHiddenSwarm'),
//
//	'R1S1VIPMoonVoraciousOgre' => array('enemyName' => 'Voracious Ogre', 'raceClass' => 'HiveOgre', 'location' => 'HallOfWisdom'),
//	'R1S1VIPMoonHollowWizard' => array('enemyName' => 'Hollow Wizard', 'raceClass' => 'HiveWizard', 'location' => 'TempleOfCrota', 'faction' => 'HiveFactionCrota'),
//	'R1S1VIPMoonUtteranceOgre' => array('enemyName' => 'Utterance Ogre', 'raceClass' => 'HiveOgre', 'location' => 'TempleOfCrota', 'faction' => 'HiveFactionCrota'),

//	'R1S1VIPVenusPointMinotaur' => array('enemyName' => 'Point Minotaur', 'raceClass' => 'VexMinotaur', 'location' => 'IshtarAcademy', 'faction' => 'VexFactionAphix'),
//	'R1S1VIPVenusMinotaurTracker' => array('enemyName' => 'Minotaur Tracker', 'raceClass' => 'FallenServitor', 'location' => 'IshtarAcademy', 'faction' => 'FallenFactionWinter'),
//	'R1S1VIPVenusIsoMinotaur' => array('enemyName' => 'Iso Minotaur', 'raceClass' => 'VexMinotaur', 'location' => 'TheJuncture', 'faction' => 'VexFactionAphix'),
//	'R1S1VIPVenusIsoHobgoblin' => array('enemyName' => 'Iso Hobgoblin', 'raceClass' => 'VexHobgoblin', 'location' => 'TheJuncture', 'faction' => 'VexFactionAphix'),
//	'R1S1VIPVenusConfluxWatch' => array('enemyName' => 'Conflux Watch', 'raceClass' => 'FallenServitor', 'location' => 'HallOfWhispers', 'faction' => 'FallenFactionWinter'),

//	'R1S1VIPMarsLinePhalanx' => array('enemyName' => 'Line Phalanx', 'raceClass' => 'CabalPhalanx', 'location' => 'GiantsPass', 'faction' => 'CabalFactionBlindLegion'),
//	'R1S1VIPMarsGunneryCenturion' => array('enemyName' => 'Gunnery Centurion', 'raceClass' => 'CabalCenturion', 'location' => 'IronLine'),
//	'R1S1VIPMarsScoutLegionary' => array('enemyName' => 'Scout Legionary', 'raceClass' => 'CabalLegionary', 'location' => 'FirebaseRubicon'),
//	'R1S1VIPMarsChordHarpy' => array('enemyName' => 'Chord Harpy', 'raceClass' => 'VexHarpy', 'location' => 'FreeholdStation'),
//	'R1S1VIPMarsIsoMinotaur' => array('enemyName' => 'Iso Minotaur', 'raceClass' => 'VexMinotaur', 'location' => 'FreeholdStation', 'faction' => 'VexFactionAphix'),
//	'R1S1VIPMarsSiegeEngineer' => array('enemyName' => 'Siege Engineer', 'raceClass' => 'CabalCenturion', 'locaion' => 'DustPalace'),

	'R1S1EventCosmoMajorKnight' => array('enemyName' => 'Hallowed Knight', 'raceClass' => 'HiveMajorKnightA', 'location' => 'Rocketyard', 'enemyWeapon' => 'Shredder'),
	'R1S1EventCosmoMajorCaptain' => array('enemyName' => 'Reaver Captain', 'raceClass' => 'FallenMajorCaptainA', 'faction' => 'FallenDevils', 'location' => 'Rocketyard', 'enemyWeapon' => 'ShockRifle'),
	'R1S1EventCosmoMajorPitShank' => array('enemyName' => 'Pit Shank', 'raceClass' => 'FallenShank', 'faction' => 'FallenDevils', 'location' => 'TheDivide'),
	'R1S1EventCosmoMajorReaver' => array('enemyName' => 'Noble Devil Walker', 'raceClass' => 'FallenReaver', 'faction' => 'FallenDevils', 'location' => 'TheDivide'),

	'R1S1EventMoonMajorCaptain' => array('enemyName' => 'Reaver Captain', 'raceClass' => 'FallenMajorCaptainA', 'faction' => 'FallenExile', 'location' => 'Hellmouth', 'enemyWeapon' => 'ShockRifle'),
	'R1S1EventMoonMajorReaver' => array('enemyName' => 'Noble Iron Walker', 'raceClass' => 'FallenReaver', 'faction' => 'FallenExile', 'location' => 'AnchorOfLight'),
	'R1S1EventMoonMajorElyksis' => array('enemyName' => 'Elyksis, Wolf Rebel', 'raceClass' => 'FallenMajorVandalA', 'faction' => 'FallenExile', 'location' => 'Hellmouth'),
	'R1S1EventMoonMajorEtherRunner' => array('enemyName' => 'Ether Runner', 'raceClass' => 'FallenMajorServitorA', 'faction' => 'FallenExile', 'location' => 'AnchorOfLight'),

	'R1S1EventVenusMajorReaver' => array('enemyName' => 'Noble Winter Walker', 'raceClass' => 'FallenReaver', 'faction' => 'FallenWinter', 'location' => 'EmberCaves'),
	'R1S1EventVenusMajorMinotaur' => array('enemyName' => 'Corrective Permutation', 'raceClass' => 'VexMajorMinotaurA', 'location' => 'TheCitadel'),
	'R1S1EventVenusMajorManiphage' => array('enemyName' => 'Maniphage', 'raceClass' => 'MajorHydraA', 'location' => 'TheCitadel'),
	'R1S1EventVenusMajorRadian' => array('enemyName' => 'Radian Clocker', 'raceClass' => 'MajorHydraA', 'location' => 'TheCitadel'),

	'R1S1EventMarsMajorCenturion' => array('enemyName' => 'Imperial Centurion', 'raceClass' => 'CabalMajorCenturionA', 'location' => 'RubiconWastes'),
	'R1S1EventMarsMajorGeologist' => array('enemyName' => 'Ordnance Geologist', 'raceClass' => 'CabalMajorCenturionA', 'location' => 'RubiconWastes'),
	'R1S1EventMarsMajorMinotaur' => array('enemyName' => 'Prohibitive Permutation', 'raceClass' => 'VexMajorMinotaurA', 'location'=> 'TheBuriedCity'),

	'R1S1CosmoMajorCelebrant' => array('enemyName' => 'Celebrant of Oryx', 'raceClass' => 'HiveMajorKnightA', 'location' => 'BunkerRas2'),
	'HiveMajorThrallExploderA' => array('enemyName' => 'Hallowed Thrall', 'raceClass' => 'HiveThrallExploder'),

	'R1S2StoryMoon7MajorKnight' => array('enemyName' => 'Hallowed Knight', 'raceClass' => 'HiveKnightElite', 'enemyTier' => 'Major'),
	'R1S2StrikeMars3MajorOculator' => array('enemyName' => 'Divisive Oculator', 'raceClass' => 'VexCyclops', 'faction' => 'VexDivisive'),

	'R1S3ArenaReefMajorQodronsEye' => array('enemyName' => 'Qodron\'s Eye', 'raceClass' => 'VexMajorGoblinA'),
	'R1S3ArenaReefMajorArchonServants' => array('enemyName' => 'Archon Servants', 'raceClass' => 'FallenMajorDregA'),
	'R1S3ArenaReefMajorKaliks' => array('enemyName' => 'Kaliks Minor', 'raceClass' => 'FallenMajorServitorA'),

	'TakenMajorVandalA' => array('enemyName' => 'Tortured Vandal', 'raceClass' => 'TakenVandal'),
	'TakenMajorCaptainA' => array('enemyName' => 'Tortured Captain', 'raceClass' => 'TakenCaptain'),
	'TakenUltraCaptainA' => array('enemyName' => 'Taken Ultra Captain', 'raceClass' => 'TakenCaptain'),
	'TakenUltraOgreA' => array('enemyName' => 'Taken Ultra Ogre', 'raceClass' => 'TakenOgre'),
	'TakenUltraGladiatorA' => array('enemyName' => 'Taken Ultra Colossus', 'raceClass' => 'TakenColossus'),

	'TakenMajorAcolyteA' => array('enemyName' => 'Tortured Acolyte', 'raceClass' => 'TakenAcolyte'),
	'TakenMajorKnightA' => array('enemyName' => 'Tortured Knight', 'raceClass' => 'TakenKnight'),
	'TakenUltraKnightA' => array('enemyName' => 'Taken Ultra Knight', 'raceClass' => 'TakenKnight'),
	'TakenMajorWizardA' => array('enemyName' => 'Tortured Wizard', 'raceClass' => 'TakenWizard'),
	'TakenThrallConsumed' => array('enemyName' => 'Consumed Shadow', 'raceClass' => 'TakenThrall'),

	'TakenMajorHobgoblinA' => array('enemyName' => 'Tortured Hobgoblin', 'raceClass' => 'TakenHobgoblin'),
	'TakenMajorMinotaurA' => array('enemyName' => 'Tortured Minotaur', 'raceClass' => 'TakenMinotaur'),
	'TakenUltraMinotaurA' => array('enemyName' => 'Taken Ultra Minotaur', 'raceClass' => 'TakenMinotaur'),
	'TakenUltraHydraA' => array('enemyName' => 'Taken Ultra Hydra', 'raceClass' => 'TakenHydra'),

	'TakenMajorPhalanxA' => array('enemyName' => 'Tortured Phalanx', 'raceClass' => 'TakenPhalanx'),
	'TakenMajorCenturionA' => array('enemyName' => 'Tortured Centurion', 'raceClass' => 'TakenCenturion'),
	'TakenUltraCenturionA' => array('enemyName' => 'Taken Ultra Centurion', 'raceClass' => 'TakenCenturion'),
	'TakenMajorPsionA' => array('enemyName' => 'Tortured Psion', 'raceClass' => 'TakenPsion'),

	'R1S4EventHiveshipMajorThrall' => array('enemyName' => 'Blind Thrall', 'raceClass' => 'HiveMajorThrallA', 'faction' => 'BloodOfOryx', 'location' => 'Mausoleum'),

	'R1S4EventHiveshipMajorDisrok' => array('enemyName' => 'Disrok', 'raceClass' => 'TakenMajorWizardA', 'location' => 'HallOfSouls'),
	'R1S4EventHiveshipMajorKilulu' => array('enemyName' => 'Kilulu', 'raceClass' => 'TakenMajorKnightA', 'location' => 'HallOfSouls'),
	'R1S4EventHiveshipMajorMishkara' => array('enemyName' => 'Mishkara', 'raceClass' => 'TakenMajorKnightA', 'location' => 'HallOfSouls'),
	'R1S4EventHiveshipMajorDumuz-Nuna' => array('enemyName' => 'Dumuz-Nuna', 'raceClass' => 'TakenMajorKnightA', 'location' => 'HallOfSouls'),

	'R1S4StoryHiveshipUltraTaaun' => array('enemyName' => 'Primus Ta\'aun', 'raceClass' => 'CabalUltraGladiatorA', 'location' => 'Mausoleum'),

	// Blighted Coven
	'R1S4StoryCosmoMajorZyrak' => array('enemyName' => 'Zyrak, Daughter of Oryx', 'raceClass' => 'TakenMajorWizardA', 'location' => 'TheSteppes'),
	'R1S4StoryCosmoMajorMysik' => array('enemyName' => 'Mysik, Daughter of Oryx', 'raceClass' => 'TakenMajorWizardA', 'location' => 'TheSteppes'),
	'R1S4StoryCosmoMajorThyshik' => array('enemyName' => 'Thyshik, Daughter of Oryx', 'raceClass' => 'TakenMajorWizardA', 'location' => 'TheSteppes'),

	// King's Watch Story Mission
	'R1S4StoryCosmoUltraTsugoth' => array('enemyName' => 'Tsugoth, Gauntlet of Oryx', 'raceClass' => 'TakenUltraKnightA', 'location' => 'Rocketyard'),

	// Lost to Light
	'R1S4StoryMoonMajorBaxx' => array('enemyName' => 'Baxx, The Gravekeeper', 'raceClass' => 'HiveMajorOgreA', 'location' => 'ChamberOfNight'),
	'R1S4StoryMoonMajorSarkoor' => array('enemyName' => 'Sarkoor', 'raceClass' => 'TakenMajorWizardA', 'location' => 'TempleOfCrota'),
	'R1S4StoryMoonUltraDriviks' => array('enemyName' => 'Driviks, the Chosen', 'raceClass' => 'TakenUltraCaptainA', 'location' => 'TraitorsKetch'),

	// Last Rites
	'R1S4StoryMoonMajorDeathsinger' => array('enemyName' => 'Deathsinger', 'raceClass' => 'HiveMajorWizardA', 'location' => 'OversoulThrone'),

	// Paradox
	'R1S4StoryVenusUltraMorphon' => array('enemyName' => 'Morphon, Blighted Mind', 'raceClass' => 'TakenUltraHydraA', 'location' => 'GorgonsLabyrinth'),
	'R1S4StoryVenusUltraDescendant' => array('enemyName' => 'Blighted Descendant', 'raceClass' => 'TakenUltraMinotaurA', 'location' => 'VaultOfGlassFuture'),

	'R1S4StoryMarsMajorVekron' => array('enemyName' => 'Vekron, the Conductive Mind', 'raceClass' => 'VexMajorHydraA', 'location' => 'TharsisJunction'),

	// The Prime's Path
	'R1S4StoryMarsUltraOrbiks' => array('enemyName' => 'Orbiks Prime', 'raceClass' => 'FallenUltraServitorA', 'faction' => 'FallenWolves', 'location' => 'TheLegionsKeep'),

	// Tenebrous Tunnels
	'R1S4StoryMarsUltraShoogurn' => array('enemyName' => 'Bracus Sho\'ogurn', 'raceClass' => 'CabalUltraCenturionA'),

	// Summoner's Circle
	'R1S4StoryHiveshipUltraInfantine' => array('enemyName' => 'The Infantine', 'raceClass' => 'HiveUltraOgreA', 'location' => 'TheFounts'),

	// Sunless Cell
	'R1S4StrikeHiveshipPandoraMajorKalboh' => array('enemyName' => 'Kalboh, the Unclaimed', 'raceClass' => 'TakenMajorKnightA', 'location' => 'TheFounts'),
	'R1S4StrikeHiveshipPandoraMajorNolthok' => array('enemyName' => 'Nolthok, the Withering', 'raceClass' => 'TakenMajorWizardA', 'location' => 'TheFounts'),
	'R1S4StrikeHiveshipPandoraMajorUrlot' => array('enemyName' => 'Urlot, the Trampler', 'raceClass' => 'TakenMajorKnightA'),

	'R1S4StrikeHiveshipPandoraMajorDrarok' => array('enemyName' => 'Drarok, the Watching', 'raceClass' => 'TakenMajorWizardA'),
	'R1S4StrikeHiveshipPandoraMajorAgrax' => array('enemyName' => 'Agrax, the Rotted', 'raceClass' => 'TakenMajorKnightA'),

	'R1S4StrikeHiveshipPandoraMajorAdleg' => array('enemyName' => 'Adleg, Warden of Oryx', 'raceClass' => 'TakenMajorKnightA', 'enemyShield' => 'SolarShield'),
	'R1S4StrikeHiveshipPandoraMajorThracu' => array('enemyName' => 'Thracu, Warden of Oryx', 'raceClass' => 'HiveMajorKnightACleaver', 'enemyShield' => 'ArcShield'),
	'R1S4StrikeHiveshipPandoraMajorHeolstor' => array('enemyName' => 'Heolstor, Warden of Oryx', 'raceClass' => 'HiveMajorKnightA', 'enemyShield' => 'VoidShield'),

	// Shield Brothers
	'R1S4StrikeHiveshipOverlordMajorThraaurg' => array('enemyName' => 'Bracus Thra\'aurg', 'raceClass' => 'CabalMajorCenturionA'),
	'R1S4StrikeHiveshipOverlordMajorGhoourn' => array('enemyName' => 'Valus Gho\'ourn', 'raceClass' => 'CabalMajorGladiatorA'),
	'R1S4StrikeHiveshipOverlordMinorBurners' => array('enemyName' => 'Psion Burners', 'raceClass' => 'CabalPsion'),

	// Dust Palace
	'R1S4StrikeMars1MajorLharkiss' => array('enemyName' => 'Lharkiss, Wolf Bane', 'raceClass' => 'TakenMajorVandalA', 'location' => 'Overwatch'),
	'R1S4StrikeMars1MajorDraang' => array('enemyName' => 'Bracus Dra\'ang', 'raceClass' => 'CabalMajorGladiatorA', 'location' => 'Overwatch'),

	// Cerberus Vae III
	'R1S4StrikeMars2MajorHephone' => array('enemyName' => 'Hephone, Corruption Mind', 'raceClass' => 'TakenMajorHydraA', 'location' => 'IronLine'),
	'R1S4StrikeMars2UltraSolProgeny' => array('enemyName' => 'Sol Progeny', 'raceClass' => 'TakenUltraMinotaurA', 'location' => 'Trenchworks'),

	// S.A.B.E.R.
	'R1S4StrikeCosmoReliquaryTurrentShank' => array('enemyName' => 'Turrent Shank', 'raceClass' => 'AiShankShockTurret'),
	'R1S4StrikeCosmoReliquaryMajorYathbor' => array('enemyName' => 'Yathbor', 'raceClass' => 'HiveMajorOgreA', 'location' => 'TheGrottos'),
	'R1S4StrikeCosmoReliquaryMajorSepiks23' => array('enemyName' => 'Sepiks-23', 'raceClass' => 'FallenMajorServitorA'),

	// Taken Undying Mind
	'R1S4StrikeMars3Khendiss' => array('enemyName' => 'Khendiss, Word Corrupter', 'raceClass' => 'TakenMajorWizardA'),

	'R1S4WantedEventUltraKeldar' => array('enemyName' => 'Keldar, Archon Priest', 'raceClass' => 'FallenUltraCaptainA', 'faction' => 'FallenWolves'),

	'R1S4EventHiveshipMajorNengalish' => array('enemyName' => 'Nengalish', 'raceClass' => 'HiveMajorKnightA', 'location' => 'HullBreach'),
	'R1S4EventHiveshipMajorBlahgrish' => array('enemyName' => 'Blahgrish', 'raceClass' => 'HiveMajorOgreA', 'location' => 'HullBreach'),
	'R1S4EventHiveshipMajorVeength' => array('enemyName' => 'Ve\'ength', 'raceClass' => 'CabalMajorCenturionA', 'location' => 'HullBreach'),
	'R1S4EventHiveshipMajorTauugh' => array('enemyName' => 'Valus Tau\'ugh', 'raceClass' => 'CabalMajorGladiatorA', 'location' => 'HullBreach'),

	'R1S4EventHiveshipMajorAarta' => array('enemyName' => 'Aarta', 'raceClass' => 'TakenMajorKnightA'),
	'R1S4EventHiveshipMajorDakkadi' => array('enemyName' => 'Daakkadi', 'raceClass' => 'TakenMajorKnightA'),
	'R1S4EventHiveshipMajorGornith' => array('enemyName' => 'Gornith', 'raceClass' => 'TakenMajorKnightA'),
	'R1S4EventHiveshipMajorGurroth' => array('enemyName' => 'Gurroth', 'raceClass' => 'TakenMajorKnightA'),
	'R1S4EventHiveshipMajorPurtra' => array('enemyName' => 'Purtra, the False Tongue', 'raceClass' => 'TakenMajorWizardA'),
	'R1S4EventHiveshipMajorSurnon' => array('enemyName' => 'Surnon, Darksong', 'raceClass' => 'TakenMajorWizardA'),
	'R1S4EventHiveshipMajorWizard' => array('enemyName' => 'Hallowed Wizard', 'raceClass' => 'TakenMajorWizardA'),

	'R1S4EventHiveshipUltraDumuzod' => array('enemyName' => 'Dumuzod', 'raceClass' => 'TakenUltraKnightA', 'location' => 'TheFounts'),

	'R1S4EventHiveshipMajorWardenVoid' => array('enemyName' => 'Warden\'s Knight', 'raceClass' => 'HiveMajorKnightA', 'enemyShield' => 'VoidShield', 'location' => 'TheFounts'),
	'R1S4EventHiveshipMajorWardenSolar' => array('enemyName' => 'Warden\'s Knight', 'raceClass' => 'HiveMajorKnightA', 'enemyShield' => 'SolarShield', 'location' => 'TheFounts'),
	'R1S4EventHiveshipMajorWardenArc' => array('enemyName' => 'Warden\'s Knight', 'raceClass' => 'HiveMajorKnightA', 'enemyShield' => 'ArcShield', 'location' => 'TheFounts'),
	'R1S4EventHiveshipMajorEcthar' => array('enemyName' => 'Ecthar, Sword of Oryx', 'raceClass' => 'HiveMajorKnightA', 'enemyShield' => 'SwordShield', 'enemyWeapon' => 'Cleaver', 'location' => 'TheAsylum'),

	'R1S4EventRobHiveshipUltraOgre' => array('enemyName' => 'Servile Ogre', 'raceClass' => 'HiveUltraOgreA', 'location' => 'HallOfSouls'),

	'R1S4TakenEventUltraBlightedDescendant' => array('enemyName' => 'Blighted Descendant', 'raceClass' => 'TakenUltraMinotaurA'),
	'R1S4TakenEventCosmoUltraDarnu' => array('enemyName' => 'Darnu, Horn of Oryx', 'raceClass' => 'TakenUltraKnightA', 'location' => 'TheDivide'),
	'R1S4TakenEventCosmoUltraIrxori' => array('enemyName' => 'Irxori, Lost to Oryx', 'raceClass' => 'TakenUltraCaptainA', 'location' => 'Skywatch'),
	'R1S4TakenEventCosmoUltraStirok' => array('enemyName' => 'Stirok, Banner of Oryx', 'raceClass' => 'TakenUltraKnightA', 'location' => 'Rocketyard'),
	'R1S4TakenEventVenusUltraGrayris' => array('enemyName' => 'Grayris, Baroness', 'raceClass' => 'TakenUltraCaptainA', 'location' => 'IshtarCliffs'),
	'R1S4TakenEventUltraShooulth' => array('enemyName' => 'Sho\'outh, Horror of Oryx', 'raceClass' => 'TakenUltraCenturionA'),

	'R1S4BlightEventCosmoUltraFalsek' => array('enemyName' => 'Falsek, Lost to Oryx', 'raceClass' => 'TakenUltraCaptainA', 'location' => 'Dock13'),
	'R1S4BlightEventMoonUltraKrathoor' => array('enemyName' => 'Krathoor', 'raceClass' => 'TakenUltraKnightA', 'location' => 'ShrineOfOryx'),
	'R1S4BlightEventVenusUltraLhoks' => array('enemyName' => 'Lhoks, Exile Baron', 'raceClass' => 'TakenUltraCaptainA', 'location' => 'TheCinders'),
	'R1S4BlightEventVenusUltraChord' => array('enemyName' => 'Blighted Chord', 'raceClass' => 'TakenUltraMinotaurA', 'location' => 'EndlessSteps'),
	'R1S4BlightEventMarsUltraDruurng' => array('enemyName' => 'Bracus Dru\'urng', 'raceClass' => 'TakenUltraCenturionA', 'location' => 'TheLegionsKeep'),
	'R1S4BlightEventHiveshipUltraBalvog' => array('enemyName' => 'Balvog, Shield of Oryx', 'raceClass' => 'TakenUltraKnightA', 'location' => 'Trenchway'),

	'R1S4RaidEpiphanyAdept' => array('enemyName' => 'Adept', 'raceClass' => 'HiveMajorAcoylteA'),
	'R1S4RaidEpiphanyLightOgre' => array('enemyName' => 'Light Eater Ogre', 'raceClass' => 'TakenMajorOgreA'),
	'R1S4RaidEpiphanyVessel' => array('enemyName' => 'Vessel', 'raceClass' => 'TakenMajorKnightA'),
	'R1S4RaidEpiphanyLightKnight' => array('enemyName' => 'Light Eater Knight', 'raceClass' => 'TakenMajorKnightA', 'enemyWeapon' => 'Cleaver'),

	// New Prison of Elders
	'R1S4ArenaReefSeditiousMind' => array('enemyName' => 'Seditious Mind', 'raceClass' => 'TakenUltraHydraA'),

	// Taken Winters Run
	'R1S4VenusStrikeNixis' => array('enemyName' => 'Nixis, Hunger of Oryx', 'raceClass' => 'TakenUltraCaptainA', 'location' => 'WintersRun')

	// Rise of Iron
);

function applyEnemyClass(&$enemy, $enemies, $enemyClass=false) {
	if (!$enemyClass && isset($enemy['raceClass'])) $enemyClass= $enemy['raceClass'];
	if ($enemyClass && isset($enemies[$enemyClass])) {
		$parentEnemy = $enemies[$enemyClass];
		foreach($parentEnemy as $key => $value) {
			if (!isset($enemy[$key])) $enemy[$key] = $value;
		}
		if (isset($parentEnemy['raceClass']) && $parentEnemy['raceClass'] != $parentEnemy['enemyId']) {
			applyEnemyClass($enemy, $enemies, $parentEnemy['raceClass']);
		}
	}
}

function parseEnemyId($enemyId, &$stats, $cards) {
	global $enemyOverrides;

	$activity = $enemyId;

	foreach (array('Cabal', 'Vex', 'Fallen', 'Hive', 'Taken', 'Player', 'Any') as $raceName) {
		if (strpos($enemyId, $raceName) === 0) {
			$stats['raceName'] = $raceName;
			break;
		}
	}
	foreach (array('Story', 'Strike', 'Raid', 'Event', 'Arena', 'Bounty', 'VIP') as $activityType) {
		if (strpos($enemyId, $activityType) !== false) {
			$stats['activityType'] = $activityType;
			break;
		}
	}
	foreach (array('Cosmo', 'Moon', 'Venus', 'Mars', 'Reef', 'Hiveship') as $destination) {
		if (strpos($enemyId, $destination) !== false) {
			$stats['destination'] = $destination;
			break;
		}
	}
	foreach (array('Minor', 'Major', 'Elite', 'Ultra', 'Champions') as $enemyTier) {
		if (strpos($enemyId, $enemyTier) !== false) {
			$activity = preg_replace('/'.$enemyTier.'.*/', '', $activity);
			if ($enemyTier == 'Major' && substr($enemyId, -1) != 'A' && preg_match('/Major[0-9]+/', $enemyId) !== 1) $enemyTier = 'Minor';
			$stats['enemyTier'] = $enemyTier;
			break;
		}
	}
	foreach (array('ShockBlade', 'ShrapnelLauncher', 'ShockDagger', 'WireRifle', 'Pike', 'Cleaver', 'ShockTurret', 'Exploder') as $enemyWeapon) {
		if (strpos($enemyId, $enemyWeapon) !== false) $stats['enemyWeapon'] = $enemyWeapon;
	}
	preg_match('/R[0-9]+S[0-9]+/i', $enemyId, $expId);
	if ($expId) {
		$stats['expansionId'] = strtoupper($expId[0]);
		$activity = str_replace($expId[0], '', $activity);
	} else {
		$activity = '';
	}

	$enemyName = $stats['enemyName'];

	$raceClasses = array(
		'Fallen' => array('Dreg', 'Vandal', 'Servitor', 'Captain', 'Shank'),
		'Hive' => array('Thrall', 'Acolyte', 'Knight', 'Wizard', 'Ogre'),
		'Vex' => array('Goblin', 'Hobgoblin', 'Minotaur', 'Harpy', 'Hydra'),
		'Cabal' => array('Legionary', 'Phalanx', 'Centurion', 'Psion', 'Colossus'),
		'Player' => array('Hunter', 'Titan', 'Warlock')
	);
	foreach($raceClasses as $raceName => $classes) {
		foreach($classes as $raceClass) {
			if (strpos($enemyId, $raceClass) !== false || strpos($enemyName, $raceClass) !== false) {
				$stats['raceClass'] = $raceName.$raceClass;
				if (!isset($stats['raceName'])) $stats['raceName'] = $raceName;
			}
		}
	}

	$activity = preg_replace('/([a-z]+[0-9]+).*/i', '$1', $activity);
	if ($activity) $stats['activity'] = $activity;

	if (isset($enemyOverrides[$enemyId])) {
		$overrides = is_array($enemyOverrides[$enemyId]) ? $enemyOverrides[$enemyId] : array('enemyName' => $enemyOverrides[$enemyId]);
		if (!is_array($enemyOverrides[$enemyId])) {
			$enemyOverrides[$enemyId] = array('enemyName' => $enemyOverrides[$enemyId]);
		}
		$stats['overrides'] = array();
		foreach($overrides as $key => $value) {
			if (isset($stats[$key])) {
				if ($stats[$key] != $value) {
					$stats['overrides'][$key] = $value;
					if ($key == 'raceClass' && substr($value, -1) == 'A' && strpos($value, 'Major') !== false) {
						if (!isset($stats['enemyTier'])) {
							$stats['enemyTier'] = 'Major';
						} else if (!isset($stats['overrides']['enemyTier']) || $stats['enemyTier'] != 'Major') {
							$stats['overrides']['enemyTier'] = 'Major';
						}
					}
				}
			}
			else {
				$stats[$key] = $value;
			}
			if ($key == 'enemyName') $enemyName = $value;
		}
	}

	$enemyName = strtolower(preg_replace('/\s*the\s*/i', '', preg_replace('/[^a-z0-9\s\-]+/i', '', $enemyName)));
	if (!isset($stats['cardId'])) foreach ($cards as $card) {
		$cardName = preg_replace('/[^a-z0-9\s\-]+/i', '', html_entity_decode($card->cardName, ENT_QUOTES|ENT_HTML401));
		$cardName = preg_replace('/\s*the\s*/i', '', $cardName);
		$cardName = strtolower($cardName);
		//echo '<pre>'.$enemyName.' => '.$cardName.'</pre>';
		if ($cardName == $enemyName) {
			$stats['cardId'] = $card->cardId;
			//echo '<pre>'.$enemyName.' => '.$cardName.'</pre>';
			break;
		}
	}
}

if (file_exists($cachePath) && file_exists($enumsPath)) {
	$cache = json_decode(file_get_contents($cachePath), true);

	$enums = json_decode(file_get_contents($enumsPath), true);

	$dbfile = $cache['world'];

	$groupTypes = array();
	if (!isset($enums['DestinyStatsGroupType'])) return;
	foreach($enums['DestinyStatsGroupType'] as $key => $value) {
		$groupTypes[$value] = $key;
	}

	$cards = array();

	$statGroups = array();

	if ($db = new SQLite3($dbfile)) {
		$result = $db->query('SELECT * FROM DestinyGrimoireCardDefinition');
		while($entry = $result->fetchArray(true)) {
			$data = json_decode($entry['json']);
			$cards[$data->cardId] = $data;
		}

		$result = $db->query('SELECT * FROM DestinyHistoricalStatsDefinition');
		while ($entry = $result->fetchArray(true)) {
			$data = json_decode($entry['json']);

			$group = $data->group;
			if (isset($groupTypes[$data->group])) {
				$group = $groupTypes[$data->group];
			} else {
				echo '<pre>Missing DestinyStatsGroupType: '.$group.'</pre>';
			}
			//echo '<pre>'.$data->statId.' | '.$group.'</pre>';

			if (!isset($statGroups[$group])) $statGroups[$group] = array();

			if (substr($data->statName, 0, 1) == '#') $data->statName = '###'.$data->statId.'###';

			$stats = array(
				'statId' => $data->statId,
				'statName' => $data->statName
			);
			$statId = $data->statId;
			switch($group) {
				case 'Enemies':
					$enemyId = $data->statId;
					$enemyId = preg_replace('/deaths*From/', '', $enemyId);
					$enemyId = str_replace('killsOf', '', $enemyId);
					$enemyId = preg_replace('/precisionKills*Of/', '', $enemyId);
					$enemyId = str_replace('assistsAgainst', '', $enemyId);
					$enemyId = str_replace('killsDeathsRatio', '', $enemyId);
					$statId = $enemyId;

					if (!isset($statGroups[$group][$statId])) {
						$stats = array(
							'enemyId' => $enemyId,
							'enemyName' => substr($data->statName, 0, 1) == '#' ? '###' . $enemyId . '###' : $data->statName
						);
						if (substr($data->statName, 0, 1) != '#') $stats['enemyName'] = $data->statName;

						parseEnemyId($enemyId, $stats, $cards);

						$statGroups[$group][$statId] = $stats;
					}
					$stats = $statGroups[$group][$statId];

					if (!isset($stats['stats'])) $stats['stats'] = array();

					//if (!isset($statGroups[$group][$enemyId])) $statGroups[$group][$enemyId] = array('enemyId' => $enemyId);
					$enemyStatId = 'unknownStat';
					switch(str_replace($enemyId, '', $data->statId)) {
						case 'deathFrom':
						case 'deathsFrom': $enemyStatId = 'deathsFrom'; break;
						case 'killsOf': $enemyStatId = 'killsOf'; break;
						case 'precisionKillOf':
						case 'precisionKillsOf': $enemyStatId = 'precisionKillsOf'; break;
						case 'assistsAgainst': $enemyStatId = 'assistsAgainst'; break;
						case 'killsDeathsRatio': $enemyStatId = 'killsDeathsRatio'; break;
					}
					$stats['stats'][$enemyStatId] = array(
						'statId' => $data->statId,
						'statName' => $data->statName
					);
					break;
				case 'Weapons':
					$weaponId = $data->statId;
					$weaponId = str_replace('weaponPrecisionKills', '', $weaponId);
					$weaponId = str_replace('weaponKillsPrecisionKills', '', $weaponId);
					$weaponId = str_replace('weaponKills', '', $weaponId);
					$statId = $weaponId;
					$stats = isset($statGroups[$group][$statId]) ? $statGroups[$group][$statId] : array(
						'weaponId' => $weaponId,
						'weaponName' => substr($data->statName, 0, 1) == '#' ? '###'.$weaponId.'###' : $data->statName,
						'stats' => array()
					);
					$weaponStatId = str_replace($weaponId, '', $data->statId);
					//$weaponStatId = str_replace($weaponId, '', $data->statId) == 'weaponKills' ? 'kills' : 'precisionKills';
					$stats['stats'][$weaponStatId] = array(
						'statId' => $data->statId
					);
					break;
				case 'Medals':
					if (isset($data->iconImage)) {
						$stats['icon'] = BUNGIE_URL . $data->iconImage;
						$stats['description'] = $data->statDescription;
					}
					break;
			}

			$statGroups[$group][$statId] = $stats;
		}
	}

	foreach($enemyNoStats as $enemyId => $enemy) {
		$enemy = array_merge(array('enemyId' => $enemyId), $enemy);
		$enemy['overrides'] = array();
		$enemy['stats'] = array();
		parseEnemyId($enemyId, $enemy, $cards);
		$statGroups['Enemies'][$enemyId] = $enemy;
	}

	foreach($statGroups['Enemies'] as &$enemy) {
		applyEnemyClass($enemy, $statGroups['Enemies']);
	}

	uksort($statGroups['Enemies'], function($a, $b) {
		foreach(array('Minor', 'Majoir', 'Elite', 'Ultra', 'Champions') as $tier) {
			$a = preg_replace('/('.$tier.'[0-9]*)(.*)/', '$2$1', $a);
			$b = preg_replace('/('.$tier.'[0-9]*)(.*)/', '$2$1', $b);
		}
		return strcasecmp($a, $b);
	});

	file_put_contents(BUILDERPATH.'/data/historical-stats.json', json_encode($statGroups, JSON_PRETTY_PRINT));

	/*?>
	<table class="historical-stats" style="font-size: 0.8em;">
		<thead>
			<tr>
				<th class="col-name">Name</th>
				<th>Card</th>
				<th>Race</th>
				<th>Tier</th>
				<th>Weapon</th>
				<th>Activity</th>
				<th>Location</th>
				<th>Expansion</th>
			</tr>
		</thead>
		<tbody>
		<?php foreach($statGroups['Enemies'] as $enemy) {
			if (isset($enemy['overrides'])) {
				foreach($enemy['overrides'] as $key => $value) {
					$enemy[$key] = $value.' <small>['.$enemy[$key].']</small>';
				}
			}
			?>
			<tr>
				<td class="col-name"><?= $enemy['enemyName'] ?><br/><small><?= $enemy['enemyId'] ?></small></td>
				<td><?= isset($enemy['cardId']) ? $enemy['cardId'] : '' ?></td>
				<td>
					<?= isset($enemy['raceName']) ? $enemy['raceName'] : '' ?>
					<?= isset($enemy['raceClass']) ? '<br/><small>'.$enemy['raceClass'].'</small>' : '' ?>
					<?= isset($enemy['faction']) ? '<br/><small>'.$enemy['faction'].'</small>' : '' ?>
				</td>
				<td><?= isset($enemy['enemyTier']) ? $enemy['enemyTier'] : '' ?></td>
				<td>
					<?= isset($enemy['enemyWeapon']) ? $enemy['enemyWeapon'] : '' ?>
					<?= isset($enemy['enemyShield']) ? $enemy['enemyShield'] : '' ?>
				</td>
				<td>
					<?= isset($enemy['activityType']) ? $enemy['activityType'] : '' ?>
					<?= isset($enemy['activity']) ? '<br/><small>'.$enemy['activity'].'</small>' : '' ?>
				</td>
				<td>
					<?= isset($enemy['destination']) ? $enemy['destination'] : '' ?>
					<?= isset($enemy['location']) ? '<br/><small>'.$enemy['location'].'</small>' : '' ?>
				</td>
				<td><?= isset($enemy['expansionId']) ? $enemy['expansionId'] : '' ?></td>
			</tr>
		<?php } ?>
		</tbody>
	</table>
	<style>
		.historical-stats {
			width: 100%;
			border-collapse: collapse;
		}
		.historical-stats td, .historical-stats th {
			padding: 5px 10px;
			border-top: 1px solid rgba(0,0,0,0.1);
			text-align: center;
		}
		.historical-stats .col-name {
			text-align: left;
		}
	</style>
	<?php
	foreach($cards as $card) {
		echo '<pre>'.$card->cardId.' | '.$card->cardName.'</pre>';
	}*/
	//echo '<pre>'.var_export($cards, true).'</pre>';
}

$bestiaryPath = BUILDERPATH.'/data/enemy-bestiary.json';
$bestiary = (object)array(
	'enemyRaces' => array(),
	'enemyWeapons' => array(),
	'enemyTypes' => array()
);

foreach($races as $raceId => $race) {
	$raceFactions = array();
	foreach($factions as $factionId => $faction) {
		if (strpos($factionId, $raceId) !== false) {
			$raceFactions[$factionId] = array(
				'id' => $factionId,
				'name' => $faction['factionName']
			);
			if (isset($faction['symbol'])) $raceFactions[$factionId]['symbol'] = $faction['symbol'];
		}
	}
	$bestiary->enemyRaces[$raceId] = array(
		'id' => $raceId,
		'name' => $race['name'],
		'symbol' => $race['symbol'],
		'factions' => $raceFactions
	);
}

foreach($statGroups['Enemies'] as $enemyId => $enemy) {
	
	if (isset($enemy['overrides'])) foreach($enemy['overrides'] as $key => $value) {
		$enemy[$key] = $value;
	}
	
	$enemyWeapons = array();
	$entry = array(
		'id' => $enemyId,
		'name' => $enemy['enemyName'],
		//'enemyRace' => $enemy['raceName'],
		//'tier' => $enemy['enemyTier'],
		//'weapons' => $weapons,
		//'stats' => $enemy['stats']
	);
	$entry['tier'] = isset($enemy['enemyTier']) ? $enemy['enemyTier'] : 'Minor';
	if (isset($enemy['raceClass']) && $enemy['raceClass'] != $enemyId) {
		$entry['parent'] = $enemy['raceClass'];
	}
	if (isset($enemy['raceName'])) {
		if ($enemy['raceName'] == $enemyId) continue;
		//if ($enemy['raceName'] == 'Player') continue;
		$entry['enemyRace'] = $enemy['raceName'];
	}
	if (isset($enemy['enemyRace'])) $entry['enemyRace'] = $enemy['enemyRace'];
	
	if (isset($enemy['faction'])) $entry['factions'] = array($enemy['faction']);
	
	if (isset($enemy['activityType'])) $entry['activityType'] = $enemy['activityType'];
	if (isset($enemy['activity'])) $entry['activity'] = $enemy['activity'];
	if (isset($enemy['destination'])) $entry['destination'] = $enemy['destination'];
	if (isset($enemy['location'])) $entry['location'] = $enemy['location'];
	if (isset($enemy['expansionId'])) $entry['expansionId'] = $enemy['expansionId'];
	
	if (isset($enemy['cardId'])) $entry['cardId'] = $enemy['cardId'];
	
	if (isset($enemy['enemyShield'])) $entry['shield'] = str_replace('Shield', '', $enemy['enemyShield']);
	if (isset($enemy['enemyWeapon'])) $enemyWeapons[] = $enemy['enemyWeapon'];
	if (isset($enemy['enemyOtherWeapons'])) $enemyWeapons = array_merge($enemyWeapons, array_diff($enemy['enemyOtherWeapons'], $enemyWeapons));
	
	$entry['weapons'] = $enemyWeapons;
	
	foreach($enemyWeapons as $weaponId) {
		if (isset($bestiary->enemyWeapons[$weaponId])) continue;
		if (!isset($weapons[$weaponId])) {
			echo '<pre>MissingWeapon: '.$weaponId.'</pre>';
			continue;
		}
		$weapon = $weapons[$weaponId];
		//echo '<pre>'.json_encode($weapon, JSON_PRETTY_PRINT).'</pre>';
		
		$weaponEntry = array(
			'id' => $weaponId,
			'name' => $weapon['weaponName'],
			'enemyRace' => $weapon['enemyRace']
		);
		if (isset($weapon['damageType']) && $weapon['damageType']) $weaponEntry['damageType'] = $weapon['damageType'];
		
		$bestiary->enemyWeapons[$weaponId] = $weaponEntry;
	}
	
	if (isset($enemy['epic'])) {
		$epic = array();
		if (isset($enemy['epic']['enemyShield'])) $epic['shield'] = $enemy['epic']['enemyShield'];
		$entry['epic'] = $epic;
	}
	
	if (isset($enemy['stats']) && count($enemy['stats']) == 1) {
		echo '<pre>SkippedEnemy: '.$enemyId.'</pre>';
		continue;
	}
	$entry['stats'] = isset($enemy['stats']) ? $enemy['stats'] : array();
	
	$bestiary->enemyTypes[$enemyId] = $entry;
	
	//unset($enemy['enemyId']);
	//unset($enemy['enemyName']);
	unset($enemy['enemyRace']);
	unset($enemy['enemyTier']);
	unset($enemy['enemyShield']);
	unset($enemy['enemyWeapon']);
	unset($enemy['enemyOtherWeapons']);
	unset($enemy['raceClass']);
	unset($enemy['raceName']);
	unset($enemy['overrides']);
	unset($enemy['stats']);
	unset($enemy['cardId']);
	
	unset($enemy['faction']);
	
	unset($enemy['epic']);
	
	unset($enemy['heroicPrefix']);
	
	unset($enemy['activityType']);
	unset($enemy['activity']);
	unset($enemy['destination']);
	unset($enemy['location']);
	unset($enemy['expansionId']);
	
	if (count(array_keys($enemy)) > 2) echo '<pre>'.json_encode($enemy, JSON_PRETTY_PRINT).'</pre>';
	//echo '<pre>'.json_encode($entry, JSON_PRETTY_PRINT).'</pre>';
	//break;
}

foreach($bestiary->enemyTypes as $enemyId => $enemy) {
	if (isset($enemy['parent']) && !isset($bestiary->enemyTypes[$enemy['parent']])) {
		echo '<pre>MissingEnemyParent: '.$enemy['parent'].'</pre>';
	}
}

function base_class($enemy) {
	global $bestiary;
	return isset($enemy['parent']) && isset($bestiary->enemyTypes[$enemy['parent']]) ? base_class($bestiary->enemyTypes[$enemy['parent']]) : $enemy['id'];
}
function base_tier($enemy) {
	global $bestiary;
	if (isset($enemy['tier'])) return $enemy['tier'];
	if (isset($enemy['parent']) && isset($bestiary->enemyTypes[$enemy['parent']])) {
		base_tier($bestiary->enemyTypes[$enemy['parent']]);
	}
	return 'Minor';
}

//usort($bestiary->enemyTypes, function($a, $b) {
//	$result = strcasecmp(base_class($a), base_class($b));
//	if ($result === 0) {
//		$tiers = array('Minor', 'Elite', 'Major', 'Champions', 'Ultra');
//		$result = array_search(base_tier($a), $tiers) - array_search(base_tier($b), $tiers);
//	}
//	if ($result === 0) {
//		$result = strcasecmp($a['enemyRace'], $b['enemyRace']);
//	}
//	return $result;
//});

file_put_contents($bestiaryPath, json_encode($bestiary, JSON_PRETTY_PRINT));