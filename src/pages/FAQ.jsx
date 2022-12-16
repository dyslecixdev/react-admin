import {
	useTheme,
	Box,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography
} from '@mui/material';
import {ExpandMore} from '@mui/icons-material';

import Header from '../components/Header';

import {tokens} from '../theme';

function FAQ() {
	const theme = useTheme();
	const {mode} = theme.palette;
	const colors = tokens(mode);

	return (
		<Box sx={{m: '20px', pb: '20px'}}>
			<Header title='FAQ' subtitle='Frequently Asked Questions' />

			{/* Accordion Questions */}
			<Accordion
				defaultExpanded
				sx={{
					backgroundColor: mode === 'dark' ? colors.primary[800] : colors.secondary[400],
					boxShadow: `1px 1px 3px 1px ${colors.greyAccent[400]}`
				}}
			>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography variant='h5'>Important Question #1</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{color: colors.greenAccent[400]}}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eius ipsam
						sapiente aliquam doloribus tempora ratione nobis. Nobis aliquam sint
						corporis veritatis ducimus eos, laborum quasi dolorum numquam magni, tempora
						autem maiores facilis mollitia repudiandae sequi nulla quos explicabo
						aspernatur consectetur quibusdam eius. Beatae aspernatur exercitationem
						quisquam culpa, consectetur illum.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion
				defaultExpanded
				sx={{
					backgroundColor: mode === 'dark' ? colors.primary[800] : colors.secondary[400],
					boxShadow: `1px 1px 3px 1px ${colors.greyAccent[400]}`
				}}
			>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography variant='h5'>Important Question #2</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{color: colors.greenAccent[400]}}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eius ipsam
						sapiente aliquam doloribus tempora ratione nobis. Nobis aliquam sint
						corporis veritatis ducimus eos, laborum quasi dolorum numquam magni, tempora
						autem maiores facilis mollitia repudiandae sequi nulla quos explicabo
						aspernatur consectetur quibusdam eius. Beatae aspernatur exercitationem
						quisquam culpa, consectetur illum.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				defaultExpanded
				sx={{
					backgroundColor: mode === 'dark' ? colors.primary[800] : colors.secondary[400],
					boxShadow: `1px 1px 3px 1px ${colors.greyAccent[400]}`
				}}
			>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography variant='h5'>Important Question #3</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{color: colors.greenAccent[400]}}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eius ipsam
						sapiente aliquam doloribus tempora ratione nobis. Nobis aliquam sint
						corporis veritatis ducimus eos, laborum quasi dolorum numquam magni, tempora
						autem maiores facilis mollitia repudiandae sequi nulla quos explicabo
						aspernatur consectetur quibusdam eius. Beatae aspernatur exercitationem
						quisquam culpa, consectetur illum.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				defaultExpanded
				sx={{
					backgroundColor: mode === 'dark' ? colors.primary[800] : colors.secondary[400],
					boxShadow: `1px 1px 3px 1px ${colors.greyAccent[400]}`
				}}
			>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography variant='h5'>Important Question #4</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{color: colors.greenAccent[400]}}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eius ipsam
						sapiente aliquam doloribus tempora ratione nobis. Nobis aliquam sint
						corporis veritatis ducimus eos, laborum quasi dolorum numquam magni, tempora
						autem maiores facilis mollitia repudiandae sequi nulla quos explicabo
						aspernatur consectetur quibusdam eius. Beatae aspernatur exercitationem
						quisquam culpa, consectetur illum.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
}

export default FAQ;
