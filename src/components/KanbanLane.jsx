import {Box, Typography} from '@mui/material';

import {useDroppable} from '@dnd-kit/core';

import PropTypes from 'prop-types';

import KanbanCard from './KanbanCard';

function KanbanLane({title, items, color}) {
	const {setNodeRef} = useDroppable({
		id: title
	});

	return (
		<Box
			sx={{
				minHeight: '60vh',
				flex: 1,
				p: '5px',
				display: 'flex',
				flexDirection: 'column',
				gap: '20px'
			}}
		>
			<Typography variant='h3' sx={{alignSelf: 'center'}}>
				{title}
			</Typography>
			<Box
				ref={setNodeRef}
				sx={{
					flex: 1,
					p: '2px',
					display: 'flex',
					flexDirection: 'column',
					backgroundColor: color,
					borderRadius: '5px'
				}}
			>
				{items.map(({title: cardTitle}, key) => (
					// eslint-disable-next-line react/no-array-index-key
					<KanbanCard title={cardTitle} key={key} index={key} parent={title} />
				))}
			</Box>
		</Box>
	);
}

KanbanLane.propTypes = {
	title: PropTypes.string.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	items: PropTypes.array.isRequired,
	color: PropTypes.string.isRequired
};

export default KanbanLane;
