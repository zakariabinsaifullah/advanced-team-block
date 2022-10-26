import { ColorPaletteControl } from '@wordpress/block-editor';
import { ColorIndicator, Popover } from '@wordpress/components';
import { useState } from '@wordpress/element';

// import style
import './colorpicker.scss';

// custom colors palette
import colors from '../../options/colors';

const ColorPicker = ({
	label,
	value,
	onChange,
	enableCustomColors,
	clearable,
}) => {
	const [popOver, setPopOver] = useState(false);
	return (
		<div className="atgb__color_picker">
			<p className="atgb__color_picker_label">{label}</p>
			<button
				className="atgb__color_indicator"
				onClick={() => setPopOver(true)}
			>
				<ColorIndicator colorValue={value} />
			</button>
			{popOver && (
				<Popover
					onFocusOutside={() => setPopOver(false)}
					position="bottom center"
				>
					<div className="atgb__color_picker">
						{enableCustomColors ? (
							<ColorPaletteControl
								label={label}
								value={value}
								onChange={onChange}
								colors={colors}
								clearable={clearable}
							/>
						) : (
							<ColorPaletteControl
								label={label}
								value={value}
								onChange={onChange}
								// colors={[]}
								clearable={clearable}
							/>
						)}
					</div>
				</Popover>
			)}
		</div>
	);
};

export default ColorPicker;
