import {useTheme, Typography, Box} from '@mui/material';

import PropTypes from 'prop-types';

import {tokens} from '../theme';

function Header({title, subtitle}) {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box sx={{mb: '30px'}}>
			<Typography
				variant='h2'
				sx={{mb: '5px', color: colors.greyAccent[100], fontWeight: 'bold'}}
			>
				{title}
			</Typography>
			<Typography variant='h5' sx={{color: colors.purpleAccent[400]}}>
				{subtitle}
			</Typography>
		</Box>
	);
}

// Props validation for ESLint.
Header.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired
};

export default Header;
