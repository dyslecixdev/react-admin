import {
	useTheme,
	useMediaQuery,
	Box,
	Button,
	TextField,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio
} from '@mui/material';

import {Formik} from 'formik';
import * as yup from 'yup';

import Header from '../components/Header';

import {tokens} from '../theme';

// Initial values for formik fields.
const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
	isAdmin: true
};

// Yup validations for formik fields.
const userSchema = yup.object().shape({
	firstName: yup.string().required('First name required'),
	lastName: yup.string().required('Last name required'),
	email: yup.string().email('Invalid email').required('Email required'),
	password: yup
		.string()
		.min(8, 'Password must be at least 8 characters')
		.max(20, 'Password must be no more than 20 characters')
		.required('Password required'),
	confirmPassword: yup
		.string()
		.min(8, 'Confirm password must be at least 8 characters')
		.max(20, 'Confirm password must be no more than 20 characters')
		.oneOf([yup.ref('password'), null], 'Password and confirm password must match')
		.required('Confirm password required'),
	isAdmin: yup.boolean().required('Access required')
});

function UserForm() {
	const theme = useTheme();
	const {mode} = theme.palette;
	const colors = tokens(mode);

	const isNonMobile = useMediaQuery('(min-width:600px)');

	// todo Form submission function.
	const handleFormSubmit = values => {
		const isAdminBoolean = values.isAdmin === 'true'; // bug When form is submitted, the boolean becomes a string.
		console.log(values, isAdminBoolean);
	};

	return (
		<Box sx={{m: '20px', pb: '20px'}}>
			<Header title='USER FORM' subtitle='Create a New User' />

			{/* Profile Form */}
			<Formik
				onSubmit={handleFormSubmit}
				initialValues={initialValues}
				validationSchema={userSchema}
			>
				{({values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
					<form onSubmit={handleSubmit}>
						<Box
							sx={{
								display: 'grid',
								gap: '30px',
								gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
								'& > div': {gridColumn: isNonMobile ? undefined : 'span 4'}
							}}
						>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='First Name'
								onBlur={handleBlur} // Function that executes when this text field does or does not have focus.
								onChange={handleChange}
								value={values.firstName}
								name='firstName'
								error={!!touched.firstName && !!errors.firstName} // Error is true if this text field had focus at any point, and its validation schema is violated.
								helperText={touched.firstName && errors.firstName} // Error text.
								sx={{gridColumn: 'span 4'}}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='Last Name'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.lastName}
								name='lastName'
								error={!!touched.lastName && !!errors.lastName}
								helperText={touched.lastName && errors.lastName}
								sx={{gridColumn: 'span 4'}}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='email'
								label='Email'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.email}
								name='email'
								error={!!touched.email && !!errors.email}
								helperText={touched.email && errors.email}
								sx={{gridColumn: 'span 4'}}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='password'
								label='Password'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.password}
								name='password'
								error={!!touched.password && !!errors.password}
								helperText={touched.password && errors.password}
								sx={{gridColumn: 'span 4'}}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='confirmPassword'
								label='Confirm Password'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.confirmPassword}
								name='confirmPassword'
								error={!!touched.confirmPassword && !!errors.confirmPassword}
								helperText={touched.confirmPassword && errors.confirmPassword}
								sx={{gridColumn: 'span 4'}}
							/>
							<Box sx={{ml: '20px', gridColumn: isNonMobile ? 'span 3' : 'span 4'}}>
								<FormLabel
									error={!!touched.isAdmin && (values.isAdmin === '').toString()}
								>
									Access
								</FormLabel>
								<RadioGroup row>
									<FormControlLabel
										control={
											<Radio
												sx={{
													color: colors.greyAccent[100],
													'&.Mui-checked': {
														color: colors.blueAccent[700]
													}
												}}
											/>
										}
										label='Administrator'
										onBlur={handleBlur}
										onChange={handleChange}
										value={!!values.isAdmin}
										name='isAdmin'
									/>
									<FormControlLabel
										control={
											<Radio
												sx={{
													color: colors.greyAccent[100],
													'&.Mui-checked': {
														color: colors.blueAccent[700]
													}
												}}
											/>
										}
										label='Customer'
										onBlur={handleBlur}
										onChange={handleChange}
										value={!values.isAdmin}
										name='isAdmin'
									/>
								</RadioGroup>
							</Box>
							<Button
								type='submit'
								color='success'
								variant={mode === 'dark' ? 'outlined' : 'contained'}
								sx={{gridColumn: isNonMobile ? 'span 1' : 'span 1'}}
							>
								Create New User
							</Button>
						</Box>
					</form>
				)}
			</Formik>
		</Box>
	);
}

export default UserForm;
