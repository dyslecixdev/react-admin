import {useTheme, Box} from '@mui/material';

import {ResponsivePie} from '@nivo/pie';

import Header from '../components/Header';

import {tokens} from '../theme';
import {mockPieData} from '../data/mockChartData';

function Pie() {
	const theme = useTheme();
	const {mode} = theme.palette;
	const colors = tokens(mode);

	return (
		<Box sx={{m: '20px'}}>
			<Header title='PIE CHART' subtitle='Product Sales Across the US' />

			{/* Pie Chart */}
			<Box
				sx={{
					height: '70vh',
					backgroundColor: mode === 'light' && colors.secondary[300],
					color: colors.primary[500],
					borderRadius: '5px'
				}}
			>
				<ResponsivePie
					data={mockPieData}
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
								}
							},
							text: {
								fill: colors.greyAccent[100]
							}
						},
						legends: {
							text: {
								fill: colors.greyAccent[100]
							}
						}
					}}
					margin={{top: 40, right: 80, bottom: 80, left: 80}}
					innerRadius={0.5}
					padAngle={0.7}
					cornerRadius={3}
					activeOuterRadiusOffset={8}
					borderWidth={1}
					borderColor={{
						from: 'color',
						modifiers: [['darker', 0.2]]
					}}
					arcLinkLabelsSkipAngle={10}
					arcLinkLabelsTextColor={colors.greyAccent[100]}
					arcLinkLabelsThickness={2}
					arcLinkLabelsColor={{from: 'color'}}
					arcLabelsSkipAngle={10}
					arcLabelsTextColor={colors.primary[500]}
					enableArcLabels={false}
					defs={[
						{
							id: 'dots',
							type: 'patternDots',
							background: 'inherit',
							color: 'rgba(255, 255, 255, 0.3)',
							size: 4,
							padding: 1,
							stagger: true
						},
						{
							id: 'lines',
							type: 'patternLines',
							background: 'inherit',
							color: 'rgba(255, 255, 255, 0.3)',
							rotation: -45,
							lineWidth: 6,
							spacing: 10
						}
					]}
					legends={[
						{
							anchor: 'bottom',
							direction: 'row',
							justify: false,
							translateX: 0,
							translateY: 56,
							itemsSpacing: 0,
							itemWidth: 100,
							itemHeight: 18,
							itemTextColor: '#999',
							itemDirection: 'left-to-right',
							itemOpacity: 1,
							symbolSize: 18,
							symbolShape: 'circle',
							effects: [
								{
									on: 'hover',
									style: {
										itemTextColor: '#000'
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

export default Pie;
