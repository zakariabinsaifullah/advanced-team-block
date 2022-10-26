import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	useInnerBlocksProps,
	InnerBlocks,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TabPanel,
	CardDivider,
	SelectControl,
	ToggleControl,
	RangeControl,
	TextControl,
} from '@wordpress/components';
const { Fragment } = wp.element;

// editor style
import './editor.scss';

// child block
import './team-member';

// utility functions
import ButtonsBox from '../../utilities/components/buttonsbox/buttonsbox';
import Columns from '../../utilities/components/columns/columns';
import Spacing from '../../utilities/components/spacing/spacing';
import InputBox from '../../utilities/components/inputbox/inputbox';
import SpaceControl from '../../utilities/components/spacecontrol/spacecontrol';
import ColorPicker from '../../utilities/components/colorpicker/colorpicker';

// options
import ratios from '../../utilities/options/ratios';
import objectFits from '../../utilities/options/objectfits';
import tags from '../../utilities/options/tags';
import aligns from '../../utilities/options/aligns';
import borderstyles from '../../utilities/options/borderstyles';

// styled components
import styled from 'styled-components';
const Wrapper = styled.div`
	grid-row-gap: ${(props) => props.deskRowGap + 'px'};
	grid-column-gap: ${(props) => props.deskColGap + 'px'};
	.wp-block-bcb-team-member {
		border-radius: ${(props) => props.radius}px;
		border-style: ${(props) => props.borderStyle};
		border-width: ${(props) => props.borderWidth}px;
		border-color: ${(props) => props.borderColor};
		background: ${(props) => props.backgroundColor};
	}
	.wp-block-bcb-team-member:hover {
		border-color: ${(props) => props.hoverBorderColor};
		background: ${(props) => props.hoverBackgroundColor};
	}
	.atgb__member_photo img {
		object-fit: ${(props) => props.objectFit};
		aspect-ratio: ${(props) => props.photoRatio};
	}
	.atgb__member_info {
		padding: ${(props) =>
			props.enableCdlPadding
				? props.cdlinkedPadding + 'px'
				: props.cdtPadding +
				  'px ' +
				  props.cdrPadding +
				  'px ' +
				  props.cdbPadding +
				  'px ' +
				  props.cdlPadding +
				  'px '};
		text-align: ${(props) => props.align};
	}
	.atgb__member_name {
		color: ${(props) => props.nameColor};
	}
	.atgb__member_position {
		color: ${(props) => props.positionColor};
	}
	.atgb__member_bio {
		color: ${(props) => props.bioColor};
	}
	.afgb__social_icons {
		background: ${(props) =>
			props.iconsPanelBg ? props.iconsPanelBg : 'transparent'};
	}

	.afgb__social_icons .block-editor-block-list__layout {
		row-gap: ${(props) => props.iconsSpacing + 'px'};
	}
	.afgb__social_icons svg {
		width: ${(props) => props.iconSize + 'px'};
		height: ${(props) => props.iconSize + 'px'};
		fill: ${(props) => props.iconColor};
	}
	.afgb__social_icons svg:hover {
		fill: ${(props) => props.iconHoverColor};
	}
`;

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		enableCustomColors,
		deskCols,
		tabCols,
		mobCols,
		deskRowGap,
		tabRowGap,
		mobRowGap,
		deskColGap,
		tabColGap,
		mobColGap,
		nameTag,
		positionTag,
		bioTag,
		nameColor,
		positionColor,
		bioColor,
		photoRatio,
		objectFit,
		showSocialProfiles,
		contentAlign,
		contentDtopPadding,
		contentDbottomPadding,
		contentDleftPadding,
		contentDrightPadding,
		enableContentDlinkedPadding,
		contentDlinkedPadding,
		contentTtopPadding,
		contentTbottomPadding,
		contentTleftPadding,
		contentTrightPadding,
		enableContentTlinkedPadding,
		contentTlinkedPadding,
		contentMtopPadding,
		contentMbottomPadding,
		contentMleftPadding,
		contentMrightPadding,
		enableContentMlinkedPadding,
		contentMlinkedPadding,
		iconsVisibleState,
		iconSize,
		iconsSpacing,
		iconsPanelBg,
		iconColor,
		iconHoverColor,
		borderStyle,
		borderWidth,
		borderColor,
		hoverBorderColor,
		borderRadius,
		backgroundColor,
		hoverBackgroundColor,
		enableBoxShadow,
		zIndex,
		anchorId,
		customClass,
	} = attributes;
	// set unique id
	setAttributes({
		id: clientId.slice(0, 8),
	});

	// block props
	const innerBlockProps = useInnerBlocksProps(
		useBlockProps({
			className: `atgb__dcols_${deskCols}`,
		}),
		{
			allowedBlocks: ['bcb/team-member'],
			template: [
				['bcb/team-member'],
				['bcb/team-member'],
				['bcb/team-member'],
			],
			renderAppender: InnerBlocks.ButtonBlockAppender,
		}
	);

	return (
		<Fragment>
			<InspectorControls>
				<TabPanel
					className="atgb__tabs"
					activeClass="active_tab"
					initialTabName={'atgb__general'}
					tabs={[
						{
							name: 'atgb__general',
							title: __('General', 'advanced-team-blocks'),
							className: 'atgb__tab',
						},
						{
							name: 'atgb__style',
							title: __('Style', 'advanced-team-blocks'),
							className: 'atgb__tab atgb__middle',
						},
						{
							name: 'atgb__advanced',
							title: __('Advanced', ''),
							className: 'atgb__tab',
						},
					]}
				>
					{(tab) => {
						if (tab.name === 'atgb__general') {
							return (
								<Fragment>
									<PanelBody initialOpen={true}>
										<Columns
											label={__(
												'Number of Columns',
												'advanced-team-blocks'
											)}
											setAttributes={setAttributes}
											deskCols={deskCols}
											tabCols={tabCols}
											mobCols={mobCols}
										/>
										<CardDivider />
										<Spacing
											label={__(
												'Gap between Rows',
												'advanced-team-blocks'
											)}
											setAttributes={setAttributes}
											deskAttr="deskRowGap"
											tabAttr="tabRowGap"
											mobAttr="mobRowGap"
											deskValue={deskRowGap}
											tabValue={tabRowGap}
											mobValue={mobRowGap}
										/>
										<CardDivider />
										<Spacing
											label={__(
												'Gap between Columns',
												'advanced-team-blocks'
											)}
											setAttributes={setAttributes}
											deskAttr="deskColGap"
											tabAttr="tabColGap"
											mobAttr="mobColGap"
											deskValue={deskColGap}
											tabValue={tabColGap}
											mobValue={mobColGap}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Photo',
											'advanced-team-blocks'
										)}
										initialOpen={false}
									>
										<SelectControl
											label={__(
												'Photo Ratio',
												'advanced-team-blocks'
											)}
											value={photoRatio}
											options={ratios}
											onChange={(size) => {
												setAttributes({
													photoRatio: size,
												});
											}}
										/>
										<SelectControl
											label={__(
												'Object Fit',
												'advanced-team-blocks'
											)}
											value={objectFit}
											options={objectFits}
											onChange={(size) => {
												setAttributes({
													objectFit: size,
												});
											}}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Content',
											'advanced-team-blocks'
										)}
										initialOpen={false}
									>
										<InputBox
											label={__(
												'Padding',
												'advanced-team-blocks'
											)}
											setAttributes={setAttributes}
											dTop={contentDtopPadding}
											dRight={contentDrightPadding}
											dBottom={contentDbottomPadding}
											dLeft={contentDleftPadding}
											dTopAttr="contentDtopPadding"
											dRightAttr="contentDrightPadding"
											dBottomAttr="contentDbottomPadding"
											dLeftAttr="contentDleftPadding"
											dLinked={
												enableContentDlinkedPadding
											}
											dLinkedAttr="enableContentDlinkedPadding"
											dLinkedValue={contentDlinkedPadding}
											dLinkedValueAttr="contentDlinkedPadding"
											tTop={contentTtopPadding}
											tRight={contentTrightPadding}
											tBottom={contentTbottomPadding}
											tLeft={contentTleftPadding}
											tTopAttr="contentTtopPadding"
											tRightAttr="contentTrightPadding"
											tBottomAttr="contentTbottomPadding"
											tLeftAttr="contentTleftPadding"
											tLinked={
												enableContentTlinkedPadding
											}
											tLinkedAttr="enableContentTlinkedPadding"
											tLinkedValue={contentTlinkedPadding}
											tLinkedValueAttr="contentTlinkedPadding"
											mTop={contentMtopPadding}
											mRight={contentMrightPadding}
											mBottom={contentMbottomPadding}
											mLeft={contentMleftPadding}
											mTopAttr="contentMtopPadding"
											mRightAttr="contentMrightPadding"
											mBottomAttr="contentMbottomPadding"
											mLeftAttr="contentMleftPadding"
											mLinked={
												enableContentMlinkedPadding
											}
											mLinkedAttr="enableContentMlinkedPadding"
											mLinkedValue={contentMlinkedPadding}
											mLinkedValueAttr="contentMlinkedPadding"
										/>
										<ButtonsBox
											label={__(
												'Alignment',
												'advanced-team-blocks'
											)}
											icons={{
												left: 'editor-alignleft',
												center: 'editor-aligncenter',
												right: 'editor-alignright',
												justify: 'editor-justify',
											}}
											onClick={(value) =>
												setAttributes({
													contentAlign: value,
												})
											}
											value={contentAlign}
											options={aligns}
										/>
										<CardDivider />
										<ButtonsBox
											value={nameTag}
											label={__(
												'Select Name Tag',
												'advanced-team-blocks'
											)}
											onClick={(value) =>
												setAttributes({
													nameTag: value,
												})
											}
											options={tags}
										/>
										<ButtonsBox
											value={positionTag}
											label={__(
												'Select Position Tag',
												'advanced-team-blocks'
											)}
											onClick={(value) =>
												setAttributes({
													positionTag: value,
												})
											}
											options={tags}
										/>
										<ButtonsBox
											value={bioTag}
											label={__(
												'Select Bio Tag',
												'advanced-team-blocks'
											)}
											onClick={(value) =>
												setAttributes({
													bioTag: value,
												})
											}
											options={tags}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Social Profiles',
											'advanced-team-blocks'
										)}
										initialOpen={false}
									>
										<ToggleControl
											label={__(
												'Show Social Icons',
												'advanced-team-blocks'
											)}
											checked={showSocialProfiles}
											onChange={() =>
												setAttributes({
													showSocialProfiles:
														!showSocialProfiles,
												})
											}
										/>
										{showSocialProfiles && (
											<Fragment>
												<ButtonsBox
													label={__(
														'Icons visible on',
														'advanced-team-blocks'
													)}
													onClick={(value) =>
														setAttributes({
															iconsVisibleState:
																value,
														})
													}
													value={iconsVisibleState}
													options={[
														{
															label: __(
																'Always',
																'advanced-team-blocks'
															),
															value: 'always',
														},
														{
															label: __(
																'On Hover',
																'advanced-team-blocks'
															),
															value: 'hover',
														},
													]}
												/>
												<CardDivider />
												<RangeControl
													label={__(
														'Icon Size',
														'advanced-team-blocks'
													)}
													value={iconSize}
													onChange={(value) =>
														setAttributes({
															iconSize: value,
														})
													}
													min={1}
													max={50}
													allowReset={true}
													resetFallbackValue={18}
													help={__(
														'Note: unit in pixel (px)',
														'advanced-team-blocks'
													)}
													trackColor="#4f4f7c"
													railColor="#e3e3ff"
												/>
												<SpaceControl
													label={__(
														'Space between Icons',
														'advanced-team-blocks'
													)}
													value={iconsSpacing}
													onChange={(value) =>
														setAttributes({
															iconsSpacing: value,
														})
													}
													help={__(
														'Note: unit in pixel (px)',
														'advanced-team-blocks'
													)}
												/>
											</Fragment>
										)}
									</PanelBody>
								</Fragment>
							);
						}
						if (tab.name === 'atgb__style') {
							return (
								<Fragment>
									<PanelBody initialOpen={true}>
										<ToggleControl
											label={__(
												'Use Custom Colors Pallet',
												'advanced-team-blocks'
											)}
											help={
												enableCustomColors
													? __(
															'Note: You are using Plugin Custom Colors Palette',
															'advanced-team-blocks'
													  )
													: __(
															'Note: You are using Theme Colors Palette',
															'advanced-team-blocks'
													  )
											}
											checked={enableCustomColors}
											onChange={() =>
												setAttributes({
													enableCustomColors:
														!enableCustomColors,
												})
											}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Container',
											'advanced-team-blocks'
										)}
										initialOpen={false}
									>
										<ToggleControl
											label={__(
												'Enable box shadow',
												'advanced-team-blocks'
											)}
											help={
												enableBoxShadow
													? __(
															'Note: box shadow is enabled',
															'advanced-team-blocks'
													  )
													: __(
															'Note: box shadow is disabled',
															'advanced-team-blocks'
													  )
											}
											checked={enableBoxShadow}
											onChange={() =>
												setAttributes({
													enableBoxShadow:
														!enableBoxShadow,
												})
											}
										/>
										<RangeControl
											label={__(
												'Border Radius',
												'advanced-team-blocks'
											)}
											value={borderRadius}
											onChange={(value) =>
												setAttributes({
													borderRadius: value,
												})
											}
											min={0}
											max={100}
											allowReset={true}
											resetFallbackValue={0}
											help={__(
												'Note: unit in pixel (px)',
												'advanced-team-blocks'
											)}
											trackColor="#4f4f7c"
											railColor="#e3e3ff"
										/>
										<SelectControl
											label={__(
												'Boder Style',
												'advanced-team-blocks'
											)}
											value={borderStyle}
											options={borderstyles}
											onChange={(style) => {
												setAttributes({
													borderStyle: style,
												});
											}}
										/>
										{borderStyle !== 'none' && (
											<Fragment>
												<RangeControl
													label={__(
														'Border Width',
														'advanced-team-blocks'
													)}
													value={borderWidth}
													onChange={(value) =>
														setAttributes({
															borderWidth: value,
														})
													}
													min={1}
													max={10}
													allowReset={true}
													resetFallbackValue={1}
													help={__(
														'Note: unit in pixel (px)',
														'advanced-team-blocks'
													)}
													trackColor="#4f4f7c"
													railColor="#e3e3ff"
												/>
												<CardDivider />
												<ColorPicker
													label={__(
														'Border Color',
														'advanced-team-blocks'
													)}
													clearable={false}
													value={borderColor}
													onChange={(color) =>
														setAttributes({
															borderColor: color,
														})
													}
													enableCustomColors={
														enableCustomColors
													}
												/>
												<ColorPicker
													label={__(
														'Border Hover Color',
														'advanced-team-blocks'
													)}
													clearable={true}
													value={hoverBorderColor}
													onChange={(color) =>
														setAttributes({
															hoverBorderColor:
																color,
														})
													}
													enableCustomColors={
														enableCustomColors
													}
												/>
												<CardDivider />
												<ColorPicker
													label={__(
														'Background',
														'advanced-team-blocks'
													)}
													clearable={true}
													value={backgroundColor}
													onChange={(color) =>
														setAttributes({
															backgroundColor:
																color,
														})
													}
													enableCustomColors={
														enableCustomColors
													}
												/>
												<ColorPicker
													label={__(
														'Hover Background',
														'advanced-team-blocks'
													)}
													clearable={true}
													value={hoverBackgroundColor}
													onChange={(color) =>
														setAttributes({
															hoverBackgroundColor:
																color,
														})
													}
													enableCustomColors={
														enableCustomColors
													}
												/>
											</Fragment>
										)}
									</PanelBody>
									<PanelBody
										title={__(
											'Content',
											'advanced-team-blocks'
										)}
										initialOpen={false}
									>
										<ColorPicker
											label={__(
												'Name Color',
												'advanced-team-blocks'
											)}
											clearable={true}
											value={nameColor}
											onChange={(color) =>
												setAttributes({
													nameColor: color,
												})
											}
											enableCustomColors={
												enableCustomColors
											}
										/>
										<ColorPicker
											label={__(
												'Position Color',
												'advanced-team-blocks'
											)}
											clearable={true}
											value={positionColor}
											onChange={(color) =>
												setAttributes({
													positionColor: color,
												})
											}
											enableCustomColors={
												enableCustomColors
											}
										/>
										<ColorPicker
											label={__(
												'Bio Color',
												'advanced-team-blocks'
											)}
											clearable={true}
											value={bioColor}
											onChange={(color) =>
												setAttributes({
													bioColor: color,
												})
											}
											enableCustomColors={
												enableCustomColors
											}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Social Icons',
											'advanced-team-blocks'
										)}
										initialOpen={false}
									>
										<ColorPicker
											label={__(
												'Panel Background',
												'advanced-team-blocks'
											)}
											clearable={false}
											value={iconsPanelBg}
											onChange={(color) =>
												setAttributes({
													iconsPanelBg: color,
												})
											}
											enableCustomColors={
												enableCustomColors
											}
										/>
										<CardDivider />
										<ColorPicker
											label={__(
												'Icon Color',
												'advanced-team-blocks'
											)}
											clearable={false}
											value={iconColor}
											onChange={(color) =>
												setAttributes({
													iconColor: color,
												})
											}
											enableCustomColors={
												enableCustomColors
											}
										/>
										<ColorPicker
											label={__(
												'Icon Hover Color',
												'advanced-team-blocks'
											)}
											clearable={false}
											value={iconHoverColor}
											onChange={(color) =>
												setAttributes({
													iconHoverColor: color,
												})
											}
											enableCustomColors={
												enableCustomColors
											}
										/>
									</PanelBody>
								</Fragment>
							);
						}
						if (tab.name === 'atgb__advanced') {
							return (
								<Fragment>
									<PanelBody initialOpen={true}>
										<RangeControl
											label={__(
												'Z-Index',
												'advanced-team-blocks'
											)}
											value={zIndex}
											onChange={(value) =>
												setAttributes({
													zIndex: value,
												})
											}
											min={-100}
											max={100}
											allowReset={true}
											resetFallbackValue={''}
											help={__(
												'Z-index property specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order.',
												'advanced-team-blocks'
											)}
											trackColor="#4f4f7c"
											railColor="#e3e3ff"
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Miscellaneous',
											'advanced-team-blocks'
										)}
										initialOpen={false}
									>
										<TextControl
											label={__(
												'HTML Anchor ID',
												'advanced-team-blocks'
											)}
											value={anchorId}
											onChange={(className) =>
												setAttributes({
													anchorId: className.replace(
														/[^a-zA-Z0-9_-]/g,
														'-'
													),
												})
											}
											help={__(
												'Anchor ID lets you link directly to a section on a page.',
												'advanced-team-blocks'
											)}
										/>
										<TextControl
											label={__(
												'Additional Class (es)',
												'easy-accordion-block'
											)}
											value={customClass}
											onChange={(className) =>
												setAttributes({
													customClass: className,
												})
											}
											help={__(
												'Use space to separate multiple classes.',
												'advanced-team-blocks'
											)}
										/>
									</PanelBody>
								</Fragment>
							);
						}
					}}
				</TabPanel>
			</InspectorControls>
			<Wrapper
				deskRowGap={deskRowGap}
				deskColGap={deskColGap}
				photoRatio={photoRatio}
				objectFit={objectFit}
				enableCdlPadding={enableContentDlinkedPadding}
				cdlinkedPadding={contentDlinkedPadding}
				cdtPadding={contentDtopPadding}
				cdbPadding={contentDbottomPadding}
				cdlPadding={contentDleftPadding}
				cdrPadding={contentDrightPadding}
				align={contentAlign}
				iconSize={iconSize}
				iconsSpacing={iconsSpacing}
				radius={borderRadius}
				borderWidth={borderWidth}
				borderStyle={borderStyle}
				borderColor={borderColor}
				hoverBorderColor={hoverBorderColor}
				backgroundColor={backgroundColor}
				hoverBackgroundColor={hoverBackgroundColor}
				nameColor={nameColor}
				positionColor={positionColor}
				bioColor={bioColor}
				iconsPanelBg={iconsPanelBg}
				iconColor={iconColor}
				iconHoverColor={iconHoverColor}
				{...innerBlockProps}
			/>
		</Fragment>
	);
}
