<?php
define('MEMBERSHIP_TYPE', 'membershipType');
define('MEMBERSHIP_ID', 'membershipId');
define('DESTINY_MEMBERSHIP_ID', 'destinyMembershipId');
define('CLAN_MEMBERSHIP_TYPE', 'clanMembershipType');
define('CHARACTER_ID', 'characterId');
define('DEFINITIONS', 'definitions');
define('GROUP_ID', 'groupId');
define('ITEM_INSTANCE_ID', 'itemInstanceId');
define('VENDOR_ID', 'vendorHash');

$servicesParams = array(
	MEMBERSHIP_TYPE => array(
		'description' => 'The type of account for which info will be extracted.',
        'required' => true,
		'schema' => array(
			'$ref' => '#/components/schemas/BungieMembershipType'
		)
	),
	MEMBERSHIP_ID => array(
		'description' => 'The membershipId related to that type.',
		'required' => true,
		'schema' => array(
			'type' => 'integer',
			'format' => 'int64'
		)
	),
	DESTINY_MEMBERSHIP_ID => array(
		'description' => 'Destiny membership ID.',
		'required' => true,
		'schema' => array(
			'type' => 'integer',
			'format' => 'int64'
		)
	),
	DEFINITIONS => array(
		'description' => 'Include definitions in the response. Use while testing.',
		'schema' => array(
			'type' => 'boolean'
		)
	),
	VENDOR_ID => array(
		'name' => 'vendorHash',
		'description' => 'A valid vendorHash.',
		'schema' => array(
			'type' => 'integer',
			'format' => 'int64'
		)
	)
);

$servicesComponents = array(
	'Destiny.DefinitionType' => array(
		'enum' => array(
			'0',
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'10',
			'11',
			'12',
			'13',
			'14',
			'15',
			'16',
			'17',
			'18',
			'19',
			'20',
			'21',
			'22',
			'23',
		),
		'type' => 'integer',
		'format' => 'int32',
		'x-enum-values' => array(
			array('numericValue' => '0', 'identifier' => 'None'),
			array('numericValue' => '1', 'identifier' => 'Activity'),
			array('numericValue' => '2', 'identifier' => 'ActivityType'),
			array('numericValue' => '3', 'identifier' => 'Class'),
			array('numericValue' => '4', 'identifier' => 'Gender'),
			array('numericValue' => '5', 'identifier' => 'InventoryBucket'),
			array('numericValue' => '6', 'identifier' => 'InventoryItem'),
			array('numericValue' => '7', 'identifier' => 'Progression'),
			array('numericValue' => '8', 'identifier' => 'Race'),
			array('numericValue' => '9', 'identifier' => 'Stat'),
			array('numericValue' => '10', 'identifier' => 'TalentGrid'),
			array('numericValue' => '11', 'identifier' => 'StatGroup'),
			array('numericValue' => '12', 'identifier' => 'UnlockFlag'),
			array('numericValue' => '13', 'identifier' => 'Vendor'),
			array('numericValue' => '14', 'identifier' => 'Destination'),
			array('numericValue' => '15', 'identifier' => 'Place'),
			array('numericValue' => '16', 'identifier' => 'DirectorBook'),
			array('numericValue' => '17', 'identifier' => 'MaterialRequirement'),
			array('numericValue' => '18', 'identifier' => 'SandboxPerk'),
			array('numericValue' => '19', 'identifier' => 'ArtDye'),
			array('numericValue' => '20', 'identifier' => 'ArtDyeChannel'),
			array('numericValue' => '21', 'identifier' => 'ActivityBundle'),
			array('numericValue' => '22', 'identifier' => 'GearAsset'),
			array('numericValue' => '23', 'identifier' => 'GrimoireCard'),
		)
	),
	'Destiny.SearchDestinyPlayer' => array(
		'type' => 'array',
		'items' => array(
			'$ref' => '#/components/schemas/User.UserInfoCard' // TODO: Make D1 version
		)
	),
	'Destiny.PeriodType' => array(
		'enum' => array('0', '1', '2', '3', '4'),
		'type' => 'integer',
		'format' => 'int32',
		'x-enum-values' => array(
			array('numericValue' => '0', 'identifier' => 'None'),
			array('numericValue' => '1', 'identifier' => 'Daily'),
			array('numericValue' => '2', 'identifier' => 'Monthly'),
			array('numericValue' => '3', 'identifier' => 'AllTime'),
			array('numericValue' => '4', 'identifier' => 'Activity'),
		)
	)
);

// A table to unminify all the endpoints
$servicesData = array(
	// Destiny Service
	'Destiny' => array(
		'GetPublicAdvisorsV2' => array(
			'query' => array(
				DEFINITIONS
			)
		),
		'GetAdvisorsForAccount' => array(
			'description' => '',
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID
			),
			'query' => array(
				DEFINITIONS
			)
		),
		'GetAdvisorsForCharacterV2' => array(
			'description' => '',
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID,
				CHARACTER_ID
			),
			'query' => array(
				DEFINITIONS
			)
		),
		'GetDestinyManifest' => array(
			'description' => 'Returns the current version of the Destiny 1 mobile manifest as a json object.',
			'responses' => array(
				'200' => array(
					'$ref' => '#/components/responses/Destiny.Config.DestinyManifest' // TODO: Make D1 version
				)
			),
			'references' => array(
				'http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=Manifest%2f'
			)
		),
		'GetDestinySingleDefinition' => array(
			'description' => 'Returns a single definition from the manifest as json object.',
			'path' => array(
				array(
					'name' => 'definitionType',
					'description' => '',
					'schema' => array(
						'$ref' => '#/components/schemas/Destiny.DefinitionType'
					)
				),
				array(
					'name' => 'definitionId',
					'description' => '',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int64'
					)
				)
			),
			'query' => array(
				DEFINITIONS
			)
		),
		'SearchDestinyPlayer' => array(
			'description' => 'Returns a list of players by username and platform.',
			'path' => array(
				MEMBERSHIP_TYPE,
				array(
					'name' => 'displayName',
					'description' => 'A valid display name to search for.',
					'required' => true,
					'schema' => array(
						'type' => 'string'
					)
				)
			),
			'references' => array(
				'http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=SearchDestinyPlayer%2f%7bmembershipType%7d%2f%7bdisplayName%7d%2f'
			)
		),
		'GetItemReferenceDetail' => false,
		'GetAllItemsSummary' => array(
			'description' => 'Returns all items for a given account.',
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID
			),
			'query' => array(
				DEFINITIONS
			)
		),
		'GetAccount' => array(
			'description' => 'Returns Destiny account information for the supplied membership.',
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID
			),
			'query' => array(
				DEFINITIONS
			),
			'references' => array(
				'https://www.bungie.net/platform/destiny/help/HelpDetail/GET?uri=%7bmembershipType%7d%2fAccount%2f%7bdestinyMembershipId%7d%2f'
			)
		),
		'GetAccountSummary' => array(
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID
			),
			'query' => array(
				DEFINITIONS
			),
		),
		'GetVault' => array(
			'description' => 'Returns the contents of player\'s Vault.',
			'path' => array(
				MEMBERSHIP_TYPE
			),
			'query' => array(
				DEFINITIONS,
				array(
					'name' => 'accountId',
					'description' => 'Destiny membership ID.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int64'
					)
				)
			),
		),
		'GetVaultSummary' => array(
			'path' => array(
				MEMBERSHIP_TYPE
			),
			'query' => array(
				DEFINITIONS,
				array(
					'name' => 'accountId',
					'description' => 'Destiny membership ID.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int64'
					)
				)
			),
		),
		'GetCharacterSummary' => array(
			'description' => 'Returns Destiny character information for the given characterId.<br/>To get a more detailed overview, see the private endpoint [[GetDestinyAccountCharacterComplete]].',
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID,
				CHARACTER_ID
			),
			'query' => array(
				DEFINITIONS
			),
			'references' => array(
				'http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=Stats%2fActivityHistory%2f%7bmembershipType%7d%2f%7bdestinyMembershipId%7d%2f%7bcharacterId%7d%2f'
			)
		),
		'GetCharacter' => array(
			'description' => 'Returns Destiny character information with a given characterId. This endpoint is an extended version of [[GetCharacterSummary]].',
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID,
				CHARACTER_ID
			),
			'query' => array(
				DEFINITIONS
			),
		),
		'GetCharacterInventory' => array(
			'description' => 'Returns the inventory of a Destiny character.',
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID,
				CHARACTER_ID
			),
			'query' => array(
				DEFINITIONS
			),
		),
		'GetCharacterInventorySummary' => array(
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID,
				CHARACTER_ID
			),
			'query' => array(
				DEFINITIONS
			),
		),
		'GetItemDetail' => array(
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID,
				CHARACTER_ID,
				ITEM_INSTANCE_ID
			),
			'query' => array(
				DEFINITIONS
			)
		),
		'GetCharacterActivities' => array(
			'description' => 'Returns activity progress for a given character.',
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID,
				CHARACTER_ID
			),
			'query' => array(
				DEFINITIONS
			),
			'references' => array(
				'http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=%7bmembershipType%7d%2fAccount%2f%7bdestinyMembershipId%7d%2fCharacter%2f%7bcharacterId%7d%2fActivities%2f'
			)
		),
		'GetCharacterProgression' => array(
			'description' => 'Returns progression information for a given Destiny character.',
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID,
				CHARACTER_ID
			),
			'query' => array(
				DEFINITIONS
			),
			'references' => array(
				'http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=%7bmembershipType%7d%2fAccount%2f%7bdestinyMembershipId%7d%2fCharacter%2f%7bcharacterId%7d%2fProgression%2f'
			)
		),
		'GetTriumphs' => array(
			'description' => 'Returns a list of triumph sets for a given account.',
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID
			),
			'query' => array(
				DEFINITIONS
			)
		),
		'GetRecordBookCompletionStatus' => array(
			'path' => array(
				MEMBERSHIP_TYPE,
				array(
					'name' => 'recordBookHash',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int64'
					)
				)
			),
			'query' => array(
				DEFINITIONS
			)
		),
		'GetAllVendorsForCurrentCharacter' => array(
			'path' => array(
				MEMBERSHIP_TYPE,
				CHARACTER_ID
			),
			'query' => array(
				DEFINITIONS
			),
		),
		'GetVendorSummariesForCurrentCharacter' => array(
			'description' => 'Returns a summary of Vendors for a given Destiny character.',
			'path' => array(
				MEMBERSHIP_TYPE,
				CHARACTER_ID
			),
			'query' => array(
				DEFINITIONS
			),
		),
		'GetVendorForCurrentCharacter' => array(
			'description' => 'Returns information about a Vendor for a given Destiny character.',
			'path' => array(
				MEMBERSHIP_TYPE,
				CHARACTER_ID,
				VENDOR_ID
			),
			'query' => array(
				DEFINITIONS
			),
		),
		'GetVendorItemDetailForCurrentCharacter' => array(
			'path' => array(
				MEMBERSHIP_TYPE,
				CHARACTER_ID,
				VENDOR_ID,
				array(
					'name' => 'vendorItemId',
					'description' => 'A valid vendorItemIndex see [[GetVendorForCurrentCharacter]].',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int64'
					)
				)
			),
			'query' => array(
				DEFINITIONS
			),
		),
		'GetPublicAdvisors' => array(
			'description' => 'Returns information about current daily, weekly and special events.',
			'query' => array(
				DEFINITIONS
			),
		),
		'GetPublicXurVendor' => array(
			'description' => 'Returns advisor information about the vendor Xur in Destiny.',
			'query' => array(
				DEFINITIONS
			)
		),
		'GetPublicVendor' => array(
			'description' => 'Returns Public information for a given Vendor.',
			'path' => array(
				VENDOR_ID
			),
			'query' => array(
				DEFINITIONS
			),
		),
		'GetAdvisorsForCurrentCharacter' => array(
			'description' => 'Returns advisor information about a given character.',
			'path' => array(
				MEMBERSHIP_TYPE,
				CHARACTER_ID
			),
			'query' => array(
				DEFINITIONS
			),
		),
		'GetAdvisorsForCharacter' => array(
			'description' => 'Returns advisor information about a given character.',
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID,
				CHARACTER_ID
			),
			'query' => array(
				DEFINITIONS
			),
		),
		'GetSpecialEventAdvisors' => array(
			'description' => 'Returns a list of currently active events.',
			'query' => array(
				DEFINITIONS
			),
		),
		'GetDestinyLiveTileContentItems' => array(
			'description' => 'Returns a list of "tiles" used on the Bungie.net website.'
		),
		'GetBondAdvisors' => array(
			'path' => array(
				MEMBERSHIP_TYPE
			),
			'query' => array(
				DEFINITIONS
			),
		),
		'GetPublicVendorWithMetadata' => array(
			'description' => 'Returns Public information for a given Vendor, with metadata.',
			'path' => array(
				VENDOR_ID
			),
			'query' => array(
				DEFINITIONS
			),
		),
		'GetVendorForCurrentCharacterWithMetadata' => array(
			'description' => 'Returns information about a Vendor for a given Destiny character with metadata.',
			'path' => array(
				MEMBERSHIP_TYPE,
				CHARACTER_ID,
				VENDOR_ID
			),
			'query' => array(
				DEFINITIONS
			),
		),
		'GetVendorItemDetailForCurrentCharacterWithMetadata' => array(
			'description' => 'Returns an item from a Vendor\'s inventory for a given character with metadata.',
			'path' => array(
				MEMBERSHIP_TYPE,
				CHARACTER_ID,
				VENDOR_ID,
				array(
					'name' => 'vendorItemId',
					'description' => 'A valid vendorItemIndex see [[GetVendorForCurrentCharacter]].',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int64'
					)
				)
			),
			'query' => array(
				DEFINITIONS
			),
		),
		'TransferItem' => array(
			'description' => 'Moves items to and from a character and the vault.',
			'post' => array(
				MEMBERSHIP_TYPE,
				array(
					'name' => 'itemReferenceHash',
					'description' => 'The inventoryItemHash for an item.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int64'
					)
				),
				array(
					'name' => 'itemId',
					'description' => 'The instanceId of an equipable item. Should be "0" otherwise.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int64'
					)
				),
				array(
					'name' => 'stackSize',
					'description' => 'How many items to transfer. Should be "1" for equipable items.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int32'
					)
				),
				array(
					'name' => 'characterId',
					'description' => 'A valid characterId that is associated with the given account.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int64'
					)
				),
				array(
					'name' => 'transferToVault',
					'description' => 'Move the item to or from the vault; true or false',
					'schema' => array(
						'type' => 'boolean'
					)
				)
			)
		),
		'EquipItem' => array(
			'description' => 'Equips an item from a character\'s inventory. The endpoint will fail if the character is logged in and doing an activity.',
			'post' => array(
				MEMBERSHIP_TYPE,
				array(
					'name' => 'itemId',
					'description' => 'The instanceId of an equipable item. Should be "0" otherwise.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int64'
					)
				),
				array(
					'name' => 'characterId',
					'description' => 'A valid characterId that is associated with the given account.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int64'
					)
				)
			)
		),
		'EquipItems' => array(
			'description' => 'Equips multiple items from a character\'s inventory and returns the updated inventory and character information. The endpoint will fail if the character is logged in and doing an activity.'
				."\n\n"
				.'**Note:** This is an [experimental endpoint](https://www.bungie.net/en/Clan/Post/39966/187691777/1) that was accidentally left in. While it should work as intended, it may return [incorrect response data and has a higher bandwidth](https://www.bungie.net/en/Clan/Post/39966/196303703/0/0) than simply making multiple [[EquipItem]] requests.',
			'post' => array(
				MEMBERSHIP_TYPE,
				array(
					'name' => 'itemIds',
					'description' => 'An array of item instanceIds to equip.',
					'schema' => array(
						'type' => 'array',
						'items' => array(
							'description' => 'The instanceId of an equipable item. Should be "0" otherwise.',
							'type' => 'integer',
							'format' => 'int64'

						)
					),
				),
				array(
					'name' => 'characterId',
					'description' => 'A valid characterId that is associated with the given account.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int64'
					)
				)
			)
		),
		'SetItemLockState' => array(
			'description' => 'Changes the lock state on an equipable item.',
			'post' => array(
				MEMBERSHIP_TYPE,
				array(
					'name' => 'itemId',
					'description' => 'A valid instanceId of an item to lock/unlock.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int64'
					)
				),
				array(
					'name' => 'characterId',
					'description' => 'A valid characterId that is associated with the given account.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int64'
					)
				),
				array(
					'name' => 'state',
					'description' => 'The item lock state, true to lock, false to unlock.',
					'schema' => array(
						'type' => 'boolean'
					)
				)
			)
		),
		'SetQuestTrackedState' => array(
			'description' => 'Set the track state of a given quest.',
			'post' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID,
				array(
					'name' => 'itemId',
					'description' => 'The unique item hash of the quest item.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int64'
					)
				),
				array(
					'name' => 'characterId',
					'description' => 'A valid characterId that is associated with the given account.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int64'
					)
				),
				array(
					'name' => 'state',
					'description' => 'true = tracked, false = not-tracked',
					'schema' => array(
						'type' => 'boolean'
					)
				)
			)
		),
		'GetHistoricalStatsDefinition' => array(
			'description' => ''
		),
		'GetHistoricalStats' => array(
			'description' => 'Returns historical stat information about a given Destiny character.',
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID,
				CHARACTER_ID
			),
			'query' => array(
				array(
					'name' => 'periodType',
					'description' => 'Indicates a specific period type to return.',
					'schema' => array(
						'$ref' => '#/components/schemas/Destiny.PeriodType'
					)
				),
				array(
					'name' => 'modes',
					'description' => 'Game modes to return. Comma separated.',
					'schema' => array(
						'type' => 'array',
						'items' => array(
							'$ref' => '#/components/schemas/Destiny.ActivityModeType'
						)
					)
				),
				array(
					'name' => 'groups',
					'description' => 'Group of stats to include, otherwise only general stats are returned. Comma separated.',
					'schema' => array(
						'type' => 'array',
						'items' => array(
							'$ref' => '#/components/schemas/Destiny.StatsGroupType'
						)
					)
				),
				array(
					'name' => 'monthstart',
					'description' => 'First month to return when monthly stats are requested. Use the format YYYY-MM.',
					'schema' => array(
						'type' => 'string'
					)
				),
				array(
					'name' => 'monthend',
					'description' => 'Last month to return when monthly stats are requested. Use the format YYYY-MM.',
					'schema' => array(
						'type' => 'string'
					)
				),
				array(
					'name' => 'daystart',
					'description' => 'First day to return when daily stats are requested. Use the format YYYY-MM-DD.',
					'schema' => array(
						'type' => 'string'
					)
				),
				array(
					'name' => 'dayend',
					'description' => 'Last day to return when daily stats are requested. Use the format YYYY-MM-DD.',
					'schema' => array(
						'type' => 'string'
					)
				)
			),
			'references' => array(
				'http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=Stats%2f%7bmembershipType%7d%2f%7bdestinyMembershipId%7d%2f%7bcharacterId%7d%2f'
			)
		),
		'GetHistoricalStatsForAccount' => array(
			'description' => 'Gets aggregate historical stats organized around each character for a given account.',
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID
			),
			array(
				'name' => 'groups',
				'description' => 'Group of stats to include, otherwise only general stats are returned. Comma separated.',
				'schema' => array(
					'type' => 'array',
					'items' => array(
						'$ref' => '#/components/schemas/Destiny.StatsGroupType'
					)
				)
			),
			'references' => array(
				'http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=Stats%2fAccount%2f%7bmembershipType%7d%2f%7bdestinyMembershipId%7d%2f'
			)
		),
		'GetActivityHistory' => array(
			'description' => 'Returns recent activity history for a given character.',
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID,
				CHARACTER_ID
			),
			'query' => array(
				array(
					'name' => 'mode',
					'description' => 'Game mode to return. Required.',
					'schema' => array(
						'$ref' => '#/components/schemas/Destiny.ActivityModeType'
					)
				),
				array(
					'name' => 'count',
					'description' => 'The number of results to return.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int32'
					)
				),
				array(
					'name' => 'page',
					'description' => 'The current page to return. Starts at 1.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int32'
					)
				),
				DEFINITIONS
			)
		),
		'GetUniqueWeaponHistory' => array(
			'description' => 'Gets details about unique weapon usage, including all exotic weapons.',
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID,
				CHARACTER_ID
			),
			'query' => array(
				DEFINITIONS
			)
		),
		'GetLeaderboards' => array(
			'description' => 'Returns leaderboard stats compared against friends. Note you may need to re-authenticate with PSN/Xbox in order to see full rankings.',
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID
			),
			'query' => array(
				array(
					'name' => 'modes',
					'description' => 'Game modes to return. Comma separated.',
					'schema' => array(
						'type' => 'array',
						'items' => array(
							'$ref' => '#/components/schemas/Destiny.ActivityModeType'
						)
					)
				),
				'statid',
				'maxtop'
			)
		),
		'GetClanLeaderboards' => array(
			'description' => '',
			'path' => array(
				array(
					'name' => 'clanId',
					'description' => 'A valid clan ID.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int32'
					)
				)
			),
			'query' => array(
				array(
					'name' => 'modes',
					'description' => 'Game modes to return. Comma separated.',
					'schema' => array(
						'type' => 'array',
						'items' => array(
							'$ref' => '#/components/schemas/Destiny.ActivityModeType'
						)
					)
				),
			)
		),
		'GetLeaderboardsForPsn' => array(
			'description' => 'Returns leaderboard stats compared against PSN friends. Note, you may need re-authenticate with PSN in order to see full rankings.',
			'query' => array(
				array(
					'name' => 'modes',
					'description' => 'Game modes to return. Comma separated.',
					'schema' => array(
						'type' => 'array',
						'items' => array(
							'$ref' => '#/components/schemas/Destiny.ActivityModeType'
						)
					)
				),
			)
		),
		'GetLeaderboardsForCharacter' => false,
		'GetPostGameCarnageReport' => array(
			'description' => 'Gets the available post game carnage report for the activity ID.',
			'path' => array(
				array(
					'name' => 'activityInstanceId',
					'description' => 'A valid activityInstanceId.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int64'
					)
				)
			),
			'query' => array(
				DEFINITIONS
			),
			'references' => array(
				'http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=Stats%2fPostGameCarnageReport%2f%7bactivityId%7d%2f'
			)
		),
		'GetActivityBlob' => false,
		'GetDestinyAggregateActivityStats' => array(
			'description' => 'Gets all activities the character has participated in together with aggregate statistics for those activities.',
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID,
				CHARACTER_ID
			),
			'query' => array(
				DEFINITIONS
			)
		),
		'GetMembershipIdByDisplayName' => array(
			'description' => 'Returns the numerical id of a player based on their display name, zero if not found.',
			'path' => array(
				MEMBERSHIP_TYPE,
				array(
					'name' => 'displayName',
					'description' => 'A valid PSN Id or Gamertag display name.',
					'schema' => array(
						'type' => 'string'
					)
				)
			),
			'query' => array(
				array(
					'name' => 'ignorecase',
					'description' => 'Default is false when not specified. True to cause a caseless search to be used.',
					'schema' => array(
						'type' => 'boolean'
					)
				)
			)
		),
		'GetExcellenceBadges' => array(
			'description' => 'Returns Destiny excellence badges for a given account. No longer in use.',
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID
			),
			'query' => array(
				DEFINITIONS
			)
		),
		'GetMyGrimoire' => array(
			'description' => 'Returns the Grimoire for the currently signed in account.',
			'path' => array(
				MEMBERSHIP_TYPE
			),
			'query' => array(
				DEFINITIONS,
				array(
					'name' => 'flavour',
					'description' => 'Indicates flavour stats should be included with player card data. More testing needed.',
					'schema' => array(
						'type' => 'string'
					)
				),
				array(
					'name' => 'single',
					'description' => 'Return data for a single cardId.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int32'
					)
				)
			)
		),
		'GetGrimoireByMembership' => array(
			'description' => 'Returns the Grimoire for a given account.',
			'path' => array(
				MEMBERSHIP_TYPE,
				DESTINY_MEMBERSHIP_ID
			),
			'query' => array(
				DEFINITIONS,
				array(
					'name' => 'flavour',
					'description' => 'Indicates flavour stats should be included with player card data. More testing needed.',
					'schema' => array(
						'type' => 'string'
					)
				),
				array(
					'name' => 'single',
					'description' => 'Return data for a single cardId.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int32'
					)
				)
			),
			'references' => array(
				'http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=Vanguard%2fGrimoire%2f%7bmembershipType%7d%2f%7bmembershipId%7d%2f'
			)
		),
		'GetGrimoireDefinition' => array(
			'description' => 'Returns Grimoire definitions. This is the equivalent pulling the [[GrimoireDefinition]] from the [[Manifest]].',
			'references' => array(
				'http://www.bungie.net/platform/Destiny/Help/HelpDetail/GET?uri=Vanguard%2fGrimoire%2fDefinition%2f'
			)
		),
		'GetDestinyExplorerItems' => array(
			'description' => 'Advanced InventoryItem search.',
			'query' => array(
				array(
					'name' => 'count',
					'description' => 'The number of results to return. Default is 10.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int32'
					)
				),
				array(
					'name' => 'name',
					'description' => 'Filter by name.',
					'schema' => array(
						'type' => 'string'
					)
				),
				array(
					'name' => 'order',
					'description' => 'Order results.',
					'schema' => array(
						'$ref' => '#/components/schemas/Destiny.ExplorerOrderBy'
					)
				),
				array(
					'name' => 'rarity',
					'description' => 'Filter by item rarity.',
					'schema' => array(
						'$ref' => '#/components/schemas/TierType'
					)
				),
				array(
					'name' => 'damageTypes',
					'description' => 'Filter by damage type.',
					'schema' => array(
						'type' => 'array',
						'items' => array(
							'$ref' => '#/components/schemas/DamageType'
						)
					)
				),
				DEFINITIONS
			)
		),
		'GetDestinyExplorerTalentNodeSteps' => array(
			'description' => 'Advanced search for TalentNodes.',
			'query' => array(
				array(
					'name' => 'page',
					'description' => 'The current page to return. Starts at 1.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int32'
					)
				),
				array(
					'name' => 'count',
					'description' => 'The number of results per page. Default is 10.',
					'schema' => array(
						'type' => 'integer',
						'format' => 'int32'
					)
				),
				array(
					'name' => 'name',
					'description' => 'Filter by name.',
					'schema' => array(
						'type' => 'string'
					)
				),
				array(
					'name' => 'damageTypes',
					'description' => 'Filter by damage type.',
					'schema' => array(
						'type' => 'array',
						'items' => array(
							'$ref' => '#/components/schemas/DamageType'
						)
					)
				),
				DEFINITIONS
			)
		)
	),

	// JSONP Service
	'Jsonp' => array(
		'GetCurrentUser' => array(
			'path' => array('callback')
		)
	),
	// Application Service
	'Application' => array(
		'GetAccessTokensFromCode' => array(
			'post' => array(
				'code'
			),
			'references' => array(
				'https://www.bungie.net/en/Help/Article/45481'
			)
		),
		'GetAccessTokensFromRefreshToken' => array(
			'post' => array(
				'refreshToken'
			),
			'references' => array(
				'https://www.bungie.net/en/Help/Article/45481'
			)
		),
		'CreateApplication' => false,
		'GetApplication' => array(
			'path' => array(
				'applicationId'
			)
		),
		'EditApplication' => array(
			'path' => array(
				'applicationId'
			)
		),
		'GetApplicationApiKeys' => array(
			'path' => array(
				'applicationId'
			)
		),
		'ChangeApiKeyStatus' => false,
		'CreateApiKey' => false,
		'GetAuthorizations' => false,
		'GetAuthorizationForUserAndApplication' => false,
		'RevokeAuthorization' => false,
		'ApplicationSearch' => false,
		'PrivateApplicationSearch' => false,
		'GetOAuthTokens' => false
	),
	// User Service
	'User' => array(
		'CreateUser' => false,
		'UpdateUser' => array(
			'path' => array('postData'),
			'post' => array(
				'about',
				'adultMode',
				'displayName',
				'emailAddress',
				'emailUsage',
				'locale',
				'localeInheritDefault',
				'profilePicture',
				'profileTheme',
				'showActivity',
				'showFacebookPublic',
				'showGamertagPublic',
				'showGroupMessaging',
				'showPsnPublic',
				'uniqueName'
			)
		),
		'UpdateDestinyEmblemAvatar' => false,
		'UpdateUserAdmin' => false,
		'UpdateNotificationSetting' => false,
		'EditSuccessMessageFlags' => false,
		'GetCurrentUser' => false,
		'GetCountsForCurrentUser' => false,
		'GetCurrentBungieNetUser' => false,
		'GetBungieAccount' => array(
			'path' => array(
				MEMBERSHIP_ID,
				MEMBERSHIP_TYPE
			)
		),
		'GetCurrentBungieAccount' => false,
		'SearchUsersPagedV2' => array(
			'path' => array(
				'searchTerm',
				'page'
			)
		),
		'GetNotificationSettings' => false,
		'GetCredentialTypesForAccount' => false,
		'GetAvailableAvatars' => false,
		'GetAvailableAvatarsAdmin' => false,
		'RegisterMobileAppPair' => false,
		'UnregisterMobileAppPair' => false,
		'UpdateStateInfoForMobileAppPair' => false,
		'GetMobileAppPairings' => false,
		'GetMobileAppPairingsUncached' => false,
		'GetSignOutUrl' => false,
		'LinkOverride' => false,
		'GetUserMembershipIds' => false,
		'SetAcknowledged' => array(
			'path' => array(
				'ackId'
			)
		),
		'GetPlatformApiKeysForUser' => false,
		'RemovePartnership' => false,
	),
	// Message Service
	'Message' => array(
		'GetConversationByIdV2' => false,
		'GetConversationWithMemberIdV2' => false,
		'GetConversationThreadV3' => false,
		'SaveMessageV3' => false,
		'SaveMessageV4' => false,
		'UserIsTyping' => false,
		'CreateConversation' => false,
		'CreateConversationV2' => false,
		'GetConversationsV5' => array(
			'path' => array(
				'currentPage'
			)
		),
		'GetGroupConversations' => false,
		'GetGroupConversationsV2' => false,
		'GetTotalConversationCount' => false,
		'GetUnreadConversationCountV4' => false,
		'GetUnreadGroupConversationCount' => false,
		'CheckGroupConversationReadState' => false,
		'LeaveConversation' => false,
		'ReviewInvitations' => false,
		'ReviewAllInvitations' => false,
		'ReviewInvitationDirect' => array(
			'path' => array(
				'invitationId',
				'invitationResponseState'
			)
		),
		'ReviewInvitation' => false,
		'GetAllianceJoinInvitations' => false,
		'GetAllianceInvitedToJoinInvitations' => false,
		'GetInvitationDetails' => false,
		'UpdateConversationLastViewedTimestamp' => false,
		'ModerateGroupWall' => false,
		'SetUserNotifyPreferenceForConversation' => false,
		'GetConversationsV4' => false,
		'GetUnreadConversationCountV3' => false,
		'GetUnreadConversationCountV2' => false,
		'GetConversationById' => array(
			'path' => array(
				'conversationId'
			)
		),
		'GetConversationWithMemberId' => array(
			'path' => array(
				'memberId'
			)
		),
		'SaveMessageV2' => false,
		'GetConversationsV2' => false,
		'GetConversationsV3' => false,
		'GetConversationThreadV2' => false
	),
	// Notification Service
	'Notification' => array(
		'GetRecentNotifications' => false,
		'GetRecentNotificationCount' => false,
		'ResetNotification' => false,
		'GetRealTimeEvents' => false
	),
	// Content Service
	'Content' => array(
		'GetContentType' => false,
		'GetContentById' => false,
		'GetContentByTagAndType' => false,
		'SearchContentEx' => false,
		'SearchContentWithText' => false,
		'SearchContentByTagAndType' => false,
		'GetHomepageContent' => false,
		'GetHomepageContentV2' => false,
		'GetJobs' => false,
		'GetPublications' => false,
		'GetNews' => false,
		'GetDestinyContent' => false,
		'GetDestinyContentV2' => false,
		'GetPromoWidget' => false,
		'GetFeaturedArticle' => false,
		'GetCareers' => false,
		'GetCareer' => false,
		'SearchCareers' => false
	),
	// External Social Service
	'ExternalSocial' => array(
		'GetAggregatedSocialFeed' => false
	),
	// Survey Service
	'Survey' => array(
		'GetSurvey' => false
	),
	// Forum Service
	'Forum' => array(
		'CreatePost' => array(
			'post' => array(
				'body',
				'category',
				'groupId',
				'isGroupPrivate',
				'metadata',
				'parentPostId',
				'subTopicOverride',
				'subject',
				'urlLinkOrImage',
			)
		),
		'CreateContentComment' => false,
		'EditPost' => false,
		'DeletePost' => false,
		'RatePost' => false,
		'ModeratePost' => false,
		'ModerateTag' => false,
		'ModerateGroupPost' => false,
		'GetPopularTags' => false,
		'GetForumTagCountEstimate' => false,
		'MarkReplyAsAnswer' => false,
		'UnmarkReplyAsAnswer' => false,
		'PollVote' => false,
		'ChangePinState' => false,
		'ChangeLockState' => false
	),
	// Activity Service
	'Activity' => array(
		'GetEntitiesFollowedByCurrentUser' => false,
		'GetGroupsFollowedByCurrentUser' => false,
		'GetGroupsFollowedByUser' => false,
		'GetEntitiesFollowedByUser' => false,
		'GetEntitiesFollowedByCurrentUserV2' => false,
		'GetEntitiesFollowedByUserV2' => false,
		'GetGroupsFollowedPagedByCurrentUser' => false,
		'GetGroupsFollowedPagedByUser' => false,
		'GetUsersFollowedByCurrentUser' => false,
		'GetFollowersOfUser' => array(
			'path' => array(
				'profileId'
			)
		),
		'FollowUser' => false,
		'UnfollowUser' => false,
		'GetLikeAndShareActivityForUser' => false,
		'GetLikeAndShareActivityForUserV2' => false,
		'GetForumActivityForUser' => false,
		'GetForumActivityForUserV2' => false,
		'GetLikeShareAndForumActivityForUser' => false,
		'GetApplicationActivityForUser' => false,
		'GetFollowersOfTag' => false,
		'FollowTag' => false,
		'UnfollowTag' => false,
		'GetFriends' => false,
		'GetFriendsAllNoPresence' => false,
		'GetFriendsPaged' => array(
			'path' => array(
				MEMBERSHIP_TYPE,
				'currentPage'
			)
		)
	),
	// Ignore Service
	'Ignore' => array(
		'GetIgnoreStatusForPost' => false,
		'GetIgnoreStatusForUser' => false,
		'GetIgnoresForUser' => false,
		'IgnoreItem' => array(
			'post' => array(
				'ignoredItemId',
				'ignoredItemType',
				'comment',
				'reason',
				'itemContextId',
				'itemContextType',
				'ModeratorRequest'
			)
		),
		'UnignoreItem' => false,
		'MyLastReport' => false,
		'FlagItem' => false,
		'GetReportContext' => false
	),
	// Game Service
	'Game' => array(
		'GetPlayerGamesById' => false,
		'ReachModelSneakerNet' => false
	),
	// Admin Service
	'Admin' => array(
		'GetAssignedReports' => false,
		'ReturnAssignedReports' => false,
		'ResolveReport' => false,
		'OverturnReport' => false,
		'GetDisciplinedReportsForMember' => false,
		'GetRecentDisciplineAndFlagHistoryForMember' => false,
		'GetResolvedReports' => false,
		'GloballyIgnoreItem' => false,
		'OverrideBanOnUser' => false,
		'OverrideMsgBanOnUser' => false,
		'OverrideGroupWallBanOnUser' => false,
		'OverrideGlobalIgnore' => false,
		'AdminUserSearch' => false,
		'GetUserBanState' => false,
		'GetUserWebClientIpHistory' => false,
		'GetUserPostHistory' => false,
		'GetAdminHistory' => false,
		'BulkEditPost' => false
	),
	// Tokens Service
	'Tokens' => array(
		'ClaimAndApplyOnToken' => false,
		'GetCurrentUserOfferHistory' => false,
		'GetCurrentUserThrottleState' => false,
		'ApplyOfferToCurrentDestinyMembership' => false,
		'VerifyAge' => false,
		'ClaimToken' => false,
		'ConsumeMarketplacePlatformCodeOffer' => false,
		'MarketplacePlatformCodeOfferHistory' => false
	),
	// Community Content Service
	'Communitycontent' => array(
		'GetCommunityContent' => false,
		'GetApprovalQueue' => false,
		'SubmitContent' => false,
		'EditContent' => false,
		'AlterApprovalState' => false,
		'GetCommunityLiveStatuses' => array(
			'path' => array(
				'partnershipType',
				'communityStatusSort',
				'page'
			)
		),
		'GetCommunityLiveStatusesForClanmates' => array(
			'path' => array(
				'partnershipType',
				'communityStatusSort',
				'page'
			)
		),
		'GetCommunityLiveStatusesForFriends' => array(
			'path' => array(
				'partnershipType',
				'communityStatusSort',
				'page'
			)
		),
		'GetAdminCommunityLiveStatuses' => false,
		'GetFeaturedCommunityLiveStatuses' => array(
			'path' => array(
				'partnershipType',
				'communityStatusSort',
				'page'
			)
		),
		'GetStreamingStatusForMember' => array(
			'path' => array(
				'partnershipType',
				MEMBERSHIP_TYPE,
				MEMBERSHIP_ID
			)
		),
		'AdminSetCommunityLiveMemberBanStatus' => false,
		'AdminSetCommunityLiveMemberFeatureStatus' => false
	),
	// Core Service
	'Core' => array(
		'HelloWorld' => false,
		'GetAvailableLocales' => false,
		'GetCommonSettings' => false,
		'GetEssentialCommonSettings' => false,
		'GetSystemStatus' => false,
		'GetGlobalAlerts' => false,
		'GetBroadcastNotifications' => false
	)
);

$api_params_old = array(
	// Forum Service
	'CreatePost' => array('query' => array(), 'post' => array(
		'body',
		'category',
		'groupId',
		'isGroupPrivate',
		'metadata',
		'parentPostId',
		'subTopicOverride',
		'subject',
		'urlLinkOrImage',

	)),
	'Poll' => array('query' => array('f' => 'topicId'), 'post' => array()),
	'GetPostAndParent' => array('query' => array('h' => 'childPostId'), 'post' => array()),
	'GetPostAndParentAwaitingApproval' => array('query' => array('h' => 'childPostId'), 'post' => array()),
	'GetPostsThreadedPaged' => array('query' => array('g' => 'parentPostId', 'n' => 'page', 'j' => 'pageSize', 'i' => 'replySize', 'f' => 'getParentPost', 'e' => 'rootThreadMode', 'k' => 'sortMode'), 'post' => array()),
	'GetPostsThreadedPagedFromChild' => array('query' => array('f' => 'childPostId', 'm' => 'page', 'i' => 'pageSize', 'h' => 'replySize', 'e' => 'rootThreadMode', 'j' => 'sortMode'), 'post' => array()),

	'GetTopicForContent' => array('query' => array('h' => 'contentId'), 'post' => array()),
	'GetTopicsPaged' => array('query' => array('l' => 'page', 'h' => 'pageSize', 'k' => 'group', 'm' => 'sort', 'g' => 'quickDate', 'e' => 'categoryFilter'), 'post' => array()),
	'GetTopicsPagedForAlliance' => array('query' => array('l' => 'page', 'h' => 'pageSize', 'k' => 'group', 'm' => 'sort', 'g' => 'quickDate', 'e' => 'categoryFilter'), 'post' => array()),
	'GetTopicsPagedSimple' => array('query' => array('j' => 'page', 'i' => 'group', 'k' => 'sort', 'e' => 'categoryFilter'), 'post' => array()),

	// Activity Service
	'GetFriendsPaged' => array('query' => array('t' => MEMBERSHIP_TYPE, 'i' => 'currentPage'), 'post' => array()),
	'GetFollowersOfUser' => array('query' => array('t' => 'profileId'), 'post' => array()),

	// Group Service
	'ApproveAllPending' => array('query' => array('e' => GROUP_ID), 'post' => array('message')),
	'ApproveGroupMembership' => array('query' => array('f' => GROUP_ID, 'e' => MEMBERSHIP_ID), 'post' => array()),
	'ApproveGroupMembershipV2' => array('query' => array('f' => GROUP_ID, 'e' => MEMBERSHIP_ID), 'post' => array('message')),
	'ApprovePendingForList' => array('query' => array('e' => GROUP_ID), 'post' => array('message', 'membershipIds[]')),

	'BanMember' => array('query' => array('f' => GROUP_ID, 'e' => MEMBERSHIP_ID), 'post' => array('comment', 'length')),

	'BreakAlliance' => array('query' => array('c' => GROUP_ID, 'e' => 'allyGroupId'), 'post' => array()),
	'BreakAlliances' => array('query' => array('e' => GROUP_ID), 'post' => array()),

	//'CreateGroup' => array('query' => array(), 'post' => array()),
	'CreateGroupV2' => array('query' => array(), 'post' => array(
		'name',
		'clanCallSign',
		'motto',
		'about',
		'theme',
		'tags',
		'avatarImageIndex',
		'isPublic',
		'membershipOption',
		'isPublicTopicAdminOnly',
		'isDefaultPostPublic',
		'clanMembershipTypes',
		'attributes',
		'allowChat',
		'locale',
		'clanReviewType',
		'clanName'
	)),
	'CreateMinimalGroup' => array('query' => array(), 'post' => array('groupName', 'groupAbout')),

	'DenyAllPending' => array('query' => array('e' => GROUP_ID), 'post' => array('message')),
	'DenyGroupMembership' => array('query' => array('f' => GROUP_ID, 'e' => MEMBERSHIP_ID), 'post' => array()),
	'DenyGroupMembershipV2' => array('query' => array('f' => GROUP_ID, 'e' => MEMBERSHIP_ID), 'post' => array('message')),
	'DenyPendingForList' => array('query' => array('e' => GROUP_ID), 'post' => array('message', 'membershipIds[]')),

	'DesignateClanFounderForMigration' => array('query' => array('g' => GROUP_ID, 'c' => MEMBERSHIP_ID, 'f' => CLAN_MEMBERSHIP_TYPE), 'post' => array()),

	'DisableClanForGroup' => array('query' => array('f' => GROUP_ID, 'e' => CLAN_MEMBERSHIP_TYPE), 'post' => array()),

	'DisbandAlliance' => array('query' => array('e' => GROUP_ID), 'post' => array()),

	'EditGroup' => array('query' => array('e' => GROUP_ID), 'post' => array()),
	'EditGroupV2' => array('query' => array('e' => GROUP_ID), 'post' => array(
		'name',
		'clanCallSign',
		'motto',
		'about',
		'theme',
		'tags',
		'avatarImageIndex',
		'chatSecurity',
		'allowChat',
		'membershipOptions',
		'homepage',
		'locale',
		'isPublic',
		//'membershipOption',
		'isPublicTopicAdminOnly',
		'defaultPublicity',
		'isDefaultPostPublic',
		'clanReviewType',
		'enableInvitationMessagingForAdmins',
		'clanName',
		'clanMembershipTypes',
		//#'attributes',
		//'allowChat',
		//'locale',
		//'clanReviewType',
		//'clanName'
	)),

	'EditGroupMembership' => array('query' => array('h' => GROUP_ID, 'f' => MEMBERSHIP_ID, 'g' => 'groupMembershipType'), 'post' => array()),

	'EnableClanForGroup' => array('query' => array('g' => GROUP_ID, 'e' => CLAN_MEMBERSHIP_TYPE), 'post' => array()),

	'FollowGroupsWithGroup' => array('query' => array('e' => GROUP_ID), 'post' => array()),
	'FollowGroupWithGroup' => array('query' => array('f' => GROUP_ID, 'c' => 'followGroupId'), 'post' => array()),

	'GetAdminsOfGroup' => array('query' => array('g' => GROUP_ID), 'post' => array()),
	'GetAdminsOfGroupV2' => array('query' => array('g' => GROUP_ID), 'post' => array()),

	//'GetAllGroupsForCurrentMember' => array('query' => array(), 'post' => array()),
	'GetAllGroupsForMember' => array('query' => array('f' => MEMBERSHIP_ID), 'post' => array()),

	'GetAlliedGroups' => array('query' => array('g' => GROUP_ID), 'post' => array()),

	//'GetAvailableAvatars' => array('query' => array(), 'post' => array()),
	//'GetAvailableThemes' => array('query' => array(), 'post' => array()),

	'GetBannedMembersOfGroup' => array('query' => array('g' => GROUP_ID), 'post' => array()),
	'GetBannedMembersOfGroupV2' => array('query' => array('g' => GROUP_ID), 'post' => array()),

	//'GetClanAttributeDefinitions' => array('query' => array(), 'post' => array()),

	//'GetDeletedGroupsForCurrentMember' => array('query' => array(), 'post' => array()),
	'GetFoundedGroupsForMember' => array('query' => array('f' => MEMBERSHIP_ID, 'g' => 'currentPage'), 'post' => array()),
	'GetGroup' => array('query' => array('f' => GROUP_ID), 'post' => array()),
	'GetGroupByName' => array('query' => array('f' => 'groupName'), 'post' => array()),
	'GetGroupsFollowedByGroup' => array('query' => array('d' => GROUP_ID, 'g' => 'currentPage'), 'post' => array()),
	'GetGroupsFollowingGroup' => array('query' => array('d' => GROUP_ID, 'g' => 'currentPage'), 'post' => array()),

	//'GetGroupTagSuggestions' => array('query' => array(), 'post' => array()),

	//'GetJoinedGroupsForCurrentMember' => array('query' => array(), 'post' => array()),
	'GetJoinedGroupsForCurrentMemberV2' => array('query' => array('f' => 'currentPage'), 'post' => array()),

	'GetJoinedGroupsForMember' => array('query' => array('f' => MEMBERSHIP_ID), 'post' => array()),
	'GetJoinedGroupsForMemberV2' => array('query' => array('f' => MEMBERSHIP_ID, 'g' => 'currentPage'), 'post' => array()),
	'GetJoinedGroupsForMemberV3' => array('query' => array('f' => MEMBERSHIP_ID, 'g' => 'currentPage'), 'post' => array()),

	'GetMembersOfClan' => array('query' => array('h' => GROUP_ID), 'post' => array()),

	'GetMembersOfGroup' => array('query' => array('i' => GROUP_ID), 'post' => array()),
	'GetMembersOfGroupV2' => array('query' => array('i' => GROUP_ID), 'post' => array()),
	'GetMembersOfGroupV3' => array('query' => array('j' => GROUP_ID), 'post' => array()),

	'GetPendingClanMemberships' => array('query' => array('g' => GROUP_ID, 'e' => CLAN_MEMBERSHIP_TYPE, 'f' => 'currentPage'), 'post' => array()),

	//'GetPendingGroupsForCurrentMember' => array('query' => array(), 'post' => array()),
	'GetPendingGroupsForCurrentMemberV2' => array('query' => array('f' => 'currentPage'), 'post' => array()),
	'GetPendingGroupsForMember' => array('query' => array('f' => MEMBERSHIP_ID), 'post' => array()),
	'GetPendingGroupsForMemberV2' => array('query' => array('f' => MEMBERSHIP_ID, 'g' => 'currentPage'), 'post' => array()),

	'GetPendingMemberships' => array('query' => array('g' => GROUP_ID), 'post' => array()),
	'GetPendingMembershipsV2' => array('query' => array('f' => GROUP_ID), 'post' => array()),

	//'GetRecommendedGroups' => array('query' => array(), 'post' => array()),

	'GroupSearch' => array('query' => array(), 'post' => array(
		'contents[searchValue]',
		'contents[searchType]',
		'creationDate',
		'currentPage',
		'groupMemberCountFilter',
		'itemsPerPage',
		'localeFilter',
		'membershipType',
		'sortBy',
		'tagText'
	)),

	'InviteClanMember' => array('query' => array('g' => GROUP_ID, 'c' => MEMBERSHIP_ID, 'f' => CLAN_MEMBERSHIP_TYPE), 'post' => array('title', 'message')),
	'InviteGroupMember' => array('query' => array('f' => GROUP_ID, 'c' => MEMBERSHIP_ID), 'post' => array('title', 'message')),
	'InviteManyToJoinAlliance' => array('query' => array('c' => GROUP_ID), 'post' => array('targetIds[]', 'messageContent[message]')),
	'InviteToJoinAlliance' => array('query' => array('c' => GROUP_ID, 'e' => 'allyGroupId'), 'post' => array()),

	'JoinClanForGroup' => array('query' => array('f' => GROUP_ID, 'e' => CLAN_MEMBERSHIP_TYPE), 'post' => array('message')),

	'KickMember' => array('query' => array('g' => GROUP_ID, 'f' => MEMBERSHIP_ID), 'post' => array()),

	'LeaveClanForGroup' => array('query' => array('f' => GROUP_ID, 'e' => CLAN_MEMBERSHIP_TYPE), 'post' => array()),

	'OverrideFounderAdmin' => array('query' => array('f' => GROUP_ID, 'e' => MEMBERSHIP_TYPE), 'post' => array()),

	'RefreshClanSettingsInDestiny' => array('query' => array('e' => CLAN_MEMBERSHIP_TYPE), 'post' => array()),

	'RequestGroupMembership' => array('query' => array('f' => GROUP_ID), 'post' => array()),
	'RequestGroupMembershipV2' => array('query' => array('f' => GROUP_ID), 'post' => array()),

	'RequestToJoinAlliance' => array('query' => array('e' => GROUP_ID, 'c' => 'allyGroupId'), 'post' => array()),

	'RescindGroupMembership' => array('query' => array('f' => GROUP_ID), 'post' => array()),

	'SetGroupAsAlliance' => array('query' => array('e' => GROUP_ID), 'post' => array()),

	'SetPrivacy' => array('query' => array('f' => GROUP_ID), 'post' => array()),

	'UnbanMember' => array('query' => array('f' => GROUP_ID, 'e' => MEMBERSHIP_ID), 'post' => array()),

	'UndeleteGroup' => array('query' => array('e' => GROUP_ID), 'post' => array()),

	'UnfollowAllGroupsWithGroup' => array('query' => array('d' => GROUP_ID), 'post' => array()),
	'UnfollowGroupsWithGroup' => array('query' => array('d' => GROUP_ID), 'post' => array()),
	'UnfollowGroupWithGroup' => array('query' => array('e' => GROUP_ID, 'c' => 'followGroupId'), 'post' => array()),

	// Ignore Service
	'IgnoreItem' => array('query' => array(), 'post' => array(
		'ignoredItemId',
		'ignoredItemType',
		'comment',
		'reason',
		'itemContextId',
		'itemContextType',
		'ModeratorRequest'
	)),

	// Game Service

	// Admin Service

	// Tokens Service
	'ClaimToken' => array('query' => array(), 'post' => array('redeemCode')),
	'ClaimAndApplyOnToken' => array('query' => array('e' => 'tokenType'), 'post' => array('redeemCode')),


	// Core Service

	// CommunitycontentService
	'GetCommunityLiveStatuses' => array('query' => array('partnershipType', 'communityStatusSort', 'page'), 'post' => array()),
	'GetCommunityLiveStatusesForClanmates' => array('query' => array('partnershipType', 'communityStatusSort', 'page'), 'post' => array()),
	'GetCommunityLiveStatusesForFriends' => array('query' => array('partnershipType', 'communityStatusSort', 'page'), 'post' => array()),
	'GetFeaturedCommunityLiveStatuses' => array('query' => array('partnershipType', 'communityStatusSort', 'page'), 'post' => array()),
	'GetStreamingStatusForMember' => array('query' => array('partnershipType', MEMBERSHIP_TYPE, MEMBERSHIP_ID), 'post' => array()),

	'GetPartnerships' => array('query' => array(MEMBERSHIP_ID), 'post' => array()),
);