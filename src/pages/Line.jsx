import {useTheme, Box} from '@mui/material';

import {ResponsiveLine} from '@nivo/line';

import Header from '../components/Header';

import {tokens} from '../theme';
import {mockLineData} from '../data/mockChartData';

function Line() {
	const theme = useTheme();
	const {mode} = theme.palette;
	const colors = tokens(mode);

	return (
		<Box sx={{m: '20px', pb: '20px'}}>
			<Header title='LINE CHART' subtitle="Most Popular Products' Sales (2022)" />

			{/* Line Chart */}
			<Box
				sx={{
					height: '70vh',
					backgroundColor: mode === 'light' && colors.secondary[300],
					color: colors.primary[500],
					boxShadow: mode === 'light' && `1px 1px 3px 1px ${colors.greyAccent[400]}`,
					borderRadius: '5px'
				}}
			>
				<ResponsiveLine
					data={mockLineData}
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
								fill: colors.greyAccent[100]
							}
						},
						tooltip: {
							container: {
								color: colors.primary[500]
							}
						}
					}}
					colors={{scheme: 'category10'}}
					margin={{top: 50, right: 110, bottom: 50, left: 60}}
					xScale={{type: 'point'}}
					yScale={{
						type: 'linear',
						min: 'auto',
						max: 'auto',
						stacked: true,
						reverse: false
					}}
					yFormat=' >-.2f'
					curve='catmullRom'
					axisTop={null}
					axisRight={null}
					axisBottom={{
						orient: 'bottom',
						tickSize: 5,
						tickPadding: 5,
						tickRotation: 0,
						legend: 'MONTHS',
						legendOffset: 36,
						legendPosition: 'middle'
					}}
					axisLeft={{
						orient: 'left',
						tickValues: 10,
						tickSize: 5,
						tickPadding: 5,
						tickRotation: 0,
						legend: 'AMOUNT',
						legendOffset: -40,
						legendPosition: 'middle'
					}}
					enableGridX={false}
					pointSize={10}
					pointColor={{theme: 'background'}}
					pointBorderWidth={2}
					pointBorderColor={{from: 'serieColor'}}
					pointLabelYOffset={-12}
					useMesh
					legends={[
						{
							anchor: 'bottom-right',
							direction: 'column',
							justify: false,
							translateX: 100,
							translateY: 0,
							itemsSpacing: 0,
							itemDirection: 'left-to-right',
							itemWidth: 80,
							itemHeight: 20,
							itemOpacity: 0.75,
							symbolSize: 12,
							symbolShape: 'circle',
							symbolBorderColor: 'rgba(0, 0, 0, .5)',
							effects: [
								{
									on: 'hover',
									style: {
										itemBackground: 'rgba(0, 0, 0, .03)',
										itemOpacity: 1
									}
								}
							]
						}
					]}
				/>
			</Box>
		</Box>
	);
}

export default Line;
