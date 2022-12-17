import {useState, useRef} from 'react';

import {useTheme, Box} from '@mui/material';

import JoditEditor from 'jodit-react';

import Header from '../components/Header';

import {tokens} from '../theme';

const config = {
	buttons: ['bold', 'italic', 'link', 'unlink', 'underline', 'source']
};

function Editor() {
	const theme = useTheme();
	const {mode} = theme.palette;
	const colors = tokens(mode);

	const editor = useRef(null);

	const [content, setContent] = useState('Feel free to edit this text.');

	return (
		<Box sx={{m: '20px', pb: '20px'}}>
			<Header title='EDITOR' subtitle='Write Text Easily' />

			{/* Editor */}
			<Box
				sx={{
					// Editor's border
					'& .jodit-container': {
						border:
							mode === 'dark'
								? `3px solid ${colors.purpleAccent[300]}`
								: `3px solid ${colors.purpleAccent[700]}`
					},
					// Toolboxes background color.
					'& .jodit-toolbar-editor-collection_size_middle.jodit-toolbar-editor-collection_mode_horizontal':
						{
							backgroundColor:
								mode === 'dark'
									? colors.purpleAccent[300]
									: colors.purpleAccent[700]
						},
					// Textarea text color.
					'& .jodit .jodit-workplace, .jodit-container .jodit-workplace': {
						color: colors.primary[500]
					},
					// Footer background color.
					'& .jodit-status-bar': {
						backgroundColor:
							mode === 'dark' ? colors.purpleAccent[300] : colors.purpleAccent[700]
					}
				}}
			>
				{/* bug Cursor jumps to the beginning at random */}
				{/* bug The width of the textarea expands */}
				<JoditEditor
					ref={editor} // Refers to the editor's textara.
					value={content} // Initial text on (re)load.
					config={config} // Toolbar's buttons.
					onBlur={newContent => setContent(newContent)} // Preferred for performance issues.
					onChange={newContent => setContent(newContent)}
				/>
			</Box>
		</Box>
	);
}

export default Editor;
