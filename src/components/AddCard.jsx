import {useState} from 'react';

import {Box, TextField, Button} from '@mui/material';

import PropTypes from 'prop-types';

function AddCard({addCard, mode}) {
	const [title, setTitle] = useState('');

	// Resets the input, and creates a card with the title.
	const handleClick = () => {
		setTitle('');
		addCard(title);
	};

	return (
		<Box sx={{width: '40%', mb: '30px', display: 'flex', gap: '20px'}}>
			<TextField
				label='New Card Title'
				type='text'
				color='success'
				value={title}
				onChange={e => setTitle(e.target.value)}
				sx={{flex: 7}}
			/>
			<Button
				color='success'
				variant={mode === 'dark' ? 'outlined' : 'contained'}
				onClick={handleClick}
				sx={{flex: 1}}
			>
				Create
			</Button>
		</Box>
	);
}

AddCard.propTypes = {
	addCard: PropTypes.func.isRequired,
	mode: PropTypes.string.isRequired
};

export default AddCard;
