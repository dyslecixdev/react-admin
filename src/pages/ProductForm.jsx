import {
	useTheme,
	Box,
	Button,
	TextField,
	FormLabel,
	FormControlLabel,
	FormControl,
	FormGroup,
	Checkbox,
	FormHelperText
} from '@mui/material';

import {Formik} from 'formik';
import * as yup from 'yup';

import Header from '../components/Header';

import {tokens} from '../theme';

const initialValues = {
	name: '',
	price: 0,
	category: [],
	size: [],
	color: [],
	countInStock: 0
};

const userSchema = yup.object().shape({
	name: yup.string().required('Name required'),
	price: yup.number().min(0.01, 'The minium price is $0.01').required('Price required'),
	category: yup.array().min(1, 'At least one category is required'),
	size: yup.array().min(1, 'At least one size is required'),
	color: yup.array().min(1, 'At least one color is required'),
	countInStock: yup
		.number()
		.min(1, 'The minimum stock number is 1')
		.required('Stock number required')
});

function UserForm() {
	const theme = useTheme();
	const {mode} = theme.palette;
	const colors = tokens(mode);

	// todo Form submission function.
	const handleFormSubmit = values => {
		console.log(values);
	};

	return (
		<Box sx={{m: '20px', pb: '20px'}}>
			<Header title='PRODUCT FORM' subtitle='Create a New Product' />

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
								display: 'flex',
								flexDirection: 'column',
								gap: '30px'
							}}
						>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='Name'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.name}
								name='name'
								error={!!touched.name && !!errors.name}
								helperText={touched.name && errors.name}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='number'
								label='Price'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.price}
								name='price'
								error={!!touched.price && !!errors.price}
								helperText={touched.price && errors.price}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='number'
								label='Stock Number'
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.countInStock}
								name='countInStock'
								error={!!touched.countInStock && !!errors.countInStock}
								helperText={touched.countInStock && errors.countInStock}
							/>

							<Box sx={{display: 'flex', justifyContent: 'space-between'}}>
								{/* Categories */}
								<FormControl component='fieldset' variant='standard'>
									<FormHelperText
										error={
											!!touched.category &&
											values.category.length < 0 &&
											!!errors.category
										}
										sx={{color: colors.redAccent[500]}}
									>
										{errors.category}
									</FormHelperText>
									<FormLabel
										component='legend'
										sx={{
											color: colors.greyAccent[400],
											'&.Mui-focused': {
												color: colors.greyAccent[100]
											}
										}}
									>
										Categories
									</FormLabel>
									<FormGroup>
										<Box sx={{display: 'flex'}}>
											<FormControlLabel
												control={
													<Checkbox
														sx={{
															color: colors.greyAccent[100],
															'&.Mui-checked': {
																color: colors.greyAccent[100]
															}
														}}
													/>
												}
												type='checkbox'
												onBlur={handleBlur}
												onChange={handleChange}
												name='category'
												value='men'
												label='Men'
											/>
											<FormControlLabel
												control={
													<Checkbox
														sx={{
															color: colors.greyAccent[100],
															'&.Mui-checked': {
																color: colors.greyAccent[100]
															}
														}}
													/>
												}
												type='checkbox'
												onBlur={handleBlur}
												onChange={handleChange}
												name='category'
												value='women'
												label='Women'
											/>
											<FormControlLabel
												control={
													<Checkbox
														sx={{
															color: colors.greyAccent[100],
															'&.Mui-checked': {
																color: colors.greyAccent[100]
															}
														}}
													/>
												}
												type='checkbox'
												onBlur={handleBlur}
												onChange={handleChange}
												name='category'
												value='children'
												label='Children'
											/>
											<FormControlLabel
												control={
													<Checkbox
														sx={{
															color: colors.greyAccent[100],
															'&.Mui-checked': {
																color: colors.greyAccent[100]
															}
														}}
													/>
												}
												type='checkbox'
												onBlur={handleBlur}
												onChange={handleChange}
												name='category'
												value='clothing'
												label='Clothing'
											/>
											<FormControlLabel
												control={
													<Checkbox
														sx={{
															color: colors.greyAccent[100],
															'&.Mui-checked': {
																color: colors.greyAccent[100]
															}
														}}
													/>
												}
												type='checkbox'
												onBlur={handleBlur}
												onChange={handleChange}
												name='category'
												value='accesories'
												label='Accesories'
											/>
										</Box>
									</FormGroup>
								</FormControl>

								{/* Sizes */}
								<FormControl component='fieldset' variant='standard'>
									<FormHelperText
										error={
											!!touched.size &&
											values.size.length < 0 &&
											!!errors.size
										}
										sx={{color: colors.redAccent[500]}}
									>
										{errors.size}
									</FormHelperText>
									<FormLabel
										component='legend'
										sx={{
											color: colors.greyAccent[400],
											'&.Mui-focused': {
												color: colors.greyAccent[100]
											}
										}}
									>
										Sizes
									</FormLabel>
									<FormGroup>
										<Box sx={{display: 'flex'}}>
											<FormControlLabel
												control={
													<Checkbox
														sx={{
															color: colors.greyAccent[100],
															'&.Mui-checked': {
																color: colors.greyAccent[100]
															}
														}}
													/>
												}
												type='checkbox'
												onBlur={handleBlur}
												onChange={handleChange}
												name='size'
												value='XS'
												label='XS'
											/>
											<FormControlLabel
												control={
													<Checkbox
														sx={{
															color: colors.greyAccent[100],
															'&.Mui-checked': {
																color: colors.greyAccent[100]
															}
														}}
													/>
												}
												type='checkbox'
												onBlur={handleBlur}
												onChange={handleChange}
												name='size'
												value='S'
												label='S'
											/>
											<FormControlLabel
												control={
													<Checkbox
														sx={{
															color: colors.greyAccent[100],
															'&.Mui-checked': {
																color: colors.greyAccent[100]
															}
														}}
													/>
												}
												type='checkbox'
												onBlur={handleBlur}
												onChange={handleChange}
												name='size'
												value='M'
												label='M'
											/>
											<FormControlLabel
												control={
													<Checkbox
														sx={{
															color: colors.greyAccent[100],
															'&.Mui-checked': {
																color: colors.greyAccent[100]
															}
														}}
													/>
												}
												type='checkbox'
												onBlur={handleBlur}
												onChange={handleChange}
												name='size'
												value='L'
												label='L'
											/>
											<FormControlLabel
												control={
													<Checkbox
														sx={{
															color: colors.greyAccent[100],
															'&.Mui-checked': {
																color: colors.greyAccent[100]
															}
														}}
													/>
												}
												type='checkbox'
												onBlur={handleBlur}
												onChange={handleChange}
												name='size'
												value='XL'
												label='XL'
											/>
										</Box>
									</FormGroup>
								</FormControl>

								{/* Colors */}
								<FormControl component='fieldset' variant='standard'>
									<FormHelperText
										error={
											!!touched.color &&
											values.color.length < 0 &&
											!!errors.color
										}
										sx={{color: colors.redAccent[500]}}
									>
										{errors.color}
									</FormHelperText>
									<FormLabel
										component='legend'
										sx={{
											color: colors.greyAccent[400],
											'&.Mui-focused': {
												color: colors.greyAccent[100]
											}
										}}
									>
										Colors
									</FormLabel>
									<FormGroup>
										<Box
											sx={{
												display: 'grid',
												gridTemplateColumns: 'repeat(4, 1fr)',
												gridTemplateRows: 'repeat(3, 1fr)'
											}}
										>
											<FormControlLabel
												control={
													<Checkbox
														sx={{
															color: colors.greyAccent[100],
															'&.Mui-checked': {
																color:
																	mode === 'dark'
																		? colors.redAccent[200]
																		: colors.redAccent[800]
															}
														}}
													/>
												}
												type='checkbox'
												onBlur={handleBlur}
												onChange={handleChange}
												name='color'
												value='pink'
												label='Pink'
												sx={{gridArea: 'span 1'}}
											/>
											<FormControlLabel
												control={
													<Checkbox
														sx={{
															color: colors.greyAccent[100],
															'&.Mui-checked': {
																color: colors.redAccent[500]
															}
														}}
													/>
												}
												type='checkbox'
												onBlur={handleBlur}
												onChange={handleChange}
												name='color'
												value='red'
												label='Red'
												sx={{gridArea: 'span 1'}}
											/>
											<FormControlLabel
												control={
													<Checkbox
														sx={{
															color: colors.greyAccent[100],
															'&.Mui-checked': {
																color: colors.orangeAccent[500]
															}
														}}
													/>
												}
												type='checkbox'
												onBlur={handleBlur}
												onChange={handleChange}
												name='color'
												value='orange'
												label='Orange'
												sx={{gridArea: 'span 1'}}
											/>
											<FormControlLabel
												control={
													<Checkbox
														sx={{
															color: colors.greyAccent[100],
															'&.Mui-checked': {
																color: colors.yellowAccent[500]
															}
														}}
													/>
												}
												type='checkbox'
												onBlur={handleBlur}
												onChange={handleChange}
												name='color'
												value='yellow'
												label='Yellow'
												sx={{gridArea: 'span 1'}}
											/>
											<FormControlLabel
												control={
													<Checkbox
														sx={{
															color: colors.greyAccent[100],
															'&.Mui-checked': {
																color: colors.greenAccent[500]
															}
														}}
													/>
												}
												type='checkbox'
												onBlur={handleBlur}
												onChange={handleChange}
												name='color'
												value='green'
												label='Green'
												sx={{gridArea: 'span 1'}}
											/>
											<FormControlLabel
												control={
													<Checkbox
														sx={{
															color: colors.greyAccent[100],
															'&.Mui-checked': {
																color: colors.blueAccent[500]
															}
														}}
													/>
												}
												type='checkbox'
												onBlur={handleBlur}
												onChange={handleChange}
												name='color'
												value='blue'
												label='Blue'
												sx={{gridArea: 'span 1'}}
											/>
											<FormControlLabel
												control={
													<Checkbox
														sx={{
															color: colors.greyAccent[100],
															'&.Mui-checked': {
																color: colors.purpleAccent[500]
															}
														}}
													/>
												}
												type='checkbox'
												onBlur={handleBlur}
												onChange={handleChange}
												name='color'
												value='purple'
												label='Purple'
												sx={{gridArea: 'span 1'}}
											/>
											<FormControlLabel
												control={
													<Checkbox
														sx={{
															color: colors.greyAccent[100],
															'&.Mui-checked': {
																color:
																	mode === 'dark'
																		? colors.greyAccent[900]
																		: colors.greyAccent[100]
															}
														}}
													/>
												}
												type='checkbox'
												onBlur={handleBlur}
												onChange={handleChange}
												name='color'
												value='black'
												label='Black'
												sx={{gridArea: 'span 1'}}
											/>
											<FormControlLabel
												control={
													<Checkbox
														sx={{
															color: colors.greyAccent[100],
															'&.Mui-checked': {
																color: colors.greyAccent[500]
															}
														}}
													/>
												}
												type='checkbox'
												onBlur={handleBlur}
												onChange={handleChange}
												name='color'
												value='grey'
												label='Grey'
												sx={{gridArea: 'span 1'}}
											/>
											<FormControlLabel
												control={
													<Checkbox
														sx={{
															color: colors.greyAccent[100],
															'&.Mui-checked': {
																color:
																	mode === 'dark'
																		? colors.greyAccent[100]
																		: colors.greyAccent[900]
															}
														}}
													/>
												}
												type='checkbox'
												onBlur={handleBlur}
												onChange={handleChange}
												name='color'
												value='white'
												label='White'
												sx={{gridArea: 'span 1'}}
											/>
											<FormControlLabel
												control={
													<Checkbox
														sx={{
															color: colors.greyAccent[100],
															'&.Mui-checked': {
																color: '#88540B'
															}
														}}
													/>
												}
												type='checkbox'
												onBlur={handleBlur}
												onChange={handleChange}
												name='color'
												value='brown'
												label='Brown'
												sx={{gridArea: 'span 1'}}
											/>
										</Box>
									</FormGroup>
								</FormControl>

								{/* Submit Button */}
								<Button
									type='submit'
									color='success'
									variant={mode === 'dark' ? 'outlined' : 'contained'}
									sx={{height: '10%', p: '10px'}}
								>
									Create New Product
								</Button>
							</Box>
						</Box>
					</form>
				)}
			</Formik>
		</Box>
	);
}

export default UserForm;
