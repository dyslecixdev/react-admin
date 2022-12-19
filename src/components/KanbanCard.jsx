/* eslint-disable react/jsx-props-no-spreading */
import {useTheme, Box, Typography} from '@mui/material';

import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

import PropTypes from 'prop-types';

import {tokens} from '../theme';

function KanbanCard({title, index, parent}) {
	const theme = useTheme();
	const {mode} = theme.palette;
	const colors = tokens(mode);

	const {attributes, listeners, setNodeRef, transform} = useDraggable({
		id: title,
		data: {
			title,
			index,
			parent
		}
	});

	const style = {
		transform: CSS.Translate.toString(transform)
	};

	return (
		<Box
			{...listeners}
			{...attributes}
			ref={setNodeRef}
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
