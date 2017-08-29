Whether a player is shooting enemies, racing around a track or getting headshots from the other side of a PvP map, information is constantly being tracked and sent to Bungie. Some of this information is kept in the form of historical stats. These can be retrieved via HistoricalStat Endpoints, Leaderboards or Activity instances.

Note: The the time of writing, these are the only stat groups currently in use.

You can get the full data structure used to generate this section [here](http://destinydevs.github.io/BungieNetPlatform/data/historical-stats.json).

## General
General stats not tied to a specific definition. [[View List|GeneralHistoricalStats]]

## Enemies
There are up to 5 individual stats tracked for each enemy encountered in Destiny. They are named as `{statType}{enemyId}`, where statType is one of the below. Note that naming conventions are not always consistent and will require an expression to catch all variations. [[View List|EnemyHistoricalStats]]

* assistsAgainst
* precisionKillsOf/precisionKillOf
* deathsFrom
* killsOf
* killsDeathsRatio

## Activity
These stats are tied to a specific activity instance such as how many times a player has died. [[View List|ActivityHistoricalStats]]

## Leaderboard
These are special stats for leaderboards. [[View List|LeaderboardHistoricalStats]]

## Medals
Medals are earned by doing certain achievements in PvP. [[View List|MedalHistoricalStats]]

## Weapons
Each weapon type tracks 3 stats, kills (weaponKills), precisionKills (weaponPrecisionKills) and kills/precisionKills (weaponKillsPrecisionKills). [[View List|WeaponHistoricalStats]]

## UniqueWeapons
Same as Weapon stats except for unique weapon instances. [[View List|UniqueWeaponHistoricalStats]]