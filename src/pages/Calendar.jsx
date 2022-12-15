import {useState} from 'react';

import {
	useTheme,
	Box,
	List,
	ListItem,
	ListItemText,
	Typography,
	Modal,
	TextField,
	Button,
	ButtonGroup
} from '@mui/material';

import {formatDate} from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

import Header from '../components/Header';

import {tokens} from '../theme';

function Calendar() {
	const theme = useTheme();
	const {mode} = theme.palette;
	const colors = tokens(mode);

	const [currentEvents, setCurrentEvents] = useState([]);
	const [openDateModal, setOpenDateModal] = useState(false);
	const [openEventModal, setOpenEventModal] = useState(false);

	const [selectedApi, setSelectedApi] = useState({});
	const [calendarApi, setCalendarApi] = useState({});
	const [title, setTitle] = useState('');

	// Opens the Date Modal, and saves the selected and calendar objects from FullCalendar.
	const handleDateClick = selected => {
		setOpenDateModal(true);
		setSelectedApi(selected);
		setCalendarApi(selected.view.calendar);
	};

	// Creates a new event on the calendar.
	const handleDateSubmit = () => {
		if (title) {
			calendarApi.addEvent({
				id: `${selectedApi.dateStr}-${title}`,
				title,
				start: selectedApi.startStr,
				end: selectedApi.endStr,
				allDay: selectedApi.allDay
			});
			setOpenDateModal(false);
			setSelectedApi({});
			setCalendarApi({});
			setTitle('');
		}
	};

	// Opens the Event Modal, and saves the selected object from FullCalendar.
	const handleEventClick = selected => {
		setOpenEventModal(true);
		setSelectedApi(selected);
	};

	// Deletes an event on the calendar.
	const handleEventSubmit = () => {
		if (selectedApi) {
			selectedApi.event.remove();
			setOpenEventModal(false);
			setSelectedApi({});
		}
	};

	// Closes the Event Modal without deleting the event.
	const handleEventCancel = () => {
		setOpenEventModal(false);
		setSelectedApi({});
	};

	return (
		<Box sx={{m: '20px'}}>
			<Header title='CALENDAR' subtitle='Edit Your Events' />

			<Box sx={{display: 'flex', justifyContent: 'space-between'}}>
				{/* Calendar Sidebar */}
				<Box
					sx={{
						p: '15px',
						flex: '1 1 20%',
						backgroundColor:
							mode === 'dark' ? colors.primary[500] : colors.secondary[900],
						borderRadius: '4px'
					}}
				>
					<Typography variant='h4'>Events</Typography>
					<List>
						{currentEvents.map(event => (
							<ListItem
								key={event.id}
								sx={{
									m: '10px 0',
									backgroundColor: colors.orangeAccent[500],
									borderRadius: '2px'
								}}
							>
								<ListItemText
									primary={event.title}
									secondary={
										<Typography>
											{formatDate(event.start, {
												year: 'numeric',
												month: 'short',
												day: 'numeric'
											})}
										</Typography>
									}
								/>
							</ListItem>
						))}
					</List>
				</Box>

				{/* Calendar */}
				<Box
					sx={{
						ml: '15px',
						flex: '1 1 100%',
						// All days' background color and hover effect.
						'& .fc .fc-daygrid-day': {
							'&:hover': {
								backgroundColor:
									mode === 'dark' ? colors.primary[400] : colors.secondary[100]
							},
							cursor: 'pointer'
						},
						// Current day background color.
						'& .fc .fc-daygrid-day.fc-day-today': {
							backgroundColor: colors.purpleAccent[600],
							'&:hover': {
								backgroundColor:
									mode === 'dark'
										? colors.purpleAccent[400]
										: colors.purpleAccent[500]
							}
						},
						// Week and Day tab columns' color.
						'& .fc .fc-timegrid-col.fc-day-today': {
							backgroundColor: colors.purpleAccent[600]
						},
						// List event header color.
						'& .fc-theme-standard .fc-list-day-cushion': {
							backgroundColor: colors.purpleAccent[600]
						},
						// List event hover and select text color.
						'& .fc-event:hover, .fc-event-selected': {
							color: 'black'
						}
					}}
				>
					<FullCalendar
						height='75vh'
						plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
						headerToolbar={{
							left: 'prev next today',
							center: 'title',
							right: 'dayGridMonth timeGridWeek timeGridDay listMonth'
						}}
						initialView='dayGridMonth'
						editable
						selectable
						selectMirror
						dayMaxEvents
						select={handleDateClick}
						eventClick={handleEventClick}
						eventsSet={events => setCurrentEvents(events)}
						initialEvents={[
							{id: '1234', title: 'All-day event', date: '2022-12-08'},
							{id: '4321', title: 'Timed event', date: '2022-12-12'}
						]}
						eventColor={colors.orangeAccent[600]}
						eventTextColor={colors.greyAccent[100]}
					/>
				</Box>
			</Box>

			{/* Date Modal */}
			<Modal keepMounted open={openDateModal} onClose={() => setOpenDateModal(false)}>
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: 400,
						p: 4,
						display: 'flex',
						gap: '10px',
						bgcolor: 'background.paper',
						border: '2px solid #000',
						boxShadow: 24
					}}
				>
					<TextField
						fullWidth
						variant='outlined'
						color='info'
						type='text'
						label='Event Name'
						onChange={e => setTitle(e.target.value)}
						value={title}
						name='title'
						sx={{flex: 4}}
					/>
					<Button
						variant='contained'
						color='success'
						onClick={handleDateSubmit}
						sx={{flex: 1}}
					>
						Submit
					</Button>
				</Box>
			</Modal>

			{/* Event Modal */}
			<Modal keepMounted open={openEventModal} onClose={() => setOpenEventModal(false)}>
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: 400,
						p: 4,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						bgcolor: 'background.paper',
						border: '2px solid #000',
						boxShadow: 24
					}}
				>
					<Typography sx={{mb: '20px'}}>
						Are you sure you want to delete your event?
					</Typography>
					<ButtonGroup
						variant='contained'
						disableElevation
						sx={{width: '40%', display: 'flex', justifyContent: 'space-between'}}
					>
						<Button color='error' onClick={handleEventSubmit}>
							Yes
						</Button>
						<Button color='info' onClick={handleEventCancel}>
							No
						</Button>
					</ButtonGroup>
				</Box>
			</Modal>
		</Box>
	);
}

export default Calendar;
