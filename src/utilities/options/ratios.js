import { __ } from '@wordpress/i18n';
const ratios = [
	{
		label: __('Inherit', 'advanced-team-blocks'),
		value: 'inherit',
	},
	{
		label: __('1:1', 'advanced-team-blocks'),
		value: '1/1',
	},
	{
		label: __('2:3', 'advanced-team-blocks'),
		value: '2/3',
	},
	{
		label: __('3:2', 'advanced-team-blocks'),
		value: '3/2',
	},
	{
		label: __('3:4', 'advanced-team-blocks'),
		value: '3/4',
	},
	{
		label: __('4:3', 'advanced-team-blocks'),
		value: '4/3',
	},
	{
		label: __('9:16', 'advanced-team-blocks'),
		value: '9/16',
	},
	{
		label: __('16:9', 'advanced-team-blocks'),
		value: '16/9',
	},
];

export default ratios;
