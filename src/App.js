import {Routes, Route} from 'react-router-dom';

import {ThemeProvider, CssBaseline, Box} from '@mui/material';

import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import SingleUser from './pages/SingleUser';
import Form from './pages/Form';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Orders from './pages/Orders';
import SingleOrder from './pages/SingleOrder';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import Editor from './pages/Editor';
import FAQ from './pages/FAQ';
import Bar from './pages/Bar';
import Pie from './pages/Pie';
import Line from './pages/Line';
import Geo from './pages/Geo';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

import {ColorModeContext, useMode} from './theme';

function App() {
	const [theme, colorMode] = useMode();

	return (
		// Our created context with the mode, and both memoized functions.
		<ColorModeContext.Provider value={colorMode}>
			{/* MUI's context for its theme */}
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Box className='app'>
					<Sidebar />
					<Box className='content'>
						<Navbar />
						<Routes>
							<Route path='/' element={<Dashboard />} />
							<Route path='/users'>
								<Route index element={<Users />} />
								<Route path=':id' element={<SingleUser />} />
								<Route path='newUser' element={<Form />} />
							</Route>
							<Route path='/products'>
								<Route index element={<Products />} />
								<Route path=':id' element={<SingleProduct />} />
								<Route path='newProduct' element={<Form />} />
							</Route>
							<Route path='/orders'>
								<Route index element={<Orders />} />
								<Route path=':id' element={<SingleOrder />} />
								<Route path='newOrder' element={<Form />} />
							</Route>
							<Route path='/calendar' element={<Calendar />} />
							<Route path='/kanban' element={<Kanban />} />
							<Route path='/editor' element={<Editor />} />
							<Route path='/faq' element={<FAQ />} />
							<Route path='/bar' element={<Bar />} />
							<Route path='/pie' element={<Pie />} />
							<Route path='/line' element={<Line />} />
							<Route path='/geo' element={<Geo />} />
						</Routes>
					</Box>
				</Box>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
