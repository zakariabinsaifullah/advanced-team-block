import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { deskCols, tabCols, mobCols, id, anchorId, customClass } =
		attributes;
	return (
		<div
			{...useBlockProps.save({
				className: `atgb_${id} ${
					customClass ? customClass : ''
				} atgb__dcols_${deskCols} atgb__tcols_${tabCols} atgb__mcols_${mobCols}`,
			})}
			id={anchorId ? anchorId : null}
		>
			<InnerBlocks.Content />
		</div>
	);
}
