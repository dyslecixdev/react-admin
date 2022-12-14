import {ThemeProvider, CssBaseline, Box} from '@mui/material';

import {ColorModeContext, useMode} from './theme';

function App() {
	const [theme, colorMode] = useMode();

	return (
		// Our created context with the mode, and both memoized functions.
		<ColorModeContext.Provider value={colorMode}>
			{/* MUI's context for its theme */}
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Box className='app'>App</Box>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
