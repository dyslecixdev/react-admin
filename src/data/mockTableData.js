// Fake user documents from MongoDB.
const mockDataUsers = [
	{
		id: 1,
		firstName: 'Christian',
		lastName: 'Demesa',
		email: 'cd@gmail.com',
		isAdmin: true
	},
	{
		id: 2,
		firstName: 'Bianca',
		lastName: 'Vazquez',
		email: 'bv@gmail.com',
		isAdmin: true
	},
	{
		id: 3,
		firstName: 'James',
		lastName: 'Vazquez',
		email: 'jv@gmail.com',
		isAdmin: false
	},
	{
		id: 4,
		firstName: 'Mateo',
		lastName: 'Vazquez',
		email: 'mv@gmail.com',
		isAdmin: false
	},
	{
		id: 5,
		firstName: 'Markus',
		lastName: 'Messiah',
		email: 'mm@gmail.com',
		isAdmin: true
	},
	{
		id: 6,
		firstName: 'CJ',
		lastName: 'Miller',
		email: 'cm@gmail.com',
		isAdmin: false
	}
];

// Fake product documents from MongoDB.
const mockDataProducts = [
	{
		id: 1,
		name: 'Ankle Socks',
		price: 12.99,
		category: ['men', 'women', 'children', 'clothing'],
		size: ['XS', 'S', 'M', 'L'],
		color: ['Black', 'White', 'Gray'],
		countInStock: 500
	},
	{
		id: 2,
		name: 'Blouse',
		price: 21.99,
		category: ['women', 'clothing'],
		size: ['S', 'M'],
		color: ['Black', 'White', 'Blue', 'Orange'],
		countInStock: 245
	},
	{
		id: 3,
		name: 'Cardigan',
		price: 49.95,
		category: ['women', 'clothing'],
		size: ['XS', 'S', 'M', 'L'],
		color: ['Brown', 'Green'],
		countInStock: 39
	},
	{
		id: 4,
		name: 'Down Jacket',
		price: 39.99,
		category: ['men', 'women', 'children', 'clothing'],
		size: ['XS', 'S', 'M', 'L'],
		color: ['Brown', 'Green'],
		countInStock: 268
	},
	{
		id: 5,
		name: 'Headband',
		price: 0.99,
		category: ['women', 'children', 'clothing'],
		size: ['XS', 'S', 'M'],
		color: ['Yellow', 'White', 'Gray', 'Brown', 'Orange', 'Blue'],
		countInStock: 862
	},
	{
		id: 6,
		name: 'Leather Jacket',
		price: 52.99,
		category: ['men', 'women', 'children', 'accesories'],
		size: ['S', 'M', 'L'],
		color: ['Black'],
		countInStock: 553
	},
	{
		id: 7,
		name: "Men's Belt",
		price: 16.99,
		category: ['men', 'accesories'],
		size: ['M', 'L'],
		color: ['Brown', 'Black'],
		countInStock: 127
	},
	{
		id: 8,
		name: 'Rancher Cap',
		price: 59.99,
		category: ['men', 'women', 'children', 'accesories'],
		size: ['S', 'M', 'L', 'XL'],
		color: ['Red', 'Gray', 'Black', 'Orange', 'Brown', 'Green'],
		countInStock: 539
	},
	{
		id: 9,
		name: 'Scarf',
		price: 49.95,
		category: ['men', 'women', 'children', 'accesories'],
		size: ['XS', 'S', 'M', 'L', 'XL'],
		color: ['Red'],
		countInStock: 289
	},
	{
		id: 10,
		name: 'Tennis Shoes',
		price: 34.26,
		category: ['men', 'women', 'children', 'accesories'],
		size: ['XS', 'S', 'M', 'L', 'XL'],
		color: ['Purple', 'White', 'Pink', 'Black', 'Gray', 'Blue'],
		countInStock: 123
	},
	{
		id: 11,
		name: "Women's Cargo Pants",
		price: 36.99,
		category: ['women', 'children', 'clothing'],
		size: ['XS', 'S'],
		color: ['Brown', 'White', 'Black', 'Pink', 'Green'],
		countInStock: 729
	}
];

// Fake order documents from MongoDB.
const mockDataOrders = [
	{
		id: 1,
		name: 'Simonette Reyes',
		products: [
			{
				id: 12,
				name: 'Christmas Sweater',
				price: 25.99,
				size: ['L'],
				color: ['Red'],
				quantity: 1
			}
		],
		address: '123 Imaginary Lane, Los Angeles, CA 90001',
		totalPrice: 25.99
	},
	{
		id: 2,
		name: 'Albert Singleterry',
		products: [
			{
				id: 12,
				name: 'Christmas Sweater',
				price: 25.99,
				size: ['L'],
				color: ['Red'],
				quantity: 1
			},
			{
				id: 13,
				name: 'Wool Cap',
				price: 22.9,
				size: ['L'],
				color: ['White'],
				quantity: 7
			}
		],
		address: '123 Imaginary Lane, Los Angeles, CA 90001',
		totalPrice: 186.29
	}
];

export {mockDataUsers, mockDataProducts, mockDataOrders};
