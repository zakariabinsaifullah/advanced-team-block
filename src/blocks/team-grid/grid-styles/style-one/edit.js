import {
	MediaPlaceholder,
	RichText,
	InnerBlocks,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

// child block
import '../../../child-block/icon-block';

const GridStyleOneEdit = ({
	url,
	alt,
	id,
	name,
	nameTag,
	position,
	positionTag,
	bio,
	bioTag,
	setAttributes,
	showSocialProfiles,
	iconsVisibleState,
}) => {
	return (
		<Fragment>
			<div className="atgb__member_photo">
				{url ? (
					<Fragment>
						<img src={url} alt={alt} className={`wp-image-${id}`} />
						{showSocialProfiles && (
							<div
								className={`afgb__social_icons ${iconsVisibleState}`}
							>
								<InnerBlocks
									allowedBlocks={['bcb/icon']}
									template={[
										[
											'bcb/icon',
											{
												icon: 'facebook',
												url: '#',
											},
										],
									]}
									templateLock={false}
								/>
							</div>
						)}
					</Fragment>
				) : (
					<MediaPlaceholder
						onSelect={(media) =>
							setAttributes({
								url: media.url,
								alt: media.alt,
								id: media.id,
							})
						}
						allowedTypes={['image']}
						multiple={false}
						labels={{
							title: __('Add photo', 'advanced-team-blocks'),
						}}
					/>
				)}
			</div>
			<div className="atgb__member_info">
				<RichText
					tagName={nameTag}
					className="atgb__member_name"
					value={name}
					onChange={(content) => setAttributes({ name: content })}
					placeholder={__('Name..', 'advanced-team-blocks')}
				/>
				<RichText
					tagName={positionTag}
					className="atgb__member_position"
					value={position}
					onChange={(content) => setAttributes({ position: content })}
					placeholder={__('Position..', 'advanced-team-blocks')}
				/>
				<RichText
					tagName={bioTag}
					className="atgb__member_bio"
					value={bio}
					onChange={(content) => setAttributes({ bio: content })}
					placeholder={__('Bio..', 'advanced-team-blocks')}
				/>
			</div>
		</Fragment>
	);
};
export default GridStyleOneEdit;
