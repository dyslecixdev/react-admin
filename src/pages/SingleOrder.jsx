import {useTheme, Box, Typography, Card, CardMedia, CardContent} from '@mui/material';

import {tokens} from '../theme';
import Paper from '../assets/paper.jpg';
import Sweater from '../assets/product-2.webp';
import WoolCap from '../assets/product-3.webp';

const order = {
	products: [
		{
			id: 12,
			name: 'Christmas Sweater',
			price: 25.99,
			size: ['L'],
			color: ['Red'],
			quantity: 1,
			img: Sweater
		},
		{
			id: 13,
			name: 'Wool Cap',
			price: 22.9,
			size: ['L'],
			color: ['White'],
			quantity: 7,
			img: WoolCap
		}
	],
	totalPrice: 186.29,
	totalQuantity: 8
};

function SingleOrder() {
	const theme = useTheme();
	const {mode} = theme.palette;
	// eslint-disable-next-line no-unused-vars
	const colors = tokens(mode);

	return (
		<Box
			sx={{
				m: '20px',
				pb: '20px',
				display: 'grid',
				gridTemplateColumns: 'repeat(4, 1fr)',
				gridTemplateRows: '1fr',
				gap: '30px'
			}}
		>
			<Card
				sx={{
					gridArea: 'span 1',
					backgroundImage: `url(${Paper})`,
					boxShadow: `2px 4px 10px 1px ${colors.primary[500]}`
				}}
			>
				<CardContent
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '10px',
						color: colors.primary[500]
					}}
				>
					<Typography variant='h1' component='div'>
						Final Total
					</Typography>
					<Typography variant='h3'>Price: ${order.totalPrice.toFixed(2)}</Typography>
					<Typography variant='h3'>Quantity: {order.totalQuantity}</Typography>
				</CardContent>
			</Card>
			{order.products.map(product => (
				<Card
					key={product.id}
					sx={{
						gridArea: 'span 1',
						p: '5px',
						backgroundColor:
							mode === 'dark' ? colors.primary[700] : colors.secondary[500],
						boxShadow: `2px 4px 10px 1px ${colors.greyAccent[400]}`
					}}
				>
					<CardMedia component='img' alt={product.name} image={product.img} />
					<CardContent>
						<Typography gutterBottom variant='h3' component='div'>
							{product.name}
						</Typography>
						<Typography variant='h5'>Price: ${product.price.toFixed(2)}</Typography>
						<Typography variant='h5'>Size: {product.size.join(', ')}</Typography>
						<Typography variant='h5'>Color: {product.color.join(', ')}</Typography>
						<Typography variant='h5'>Quantity: {product.quantity}</Typography>
					</CardContent>
				</Card>
			))}
		</Box>
	);
}

export default SingleOrder;
