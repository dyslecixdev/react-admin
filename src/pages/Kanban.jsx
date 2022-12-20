import {useState} from 'react';

import {useTheme, Box} from '@mui/material';

import {DndContext, rectIntersection} from '@dnd-kit/core';

import Header from '../components/Header';
import AddCard from '../components/AddCard';
import KanbanLane from '../components/KanbanLane';

import {tokens} from '../theme';

function Kanban() {
	const theme = useTheme();
	const {mode} = theme.palette;
	const colors = tokens(mode);

	const [todoItems, setTodoItems] = useState([]);
	const [doneItems, setDoneItems] = useState([]);
	const [inProgressItems, setInProgressItems] = useState([]);
	const [uItems, setuItems] = useState([]);

	// Creates a card with a title, and places it in the Unassigned lane.
	const addNewCard = title => {
		if (title) setuItems([...uItems, {title}]);
	};

	return (
		<Box sx={{m: '20px', pb: '20px'}}>
			<Header title='KANBAN' subtitle='Track Your Progress' />

			{/* Kanban Board */}
			<DndContext
				collisionDetection={rectIntersection} // Detects collisions between draggable and droppable nodes.
				// Event handler that...
				onDragEnd={e => {
					const container = e.over?.id;
					const title = e.active.data.current?.title ?? '';
					const index = e.active.data.current?.index ?? 0;
					const parent = e.active.data.current?.parent ?? 'To Do';

					// Removes the card from the lane it was dragged out of.
					if (container === 'To Do') {
						setTodoItems([...todoItems, {title}]);
					} else if (container === 'Done') {
						setDoneItems([...doneItems, {title}]);
					} else if (container === 'Unassigned') {
						setuItems([...uItems, {title}]);
					} else {
						setInProgressItems([...inProgressItems, {title}]);
					}

					// Adds the card to the lane it was dropped into.
					if (parent === 'To Do') {
						setTodoItems([...todoItems.slice(0, index), ...todoItems.slice(index + 1)]);
					} else if (parent === 'Done') {
						setDoneItems([...doneItems.slice(0, index), ...doneItems.slice(index + 1)]);
					} else if (parent === 'Unassigned') {
						setuItems([...uItems.slice(0, index), ...uItems.slice(index + 1)]);
					} else {
						setInProgressItems([
							...inProgressItems.slice(0, index),
							...inProgressItems.slice(index + 1)
						]);
					}
				}}
			>
				<Box sx={{display: 'flex', flexDirection: 'column'}}>
					<AddCard addCard={addNewCard} mode={mode} />
					<Box sx={{display: 'flex', justifyContent: 'space-between', gap: '30px'}}>
						<KanbanLane title='To Do' items={todoItems} color={colors.redAccent[600]} />
						<KanbanLane
							title='In Progress'
							items={inProgressItems}
							color={colors.orangeAccent[600]}
						/>
						<KanbanLane title='Done' items={doneItems} color={colors.blueAccent[600]} />
						<KanbanLane
							title='Unassigned'
							items={uItems}
							color={colors.purpleAccent[600]}
						/>
					</Box>
				</Box>
			</DndContext>
		</Box>
	);
}

export default Kanban;
