import { RichText, InnerBlocks } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

const GridStyleOneSave = ({
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
}) => {
	return (
		<Fragment>
			<div className="atgb__member_photo">
				{url && (
					<img src={url} alt={alt} className={`wp-image-${id}`} />
				)}
				{showSocialProfiles && (
					<div className={`afgb__social_icons ${iconsVisibleState}`}>
						<InnerBlocks.Content />
					</div>
				)}
			</div>
			<div className="atgb__member_info">
				{name && (
					<RichText.Content
						tagName={nameTag}
						className="atgb__member_name"
						value={name}
					/>
				)}
				{position && (
					<RichText.Content
						tagName={positionTag}
						className="atgb__member_position"
						value={position}
					/>
				)}
				{bio && (
					<RichText.Content
						tagName={bioTag}
						className="atgb__member_bio"
						value={bio}
					/>
				)}
			</div>
		</Fragment>
	);
};
export default GridStyleOneSave;
