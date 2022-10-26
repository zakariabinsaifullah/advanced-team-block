import { useState } from '@wordpress/element';
import { RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// import style
import './columns.scss';

const Columns = ({ label, deskCols, tabCols, mobCols, setAttributes }) => {
	const [device, setDevice] = useState('desktop');
	return (
		<div className="afgb__responsive_items">
			<div className="afgb__label_flex">
				<p className="afgb__label_nomargin">{label}</p>
				<div className="afgb__devices">
					<button
						className={`afgb__device ${
							device === 'desktop' ? 'active' : ''
						}`}
						onClick={() => setDevice('desktop')}
					>
						<svg width="8" height="7" viewBox="0 0 8 7">
							<path d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"></path>
						</svg>
					</button>
					<button
						className={`afgb__device middle_device ${
							device === 'tablet' ? 'active' : ''
						}`}
						onClick={() => setDevice('tablet')}
					>
						<svg width="6" height="7" viewBox="0 0 6 7">
							<path d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"></path>
						</svg>
					</button>
					<button
						className={`afgb__device ${
							device === 'mobile' ? 'active' : ''
						}`}
						onClick={() => setDevice('mobile')}
					>
						<svg width="4" height="7" viewBox="0 0 4 7">
							<path d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"></path>
						</svg>
					</button>
				</div>
			</div>
			<div className="afgb__items">
				{device === 'desktop' && (
					<RangeControl
						beforeIcon="desktop"
						value={deskCols}
						onChange={(value) =>
							setAttributes({
								deskCols: value,
							})
						}
						min={1}
						max={5}
						trackColor="#4f4f7c"
						railColor="#e3e3ff"
						help={
							__('Desktop Columns: ', 'advanced-team-blocks') +
							deskCols
						}
					/>
				)}
				{device === 'tablet' && (
					<RangeControl
						beforeIcon="tablet"
						value={tabCols}
						onChange={(value) =>
							setAttributes({
								tabCols: value,
							})
						}
						min={1}
						max={5}
						trackColor="#4f4f7c"
						railColor="#e3e3ff"
						help={
							__('Tablet Columns: ', 'advanced-team-blocks') +
							tabCols
						}
					/>
				)}
				{device === 'mobile' && (
					<RangeControl
						beforeIcon="smartphone"
						value={mobCols}
						onChange={(value) =>
							setAttributes({
								mobCols: value,
							})
						}
						min={1}
						max={5}
						trackColor="#4f4f7c"
						railColor="#e3e3ff"
						help={
							__('Mobile Columns: ', 'advanced-team-blocks') +
							mobCols
						}
					/>
				)}
			</div>
		</div>
	);
};

export default Columns;
