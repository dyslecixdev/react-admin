import {Link} from 'react-router-dom';

import {useTheme, Box, Typography, Button} from '@mui/material';
import {DataGrid, GridToolbar} from '@mui/x-data-grid';

import Header from '../components/Header';

import {tokens} from '../theme';
import {mockDataOrders} from '../data/mockTableData';

function Orders() {
	const theme = useTheme();
	const {mode} = theme.palette;
	const colors = tokens(mode);

	const handleDelete = userId => {
		console.log(userId);
	};

	const columns = [
		{field: 'id', headerName: 'ID', cellClassName: 'green-column', flex: 1},
		{field: 'name', headerName: 'Name', flex: 2},
		{
			field: 'products',
			headerName: 'Products',
			flex: 3,
			cellClassName: 'green-column',
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
		{field: 'address', headerName: 'Address', flex: 3},
		{
			field: 'totalPrice',
			headerName: 'Total Price',
			flex: 1,
			cellClassName: 'green-column',
			renderCell: ({row: {totalPrice}}) => {
				return <div>${totalPrice.toFixed(2)}</div>;
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
							to={`/orders/${params.row.id}`}
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
		<Box sx={{m: '20px', pb: '20px'}}>
			{/* Header */}
			<Header title='ORDERS' subtitle='Invoices for Purchased Items' />

			{/* MUI Table */}
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
							mode === 'dark' ? colors.primary[600] : colors.secondary[500]
					},
					'& .MuiDataGrid-footerContainer': {
						backgroundColor: colors.purpleAccent[800],
						borderTop: 'none'
					}
				}}
			>
				<DataGrid
					rows={mockDataOrders}
					columns={columns}
					components={{Toolbar: GridToolbar}}
					checkboxSelection
				/>
			</Box>
		</Box>
	);
}

export default Orders;
