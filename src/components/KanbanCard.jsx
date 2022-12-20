/* eslint-disable react/jsx-props-no-spreading */
import {useTheme, Box, Typography} from '@mui/material';

import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

import PropTypes from 'prop-types';

import {tokens} from '../theme';

// title is the card's title, index is its unique index, and parent is its current lane.
function KanbanCard({title, index, parent}) {
	const theme = useTheme();
	const {mode} = theme.palette;
	const colors = tokens(mode);

	const {attributes, listeners, setNodeRef, transform} = useDraggable({
		id: title, // Every draggable node must have a unique id.
		data: {
			title,
			index,
			parent
		} // data is used for event handlers (viz. useDraggable()).
	});

	const style = {
		transform: CSS.Translate.toString(transform) // The .toString(transform) is an object that holds the draggable node's position and values.
	};

	return (
		<Box
			{...listeners} // Event handlers.
			{...attributes} // Draggable node's accessibility.
			ref={setNodeRef} // Function to keep track of the draggable node.
			sx={{
				m: '5px',
				backgroundColor: 'white',
				borderRadius: '8px',
				transform: style.transform
			}}
		>
			<Typography variant='h4' sx={{p: '5px 10px', color: colors.primary[500]}}>
				{title}
			</Typography>
		</Box>
	);
}

KanbanCard.propTypes = {
	title: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	parent: PropTypes.string.isRequired
};

export default KanbanCard;
