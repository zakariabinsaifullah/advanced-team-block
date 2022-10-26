import { InnerBlocks } from '@wordpress/block-editor';
const teamGridDeprecated = {
	supports: {
		anchor: true,
		customClassName: true,
	},
	attributes: {
		displayStyle: {
			type: 'string',
			default: 'grid_normal',
		},
		dcols: {
			type: 'number',
			default: 4,
		},
		tcols: {
			type: 'number',
			default: 2,
		},
		mcols: {
			type: 'number',
			default: 1,
		},
		nameColor: {
			type: 'string',
			default: '#333333',
		},
		titleColor: {
			type: 'string',
			default: '#9D9D9D',
		},
		bioColor: {
			type: 'string',
			default: '#333333',
		},
		// font family
		nameFont: {
			type: 'string',
			default: 'Montserrat',
		},
		titleFont: {
			type: 'string',
			default: 'Montserrat',
		},
		bioFont: {
			type: 'string',
			default: 'Montserrat',
		},
		// font size
		nameDeskSize: {
			type: 'number',
			default: 28,
		},
		nameTabSize: {
			type: 'number',
			default: 24,
		},
		nameMobSize: {
			type: 'number',
			default: 20,
		},
		titleDeskSize: {
			type: 'number',
			default: 20,
		},
		titleTabSize: {
			type: 'number',
			default: 18,
		},
		titleMobSize: {
			type: 'number',
			default: 16,
		},
		bioDeskSize: {
			type: 'number',
			default: 15,
		},
		bioTabSize: {
			type: 'number',
			default: 14,
		},
		bioMobSize: {
			type: 'number',
			default: 14,
		},
		// social icons
		socialIconsColor: {
			type: 'string',
			default: '#DF711B',
		},
	},
	migrate({ dcols, tcols, mcols }) {
		return {
			deskCols: dcols,
			tabCols: tcols,
			mobCols: mcols,
			deskRowGap: 30,
			tabRowGap: 30,
			mobRowGap: 20,
			deskColGap: 30,
			tabColGap: 30,
			mobColGap: 0,
			photoRatio: '1/1',
			objectFit: 'cover',
			contentAlign: 'center',
			contentDtopPadding: '20',
			contentDbottomPadding: '20',
			contentDleftPadding: '20',
			contentDrightPadding: '20',
			enableContentDlinkedPadding: true,
			contentDlinkedPadding: '20',
			contentTtopPadding: '15',
			contentTbottomPadding: '15',
			contentTleftPadding: '15',
			contentTrightPadding: '15',
			enableContentTlinkedPadding: true,
			contentTlinkedPadding: '15',
			contentMtopPadding: '10',
			contentMbottomPadding: '10',
			contentMleftPadding: '10',
			contentMrightPadding: '10',
			enableContentMlinkedPadding: true,
			contentMlinkedPadding: '10',
			showSocialProfiles: true,
			iconsVisibleState: 'always',
			iconSize: 18,
			iconsSpacing: '5',
			iconsPanelBg: '#d4d5ff',
			iconColor: '#4f4f7c',
			iconHoverColor: '#347ab5',
			enableCustomColors: true,
			borderStyle: 'solid',
			borderWidth: 1,
			borderColor: '#f8f8f8',
			borderRadius: 0,
			enableBoxShadow: true,
			nameTag: 'h4',
			positionTag: 'h5',
			bioTag: 'p',
		};
	},
	save: ({ attributes, className }) => {
		const {
			displayStyle,
			dcols,
			tcols,
			mcols,
			nameColor,
			titleColor,
			bioColor,
			nameFont,
			titleFont,
			bioFont,
			nameDeskSize,
			nameTabSize,
			nameMobSize,
			titleDeskSize,
			titleTabSize,
			titleMobSize,
			bioDeskSize,
			bioTabSize,
			bioMobSize,
			socialIconsColor,
		} = attributes;
		return (
			<div
				className={`${className} ${displayStyle} gtm_team_grid dcols-${dcols} tcols-${tcols} mcols-${mcols}`}
				data-mnc={nameColor}
				data-mtc={titleColor}
				data-mbc={bioColor}
				data-mnf={nameFont}
				data-mtf={titleFont}
				data-mbf={bioFont}
				data-mndf={nameDeskSize}
				data-mntf={nameTabSize}
				data-mnmf={nameMobSize}
				data-mtdf={titleDeskSize}
				data-mttf={titleTabSize}
				data-mtmf={titleMobSize}
				data-mbdf={bioDeskSize}
				data-mbtf={bioTabSize}
				data-mbmf={bioMobSize}
				data-icons={socialIconsColor}
			>
				<InnerBlocks.Content />
			</div>
		);
	},
};
export default teamGridDeprecated;
