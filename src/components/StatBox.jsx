import {useTheme, Box, Typography} from '@mui/material';
import {KeyboardArrowUp, KeyboardArrowDown} from '@mui/icons-material';

import PropTypes from 'prop-types';

import {tokens} from '../theme';

function StatBox({title, amount, subtitle, diff, icon}) {
	const theme = useTheme();
	const {mode} = theme.palette;
	const colors = tokens(mode);

	return (
		<Box
			sx={{
				height: '100px',
				p: '10px',
				flex: 1,
				display: 'flex',
				justifyContent: 'space-between',
				backgroundColor: mode === 'dark' ? colors.primary[600] : colors.secondary[500],
				borderRadius: '5px',
				boxShadow: `2px 4px 10px 1px ${colors.greyAccent[400]}`
			}}
		>
			{/* Left side of the statbox */}
			<Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
				<Typography variant='h5'>{title}</Typography>
				<Typography variant='h4'>{amount}</Typography>
				<Typography
					variant='h6'
					sx={{borderBottom: `1px dotted ${colors.greyAccent[100]}`}}
				>
					{subtitle}
				</Typography>
			</Box>

			{/* Right side of the statbox */}
			<Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						color: diff > 0 ? `${colors.greenAccent[400]}` : `${colors.redAccent[400]}`
					}}
				>
					{diff > 0 ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
					{diff > 0 ? `+${diff}%` : `${diff}%`}
				</Box>
				<Box sx={{display: 'flex', justifyContent: 'flex-end'}}>{icon}</Box>
			</Box>
		</Box>
	);
}

StatBox.propTypes = {
	title: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	diff: PropTypes.number.isRequired,
	icon: PropTypes.element.isRequired
};

export default StatBox;
