import {useTheme, Box, Button} from '@mui/material';
import {DownloadOutlined} from '@mui/icons-material';

import Header from '../components/Header';

import {tokens} from '../theme';

function Dashboard() {
	const theme = useTheme();
	const {mode} = theme.palette;
	const colors = tokens(mode);

	return (
		<Box sx={{m: '20px'}}>
			{/* Header */}
			<Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
				<Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
					<Header title='DASHBOARD' subtitle='Welcome Administrator John Doe' />
				</Box>
				<Box>
					<Button
						variant={mode === 'dark' ? 'outlined' : 'contained'}
						color='info'
						sx={{
							p: '10px 20px',
							color: colors.greyAccent[100],
							fontSize: '14px',
							fontWeight: 'bold'
						}}
					>
						<DownloadOutlined sx={{mr: '10px'}} />
						Download Reports
					</Button>
				</Box>
			</Box>
		</Box>
	);
}

export default Dashboard;
