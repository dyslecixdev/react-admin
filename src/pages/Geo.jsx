import {useTheme, Box} from '@mui/material';

import {ResponsiveChoropleth} from '@nivo/geo';

import Header from '../components/Header';

import {tokens} from '../theme';
import {mockGeographyData} from '../data/mockChartData';
import geoFeatures from '../data/mockGeoFeatures';

function Geo() {
	const theme = useTheme();
	const {mode} = theme.palette;
	const colors = tokens(mode);

	return (
		<Box sx={{m: '20px'}}>
			<Header title='GEOGRAPHY CHART' subtitle='Product Sales Across the World' />

			{/* Geo Chart */}
			<Box
				sx={{
					height: '70vh',
					color: colors.primary[500],
					border: `1px solid ${colors.greyAccent[100]}`,
					borderRadius: '5px'
				}}
			>
				<ResponsiveChoropleth
					data={mockGeographyData}
					features={geoFeatures.features}
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
					margin={{top: 0, right: 0, bottom: 0, left: 0}}
					domain={[0, 1000000]}
					unknownColor='#666666'
					label='properties.name'
					valueFormat='.2s'
					projectionScale={150}
					projectionTranslation={[0.5, 0.5]}
					projectionRotation={[0, 0, 0]}
					borderWidth={1.5}
					borderColor='#fff'
					legends={[
						{
							anchor: 'bottom-left',
							direction: 'column',
							justify: true,
							translateX: 20,
							translateY: -100,
							itemsSpacing: 0,
							itemWidth: 94,
							itemHeight: 18,
							itemDirection: 'left-to-right',
							itemTextColor: colors.greyAccent[100],
							itemOpacity: 0.85,
							symbolSize: 18,
							effects: [
								{
									on: 'hover',
									style: {
										itemTextColor: '#fff',
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

export default Geo;
