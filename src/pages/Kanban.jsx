/* eslint-disable no-unused-vars */
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

	const addNewCard = title => {
		setuItems([...uItems, {title}]);
	};

	return (
		<Box sx={{m: '20px', pb: '20px'}}>
			<Header title='KANBAN' subtitle='Track Your Progress' />

			<DndContext
				collisionDetection={rectIntersection}
				onDragEnd={e => {
					const container = e.over?.id;
					const title = e.active.data.current?.title ?? '';
					const index = e.active.data.current?.index ?? 0;
					const parent = e.active.data.current?.parent ?? 'ToDo';

					if (container === 'ToDo') {
						setTodoItems([...todoItems, {title}]);
					} else if (container === 'Done') {
						setDoneItems([...doneItems, {title}]);
					} else if (container === 'Unassigned') {
						setuItems([...uItems, {title}]);
					} else {
						setInProgressItems([...inProgressItems, {title}]);
					}

					if (parent === 'ToDo') {
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
						<KanbanLane title='To Do' items={todoItems} color={colors.redAccent[400]} />
						<KanbanLane
							title='In Progress'
							items={inProgressItems}
							color={colors.orangeAccent[400]}
						/>
						<KanbanLane title='Done' items={doneItems} color={colors.blueAccent[400]} />
						<KanbanLane
							title='Unassigned'
							items={uItems}
							color={colors.purpleAccent[400]}
						/>
					</Box>
				</Box>
			</DndContext>
		</Box>
	);
}

export default Kanban;
