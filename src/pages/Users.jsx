import {Link} from 'react-router-dom';

import {useTheme, Box, Typography, Button} from '@mui/material';
import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import {AdminPanelSettingsOutlined, LockOpenOutlined} from '@mui/icons-material';

import Header from '../components/Header';

import {tokens} from '../theme';
import {mockDataUsers} from '../data/mockTableData';

function Users() {
	const theme = useTheme();
	const {mode} = theme.palette;
	const colors = tokens(mode);

	// To be added deletes a user function.
	const handleDelete = userId => {
		console.log(userId);
	};

	// Creates the column headers in the MUI Table.
	const columns = [
		// cellClassName gives this column a class name.
		{field: 'id', headerName: 'ID', cellClassName: 'green-column', flex: 1},
		{field: 'firstName', headerName: 'First Name', flex: 2},
		{field: 'lastName', headerName: 'Last Name', cellClassName: 'green-column', flex: 2},
		{field: 'email', headerName: 'Email', flex: 2},
		{
			field: 'isAdmin',
			headerName: 'Access',
			flex: 3,
			// renderCell styles the data in a specific column.
			renderCell: ({row: {isAdmin}}) => {
				return (
					<Box
						sx={{
							width: '40%',
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
						{isAdmin === true ? <AdminPanelSettingsOutlined /> : <LockOpenOutlined />}
						<Typography sx={{ml: '5px', color: colors.greyAccent[100]}}>
							{isAdmin === true ? 'Admin' : 'User'}
						</Typography>
					</Box>
				);
			}
		},
		{
			field: 'action',
			headerName: 'Actions',
			flex: 3,
			renderCell: params => {
				return (
					<Box sx={{width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
						<Button
							variant={mode === 'dark' ? 'outlined' : 'contained'}
							color='info'
							component={Link}
							to={`/users/${params.row.id}`} // params contains each row's field.
						>
							<Typography
								sx={{
									color:
										mode === 'dark'
											? colors.blueAccent[400]
											: colors.primary[100]
								}}
							>
								View
							</Typography>
						</Button>
						<Button
							variant={mode === 'dark' ? 'outlined' : 'contained'}
							color='error'
							onClick={() => handleDelete(params.row.id)}
						>
							<Typography
								sx={{
									color:
										mode === 'dark'
											? colors.redAccent[400]
											: colors.primary[100]
								}}
							>
								Delete
							</Typography>
						</Button>
					</Box>
				);
			}
		}
	];

	return (
		<Box sx={{m: '20px'}}>
			{/* Header and New button */}
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'flex-end'
				}}
			>
				<Header title='USERS' subtitle='Manage Employees and Customers' />
				<Button
					variant={mode === 'dark' ? 'outlined' : 'contained'}
					color='success'
					component={Link}
					to='/users/newUser'
					sx={{
						width: '80px',
						p: '5px',
						color: mode === 'dark' ? colors.greenAccent[400] : colors.primary[100]
					}}
				>
					Add New
				</Button>
			</Box>

			{/* MUI Table */}
			<Box
				sx={{
					height: '75vh',
					m: '40px 0 0 0',
					// Removes border around the table's perimeter.
					'& .MuiDataGrid-root': {border: 'none'},
					// Toolbar's text color.
					'& .MuiButtonBase-root': {
						color: colors.greyAccent[100]
					},
					// Column headers' background color.
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: colors.purpleAccent[800],
						borderBottom: 'none'
					},
					// Every other column's text color.
					'& .green-column': {
						color: colors.greenAccent[300]
					},
					// Checkbox color.
					'& .MuiCheckbox-root.Mui-checked': {
						color: colors.greyAccent[100]
					},
					// Removes the bottom border of each row.
					'& .MuiDataGrid-cell': {
						borderBottom: `1px solid ${colors.greyAccent[400]}`
					},
					// Rows' background color.
					'& .MuiDataGrid-virtualScroller': {
						backgroundColor:
							mode === 'dark' ? colors.primary[600] : colors.secondary[500]
					},
					// Footer's background color.
					'& .MuiDataGrid-footerContainer': {
						backgroundColor: colors.purpleAccent[800],
						borderTop: 'none'
					}
				}}
			>
				<DataGrid
					rows={mockDataUsers}
					columns={columns}
					components={{Toolbar: GridToolbar}} // Enables the toolbar
					checkboxSelection // Enables the checkboxes
				/>
			</Box>
		</Box>
	);
}

export default Users;
