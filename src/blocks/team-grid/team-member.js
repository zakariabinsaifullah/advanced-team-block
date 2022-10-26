import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
	BlockControls,
} from '@wordpress/block-editor';

import { ToolbarGroup, ToolbarButton, IconButton } from '@wordpress/components';

import { Fragment } from '@wordpress/element';

// Grid styles
import GridStyleOneEdit from './grid-styles/style-one/edit';
import GridStyleOneSave from './grid-styles/style-one/save';

// import deprecated version
import deprecatedMember from './deprecated/team-member';

registerBlockType('bcb/team-member', {
	title: __('Member', 'advanced-team-blocks'),
	description: __('Single team member block', 'advanced-team-blocks'),
	category: 'atgb-blocks',
	deprecated: [deprecatedMember],
	supports: {
		customClassName: false,
		html: false,
		anchor: false,
	},
	icon: {
		foreground: '#4f4f7c',
		src: 'admin-users',
	},
	parent: ['bcb/team-grid'],
	usesContext: [
		'bcb/nameTag',
		'bcb/positionTag',
		'bcb/bioTag',
		'bcb/showSocialProfiles',
		'bcb/iconsVisibleState',
		'bcb/enableBoxShadow',
	],
	attributes: {
		url: {
			type: 'string',
		},
		alt: {
			type: 'string',
		},
		id: {
			type: 'number',
		},
		name: {
			type: 'string',
		},
		nameTag: {
			type: 'string',
			default: 'h4',
		},
		position: {
			type: 'string',
		},
		positionTag: {
			type: 'string',
			default: 'h5',
		},
		bio: {
			type: 'string',
		},
		bioTag: {
			type: 'string',
			default: 'p',
		},
		showSocialProfiles: {
			type: 'boolean',
			default: true,
		},
		iconsVisibleState: {
			type: 'string',
			default: 'always',
		},
		enableBoxShadow: {
			type: 'boolean',
			default: true,
		},
	},
	edit: ({ attributes, setAttributes, className, context }) => {
		const {
			url,
			alt,
			id,
			name,
			nameTag,
			position,
			positionTag,
			bio,
			bioTag,
			showSocialProfiles,
			iconsVisibleState,
			enableBoxShadow,
		} = attributes;

		// set context values
		setAttributes({
			nameTag: context['bcb/nameTag'],
			positionTag: context['bcb/positionTag'],
			bioTag: context['bcb/bioTag'],
			showSocialProfiles: context['bcb/showSocialProfiles'],
			iconsVisibleState: context['bcb/iconsVisibleState'],
			enableBoxShadow: context['bcb/enableBoxShadow'],
		});
		return (
			<Fragment>
				{url && (
					<BlockControls>
						<ToolbarGroup>
							<ToolbarButton>
								<MediaUploadCheck>
									<MediaUpload
										onSelect={(media) => {
											setAttributes({
												url: media.url,
												alt: media.alt,
												id: media.id,
											});
										}}
										allowedTypes={['image']}
										value={id}
										render={({ open }) => (
											<IconButton
												className="components-toolbar__control"
												label={__(
													'Edit image',
													'advanced-team-blocks'
												)}
												icon="edit"
												onClick={open}
											/>
										)}
									/>
								</MediaUploadCheck>
							</ToolbarButton>
						</ToolbarGroup>
					</BlockControls>
				)}
				<div
					className={`${className} ${
						enableBoxShadow && 'bcb__box-shadow'
					}`}
				>
					<GridStyleOneEdit
						url={url}
						alt={alt}
						id={id}
						name={name}
						nameTag={nameTag}
						position={position}
						positionTag={positionTag}
						bio={bio}
						bioTag={bioTag}
						setAttributes={setAttributes}
						showSocialProfiles={showSocialProfiles}
						iconsVisibleState={iconsVisibleState}
					/>
				</div>
			</Fragment>
		);
	},
	save: ({ attributes }) => {
		const {
			url,
			alt,
			id,
			name,
			nameTag,
			position,
			positionTag,
			bio,
			bioTag,
			showSocialProfiles,
			iconsVisibleState,
			enableBoxShadow,
		} = attributes;
		return (
			<div
				{...useBlockProps.save({
					className: `${enableBoxShadow && 'bcb__box-shadow'}`,
				})}
			>
				<GridStyleOneSave
					url={url}
					alt={alt}
					id={id}
					name={name}
					nameTag={nameTag}
					position={position}
					positionTag={positionTag}
					bio={bio}
					bioTag={bioTag}
					showSocialProfiles={showSocialProfiles}
					iconsVisibleState={iconsVisibleState}
				/>
			</div>
		);
	},
});
