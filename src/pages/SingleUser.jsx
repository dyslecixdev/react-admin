import {useTheme, Box, Button, Typography, Avatar} from '@mui/material';
import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import {AdminPanelSettingsOutlined, LockOpenOutlined} from '@mui/icons-material';

import MyAreaChart from '../components/MyAreaChart';

import {tokens} from '../theme';
import {mockDataTransaction} from '../data/mockTableData';
import Profile from '../assets/profile.jpg';

function SingleUser() {
	const theme = useTheme();
	const {mode} = theme.palette;
	const colors = tokens(mode);

	// todo Change admin dynamically.
	const isAdmin = true;

	const columns = [
		{field: 'id', headerName: 'ID', cellClassName: 'green-column'},
		{
			field: 'products',
			headerName: 'Products',
			flex: 1,
			renderCell: ({row: {products}}) => {
				return (
					<div>
						{products.map(({id, name, price, size, color, quantity}) => (
							<div key={id}>
								{quantity} {size} {color} {name} ${price.toFixed(2)}
							</div>
						))}
					</div>
				);
			}
		},
		{field: 'address', headerName: 'Address', cellClassName: 'green-column', flex: 2},
		{
			field: 'totalPrice',
			headerName: 'Total Price',
			flex: 1,
			renderCell: ({row: {totalPrice}}) => {
				return <div>${totalPrice.toFixed(2)}</div>;
			}
		}
	];

	return (
		<Box sx={{m: '20px', pb: '20px'}}>
			<Box sx={{p: '20px', display: 'flex', gap: '30px'}}>
				{/* User Information */}
				<Box
					sx={{
						p: '20px',
						flex: 2,
						position: 'relative',
						backgroundColor:
							mode === 'dark' ? colors.primary[600] : colors.secondary[500],
						boxShadow: `2px 4px 10px 1px ${colors.greyAccent[400]}`,
						borderRadius: '5px'
					}}
				>
					<Button
						color='info'
						sx={{
							p: '5px',
							position: 'absolute',
							top: 0,
							right: 0,
							color: colors.blueAccent[400],
							borderRadius: '0px 0px 0px 5px'
						}}
					>
						Edit
					</Button>
					<Typography variant='h2' sx={{mb: '40px'}}>
						Information
					</Typography>
					<Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
						<Avatar
							alt='John Doe'
							src={Profile}
							sx={{width: '250px', height: '250px'}}
						/>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-evenly',
								alignItems: 'center'
							}}
						>
							<Typography variant='h1'>John Doe</Typography>
							<Typography variant='h5'>Email: jd@gmail.com</Typography>
							<Box
								sx={{
									width: '60%',
									m: '0 auto',
									p: '5px',
									display: 'flex',
									justifyContent: 'center',
									backgroundColor:
										isAdmin === true
											? colors.orangeAccent[600]
											: colors.orangeAccent[700],
									borderRadius: '4px'
								}}
							>
								{isAdmin === true ? (
									<AdminPanelSettingsOutlined />
								) : (
									<LockOpenOutlined />
								)}
								<Typography sx={{ml: '5px', color: colors.greyAccent[100]}}>
									{isAdmin === true ? 'Admin' : 'User'}
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>

				{/* Area Chart */}
				<Box
					sx={{
						flex: 4,
						color: mode === 'dark' ? colors.primary[900] : colors.primary[100]
					}}
				>
					<MyAreaChart title='Purchases' chartColor='purple' />
				</Box>
			</Box>

			{/* MUI Table */}
			<Box
				sx={{
					m: '10px 20px',
					p: '20px',
					backgroundColor: mode === 'dark' ? colors.primary[600] : colors.secondary[500],
					boxShadow: `2px 4px 10px 1px ${colors.greyAccent[400]}`,
					borderRadius: '5px'
				}}
			>
				<Typography variant='h2'>Last Transactions</Typography>
				<Box sx={{m: '20px'}}>
					<Box
						sx={{
							height: '75vh',
							m: '40px 0 0 0',
							'& .MuiDataGrid-root': {border: 'none'},
							'& .MuiButtonBase-root': {
								color: colors.greyAccent[100]
							},
							'& .MuiDataGrid-columnHeaders': {
								backgroundColor: colors.purpleAccent[800],
								borderBottom: 'none'
							},
							'& .green-column': {
								color: colors.greenAccent[300]
							},
							'& .MuiCheckbox-root.Mui-checked': {
								color: colors.greyAccent[100]
							},
							'& .MuiDataGrid-cell': {
								borderBottom: `1px solid ${colors.greyAccent[400]}`
							},
							'& .MuiDataGrid-virtualScroller': {
								backgroundColor:
									mode === 'dark' ? colors.primary[500] : colors.secondary[900]
							},
							'& .MuiDataGrid-footerContainer': {
								backgroundColor: colors.purpleAccent[800],
								borderTop: 'none'
							}
						}}
					>
						<DataGrid
							rows={mockDataTransaction}
							columns={columns}
							components={{Toolbar: GridToolbar}}
							checkboxSelection
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default SingleUser;
