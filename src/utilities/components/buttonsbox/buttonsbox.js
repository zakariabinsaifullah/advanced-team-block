import { Fragment } from '@wordpress/element';
import { ButtonGroup, Button, Dashicon } from '@wordpress/components';

// import style
import './buttonsbox.scss';

const ButtonsBox = ({ label, icons, onClick, value, options }) => {
	return (
		<Fragment>
			<p className="atgb__label">{label}</p>
			<div className="atgb__titles_group">
				<ButtonGroup>
					{options.map((option) => (
						<Button
							isPressed={option.value === value}
							key={option.value}
							onClick={() => onClick(option.value)}
							title={option.label}
						>
							{icons ? (
								<Dashicon icon={icons[option.value]} />
							) : (
								option.label
							)}
						</Button>
					))}
				</ButtonGroup>
			</div>
		</Fragment>
	);
};

export default ButtonsBox;
