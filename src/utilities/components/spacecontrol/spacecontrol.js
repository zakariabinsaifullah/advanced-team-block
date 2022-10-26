import { __experimentalNumberControl as NumberControl } from '@wordpress/components';

// import style
import './spacecontrol.scss';

const SpaceControl = ({ label, value, onChange, help }) => {
	return (
		<div className="afgb__responsive_items">
			<div className="afgb__items spacing">
				<NumberControl
					isShiftStepEnabled={true}
					onChange={(v) => onChange(v)}
					shiftStep={10}
					value={value}
					label={label}
					labelPosition="side"
				/>
				{help && <div className="help_info">{help}</div>}
			</div>
		</div>
	);
};

export default SpaceControl;
