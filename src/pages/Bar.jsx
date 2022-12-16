import {useTheme, Box} from '@mui/material';

import {ResponsiveBar} from '@nivo/bar';

import Header from '../components/Header';

import {tokens} from '../theme';
import {mockBarData} from '../data/mockChartData';

function Bar() {
	const theme = useTheme();
	const {mode} = theme.palette;
	const colors = tokens(mode);

	return (
		<Box sx={{m: '20px'}}>
			<Header title='BAR CHART' subtitle='Product Sales By State' />

			{/* Bar Chart */}
			<Box
				sx={{
					height: '70vh',
					backgroundColor: mode === 'light' && colors.secondary[300],
					color: colors.primary[500],
					boxShadow: mode === 'light' && `1px 1px 3px 1px ${colors.greyAccent[400]}`,
					borderRadius: '5px'
				}}
			>
				<ResponsiveBar
					data={mockBarData}
					theme={{
						axis: {
							domain: {
								line: {
									stroke: colors.greyAccent[100]
								}
							},
							legend: {
								text: {
									fill: colors.greyAccent[100]
								}
							},
							ticks: {
								line: {
									stroke: colors.greyAccent[100],
									strokeWidth: 1
								},
								text: {
									fill: colors.greyAccent[100]
								}
							}
						},
						legends: {
							text: {
								fill: colors.redAccent[100]
							}
						}
					}}
					keys={['hat', 'dress', 'jacket', 'pants', 'shirt', 'shoes']}
					indexBy='state'
					margin={{top: 50, right: 130, bottom: 50, left: 60}}
					padding={0.3}
					maxValue={1000}
					valueScale={{type: 'linear'}}
					indexScale={{type: 'band', round: true}}
					colors={{scheme: 'nivo'}}
					defs={[
						{
							id: 'dots',
							type: 'patternDots',
							background: 'inherit',
							color: '#38bcb2',
							size: 4,
							padding: 1,
							stagger: true
						},
						{
							id: 'lines',
							type: 'patternLines',
							background: 'inherit',
							color: '#eed312',
							rotation: -45,
							lineWidth: 6,
							spacing: 10
						}
					]}
					fill={[
						{
							match: {
								id: 'fries'
							},
							id: 'dots'
						},
						{
							match: {
								id: 'sandwich'
							},
							id: 'lines'
						}
					]}
					borderColor={{
						from: 'color',
						modifiers: [['darker', 1.6]]
					}}
					axisTop={null}
					axisRight={null}
					axisBottom={{
						tickSize: 5,
						tickPadding: 5,
						tickRotation: 0,
						legend: 'CITIES',
						legendPosition: 'middle',
						legendOffset: 32
					}}
					axisLeft={{
						tickSize: 5,
						tickPadding: 5,
						tickRotation: 0,
						legend: 'CLOTHING/ACCESORIES',
						legendPosition: 'middle',
						legendOffset: -40
					}}
					enableLabel={false}
					labelSkipWidth={5}
					labelSkipHeight={12}
					labelTextColor={colors.primary[500]}
					legends={[
						{
							dataFrom: 'keys',
							anchor: 'bottom-right',
							direction: 'column',
							justify: false,
							translateX: 120,
							translateY: 0,
							itemsSpacing: 2,
							itemWidth: 100,
							itemHeight: 20,
							itemDirection: 'left-to-right',
							itemOpacity: 0.85,
							symbolSize: 20,
							effects: [
								{
									on: 'hover',
									style: {
										itemOpacity: 1
									}
								}
							]
						}
					]}
					role='application'
					ariaLabel='Nivo bar chart demo'
					// eslint-disable-next-line react/jsx-no-bind, func-names
					barAriaLabel={function (e) {
						return `${e.id}: ${e.formattedValue} in state: ${e.indexValue}`;
					}}
				/>
			</Box>
		</Box>
	);
}

export default Bar;
