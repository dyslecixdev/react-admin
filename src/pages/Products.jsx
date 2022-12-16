import {Link} from 'react-router-dom';

import {useTheme, Box, Typography, Button} from '@mui/material';
import {DataGrid, GridToolbar} from '@mui/x-data-grid';

import Header from '../components/Header';

import {tokens} from '../theme';
import {mockDataProducts} from '../data/mockTableData';

function Products() {
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
			field: 'price',
			headerName: 'Price',
			flex: 1,
			cellClassName: 'green-column',
			renderCell: ({row: {price}}) => {
				return <div>${price.toFixed(2)}</div>;
			}
		},
		{
			field: 'category',
			headerName: 'Categories',
			flex: 3,
			renderCell: ({row: {category}}) => {
				return <div>{category.join(', ')}</div>;
			}
		},
		{
			field: 'size',
			headerName: 'Sizes',
			flex: 1,
			cellClassName: 'green-column',
			renderCell: ({row: {size}}) => {
				return <div>{size.join(', ')}</div>;
			}
		},
		{
			field: 'color',
			headerName: 'Colors',
			flex: 3,
			renderCell: ({row: {color}}) => {
				return <div>{color.join(', ')}</div>;
			}
		},
		{field: 'countInStock', headerName: 'Stock Amount', flex: 1, cellClassName: 'green-column'},
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
							to={`/products/${params.row.id}`}
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
			{/* Header and New button */}
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'flex-end'
				}}
			>
				<Header title='PRODUCTS' subtitle='Available Items for Purchase' />
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
					'& .MuiDataGrid-root': {border: 'none'},
					'& .MuiButtonBase-root': {
						color: colors.greyAccent[100]
					},
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: colors.purpleAccent[800],
						borderBottom: 'none'
					},
					// Every other column's text color.
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
					rows={mockDataProducts}
					columns={columns}
					components={{Toolbar: GridToolbar}}
					checkboxSelection
				/>
			</Box>
		</Box>
	);
}

export default Products;
