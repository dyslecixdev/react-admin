import {useContext} from 'react';

import {useTheme, Box, IconButton, InputBase, Badge, Avatar} from '@mui/material';
import {
	LightModeOutlined,
	DarkModeOutlined,
	NotificationsOutlined,
	ChatBubbleOutlineOutlined,
	Search
} from '@mui/icons-material';

import {ColorModeContext, tokens} from '../theme';

import Profile from '../assets/profile.jpg';

function Navbar() {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext); // colorMode is an object holding memoized functions.

	return (
		<Box sx={{p: 2, display: 'flex', justifyContent: 'space-between'}}>
			{/* Search Bar */}
			<Box sx={{display: 'flex', background: colors.primary[400], borderRadius: '3px'}}>
				<InputBase sx={{ml: 2, flex: 1}} placeholder='Search' />
				<IconButton type='button' sx={{p: 1}}>
					<Search />
				</IconButton>
			</Box>

			{/* Icons */}
			<Box sx={{display: 'flex', gap: '10px'}}>
				<IconButton onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === 'dark' ? <DarkModeOutlined /> : <LightModeOutlined />}
				</IconButton>
				<IconButton>
					<Badge badgeContent={1} color='error'>
						<NotificationsOutlined />
					</Badge>
				</IconButton>
				<IconButton>
					<Badge badgeContent={4} color='info'>
						<ChatBubbleOutlineOutlined />
					</Badge>
				</IconButton>
				<IconButton sx={{p: 0}}>
					<Avatar alt='John Doe' src={Profile} sx={{width: '30px', height: '30px'}} />
				</IconButton>
			</Box>
		</Box>
	);
}

export default Navbar;
