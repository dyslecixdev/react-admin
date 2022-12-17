import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {useTheme, Box, Button, Typography} from '@mui/material';
import {
	DownloadOutlined,
	PersonOutlined,
	ShoppingCartOutlined,
	MonetizationOnOutlined,
	AccountBalanceWalletOutlined,
	MoreVert,
	KeyboardArrowUp
} from '@mui/icons-material';

import Header from '../components/Header';
import StatBox from '../components/StatBox';
import MyAreaChart from '../components/MyAreaChart';

import {tokens} from '../theme';

function Dashboard() {
	const theme = useTheme();
	const {mode} = theme.palette;
	const colors = tokens(mode);

	return (
		<Box sx={{m: '20px', pb: '20px'}}>
			{/* Header and Reports button */}
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

			{/* Statboxes */}
			<Box
				sx={{
					mb: '30px',
					display: 'grid',
					gridTemplateColumns: 'repeat(4, 1fr)',
					columnGap: '30px'
				}}
			>
				<StatBox
					title='CUSTOMERS'
					amount='100'
					subtitle='See all users'
					diff={10}
					icon={
						<PersonOutlined
							sx={{
								gridArea: '1 / 1 / 2 / 2',
								p: '1px',
								color: colors.orangeAccent[600],
								backgroundColor: colors.orangeAccent[300],
								borderRadius: '5px'
							}}
						/>
					}
				/>
				<StatBox
					title='ORDERS'
					amount='100'
					subtitle='See all orders'
					diff={20}
					icon={
						<ShoppingCartOutlined
							sx={{
								gridArea: '1 / 2 / 2 / 3',
								p: '1px',
								color: colors.purpleAccent[700],
								backgroundColor: colors.purpleAccent[400],
								borderRadius: '5px'
							}}
						/>
					}
				/>
				<StatBox
					title='EARNINGS'
					amount='$100.00'
					subtitle='View net earnings'
					diff={15}
					icon={
						<MonetizationOnOutlined
							sx={{
								gridArea: '1 / 3 / 2 / 4',
								p: '1px',
								color: colors.yellowAccent[700],
								backgroundColor: colors.yellowAccent[400],
								borderRadius: '5px'
							}}
						/>
					}
				/>
				<StatBox
					title='BALANCE'
					amount='$100.00'
					subtitle='See details'
					diff={-5}
					icon={
						<AccountBalanceWalletOutlined
							sx={{
								gridArea: '1 / 4 / 2 / 5',
								p: '1px',
								color: colors.blueAccent[700],
								backgroundColor: colors.blueAccent[400],
								borderRadius: '5px'
							}}
						/>
					}
				/>
			</Box>

			{/* Revenue and area chart */}
			<Box sx={{display: 'flex', gap: '30px'}}>
				<Box
					sx={{
						flex: 1,
						p: '10px',
						backgroundColor:
							mode === 'dark' ? colors.primary[600] : colors.secondary[500],
						boxShadow: `2px 4px 10px 1px ${colors.greyAccent[300]}`,
						borderRadius: '5px'
					}}
				>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							color: colors.greyAccent[100]
						}}
					>
						<Typography variant='h1'>Total Revenue</Typography>
						<MoreVert />
					</Box>
					<Box
						sx={{
							p: '20px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							gap: '15px'
						}}
					>
						<Box
							sx={{
								width: '100%',
								height: '100%',
								// Circular Progress Bar Stroke Color
								'& .CircularProgressbar .CircularProgressbar-path': {
									stroke: colors.blueAccent[600]
								}
							}}
						>
							<CircularProgressbar value={70} text='70%' strokeWidth={5} />
						</Box>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center'
							}}
						>
							<Box sx={{textAlign: 'center'}}>
								<Typography variant='h5' sx={{color: colors.greyAccent[100]}}>
									Sales made today
								</Typography>
								<Box
									sx={{
										mt: '10px',
										display: 'flex',
										alignItems: 'center',
										color: colors.purpleAccent[400]
									}}
								>
									<Typography variant='h5'>$12.4k</Typography>
								</Box>
							</Box>
							<Box sx={{textAlign: 'center'}}>
								<Typography variant='h5' sx={{color: colors.greyAccent[100]}}>
									Target
								</Typography>
								<Box
									sx={{
										mt: '10px',
										display: 'flex',
										alignItems: 'center',
										color: colors.greenAccent[400]
									}}
								>
									<KeyboardArrowUp />
									<Typography variant='h5'>$14.2k</Typography>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box
					sx={{
						flex: 4,
						color: mode === 'dark' ? colors.primary[900] : colors.primary[100]
					}}
				>
					<MyAreaChart title='Transactions' chartColor='green' />
				</Box>
			</Box>
		</Box>
	);
}

export default Dashboard;
