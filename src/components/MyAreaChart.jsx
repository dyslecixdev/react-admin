import {useTheme, Typography} from '@mui/material';

import {AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

import PropTypes from 'prop-types';

import {tokens} from '../theme';

const data = [
	{name: 'July', Total: 1200},
	{name: 'August', Total: 2100},
	{name: 'September', Total: 800},
	{name: 'October', Total: 1600},
	{name: 'November', Total: 900},
	{name: 'December', Total: 1700}
];

function MyAreaChart({title, chartColor}) {
	const theme = useTheme();
	const {mode} = theme.palette;
	const colors = tokens(mode);

	const chartColors = {
		yellow: colors.yellowAccent[400],
		green: colors.greenAccent[400],
		purple: colors.purpleAccent[400]
	};

	return (
		<>
			<Typography
				variant='h3'
				sx={{
					mb: '20px',
					color: mode === 'dark' ? colors.secondary[100] : colors.primary[100],
					textAlign: 'end'
				}}
			>
				{title} (Last 6 months)
			</Typography>
			<ResponsiveContainer width='100%' height='100%' aspect={3 / 1}>
				<AreaChart
					width={730}
					height={250}
					data={data}
					margin={{top: 10, right: 30, left: 0, bottom: 0}}
				>
					<defs>
						<linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
							<stop
								offset='5%'
								stopColor={chartColors[chartColor]}
								stopOpacity={0.8}
							/>
							<stop
								offset='95%'
								stopColor={chartColors[chartColor]}
								stopOpacity={0}
							/>
						</linearGradient>
					</defs>
					<XAxis dataKey='name' stroke='gray' />
					<CartesianGrid strokeDasharray='3 3' className='chartGrid' />
					<Tooltip />
					<Area
						type='monotone'
						dataKey='Total'
						stroke={chartColors[chartColor]}
						fillOpacity={1}
						fill='url(#total)'
					/>
				</AreaChart>
			</ResponsiveContainer>
		</>
	);
}

MyAreaChart.propTypes = {
	title: PropTypes.string.isRequired,
	chartColor: PropTypes.string.isRequired
};

export default MyAreaChart;
