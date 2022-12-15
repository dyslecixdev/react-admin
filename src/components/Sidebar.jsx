import {useState} from 'react';
import {Link} from 'react-router-dom';

import {Sidebar as ProSidebar, Menu, MenuItem, SubMenu, useProSidebar} from 'react-pro-sidebar';

import {useTheme, Box, Typography} from '@mui/material';
import {
	Home,
	Folder,
	PeopleOutlined,
	ShoppingCartOutlined,
	ReceiptOutlined,
	Apps,
	CalendarTodayOutlined,
	ViewKanbanOutlined,
	EditOutlined,
	HelpOutlineOutlined,
	BubbleChart,
	BarChartOutlined,
	PieChartOutlineOutlined,
	TimelineOutlined,
	MenuOutlined,
	MapOutlined
} from '@mui/icons-material';

import {tokens} from '../theme';

function Sidebar() {
	const theme = useTheme(); // MUI theme object.
	const colors = tokens(theme.palette.mode); // colors is the color object created depending on if the mode is dark or light.

	const [selected, setSelected] = useState('Dashboard');

	const {collapseSidebar} = useProSidebar();

	return (
		<ProSidebar
			defaultCollapsed
			backgroundColor={colors.primary[600]}
			rootStyles={{
				margin: '15px 0 15px 15px',
				border: `1px solid ${colors.primary[600]}`,
				borderRadius: '5px'
			}}
		>
			<Menu
				menuItemStyles={{
					// eslint-disable-next-line consistent-return
					button: ({level, active}) => {
						if (level === 0)
							return {
								color: active ? colors.blueAccent[600] : colors.greyAccent[100],
								backgroundColor: colors.primary[600],
								'&:hover': {
									color: active ? colors.blueAccent[500] : colors.greyAccent[100],
									backgroundColor: colors.primary[600]
								}
							};
						if (level === 1)
							return {
								color: active ? colors.blueAccent[600] : colors.greyAccent[100],
								backgroundColor: colors.primary[600],
								'&:hover': {
									color: active ? colors.blueAccent[500] : colors.blueAccent[300],
									backgroundColor: colors.primary[600]
								}
							};
					}
				}}
			>
				{/* Admin */}
				<MenuItem onClick={() => collapseSidebar()} icon={<MenuOutlined />}>
					<Box
						sx={{
							ml: '15px',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center'
						}}
					>
						<Typography variant='h3'>ADMIN</Typography>
					</Box>
				</MenuItem>

				{/* Dashboard */}
				{selected === 'Dashboard' ? (
					<MenuItem
						active
						onClick={() => setSelected('Dashboard')}
						routerLink={<Link to='/' />}
						icon={<Home />}
					>
						{' '}
						Dashboard{' '}
					</MenuItem>
				) : (
					<MenuItem
						onClick={() => setSelected('Dashboard')}
						routerLink={<Link to='/' />}
						icon={<Home />}
					>
						{' '}
						Dashboard{' '}
					</MenuItem>
				)}

				{/* Data */}
				<SubMenu icon={<Folder />} label='Data'>
					{selected === 'Users' ? (
						<MenuItem
							active
							onClick={() => setSelected('Users')}
							routerLink={<Link to='/users' />}
							icon={<PeopleOutlined />}
						>
							{' '}
							Users{' '}
						</MenuItem>
					) : (
						<MenuItem
							onClick={() => setSelected('Users')}
							routerLink={<Link to='/users' />}
							icon={<PeopleOutlined />}
						>
							{' '}
							Users{' '}
						</MenuItem>
					)}

					{selected === 'Products' ? (
						<MenuItem
							active
							onClick={() => setSelected('Products')}
							routerLink={<Link to='/products' />}
							icon={<ShoppingCartOutlined />}
						>
							{' '}
							Products{' '}
						</MenuItem>
					) : (
						<MenuItem
							onClick={() => setSelected('Products')}
							routerLink={<Link to='/products' />}
							icon={<ShoppingCartOutlined />}
						>
							{' '}
							Products{' '}
						</MenuItem>
					)}

					{selected === 'Orders' ? (
						<MenuItem
							active
							onClick={() => setSelected('Orders')}
							routerLink={<Link to='/orders' />}
							icon={<ReceiptOutlined />}
						>
							{' '}
							Orders{' '}
						</MenuItem>
					) : (
						<MenuItem
							onClick={() => setSelected('Orders')}
							routerLink={<Link to='/orders' />}
							icon={<ReceiptOutlined />}
						>
							{' '}
							Orders{' '}
						</MenuItem>
					)}
				</SubMenu>

				{/* Apps */}
				<SubMenu icon={<Apps />} label='Apps'>
					{selected === 'Calendar' ? (
						<MenuItem
							active
							onClick={() => setSelected('Calendar')}
							routerLink={<Link to='/calendar' />}
							icon={<CalendarTodayOutlined />}
						>
							{' '}
							Calendar{' '}
						</MenuItem>
					) : (
						<MenuItem
							onClick={() => setSelected('Calendar')}
							routerLink={<Link to='/calendar' />}
							icon={<CalendarTodayOutlined />}
						>
							{' '}
							Calendar{' '}
						</MenuItem>
					)}

					{selected === 'Kanban' ? (
						<MenuItem
							active
							onClick={() => setSelected('Kanban')}
							routerLink={<Link to='/kanban' />}
							icon={<ViewKanbanOutlined />}
						>
							{' '}
							Kanban{' '}
						</MenuItem>
					) : (
						<MenuItem
							onClick={() => setSelected('Kanban')}
							routerLink={<Link to='/kanban' />}
							icon={<ViewKanbanOutlined />}
						>
							{' '}
							Kanban{' '}
						</MenuItem>
					)}

					{selected === 'Editor' ? (
						<MenuItem
							active
							onClick={() => setSelected('Editor')}
							routerLink={<Link to='/editor' />}
							icon={<EditOutlined />}
						>
							{' '}
							Editor{' '}
						</MenuItem>
					) : (
						<MenuItem
							onClick={() => setSelected('Editor')}
							routerLink={<Link to='/editor' />}
							icon={<EditOutlined />}
						>
							{' '}
							Editor{' '}
						</MenuItem>
					)}

					{selected === 'FAQ' ? (
						<MenuItem
							active
							onClick={() => setSelected('FAQ')}
							routerLink={<Link to='/faq' />}
							icon={<HelpOutlineOutlined />}
						>
							FAQ
						</MenuItem>
					) : (
						<MenuItem
							onClick={() => setSelected('FAQ')}
							routerLink={<Link to='/faq' />}
							icon={<HelpOutlineOutlined />}
						>
							FAQ
						</MenuItem>
					)}
				</SubMenu>

				{/* Charts */}
				<SubMenu icon={<BubbleChart />} label='Charts'>
					{selected === 'Bar' ? (
						<MenuItem
							active
							onClick={() => setSelected('Bar')}
							routerLink={<Link to='/bar' />}
							icon={<BarChartOutlined />}
						>
							{' '}
							Bar Chart{' '}
						</MenuItem>
					) : (
						<MenuItem
							onClick={() => setSelected('Bar')}
							routerLink={<Link to='/bar' />}
							icon={<BarChartOutlined />}
						>
							{' '}
							Bar Chart{' '}
						</MenuItem>
					)}

					{selected === 'Pie' ? (
						<MenuItem
							active
							onClick={() => setSelected('Pie')}
							routerLink={<Link to='/pie' />}
							icon={<PieChartOutlineOutlined />}
						>
							{' '}
							Pie Chart{' '}
						</MenuItem>
					) : (
						<MenuItem
							onClick={() => setSelected('Pie')}
							routerLink={<Link to='/pie' />}
							icon={<PieChartOutlineOutlined />}
						>
							{' '}
							Pie Chart{' '}
						</MenuItem>
					)}

					{selected === 'Line' ? (
						<MenuItem
							active
							onClick={() => setSelected('Line')}
							routerLink={<Link to='/line' />}
							icon={<TimelineOutlined />}
						>
							{' '}
							Line Chart{' '}
						</MenuItem>
					) : (
						<MenuItem
							onClick={() => setSelected('Line')}
							routerLink={<Link to='/line' />}
							icon={<TimelineOutlined />}
						>
							{' '}
							Line Chart{' '}
						</MenuItem>
					)}

					{selected === 'Geo' ? (
						<MenuItem
							active
							onClick={() => setSelected('Geo')}
							routerLink={<Link to='/geo' />}
							icon={<MapOutlined />}
						>
							{' '}
							Map Chart{' '}
						</MenuItem>
					) : (
						<MenuItem
							onClick={() => setSelected('Geo')}
							routerLink={<Link to='/geo' />}
							icon={<MapOutlined />}
						>
							{' '}
							Map Chart{' '}
						</MenuItem>
					)}
				</SubMenu>
			</Menu>
		</ProSidebar>
	);
}

export default Sidebar;
