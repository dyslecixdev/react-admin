# React Admin Dashboard
An administrator dashboard for any MERN full-stack application, but currently set specifically for e-commerce applications.

![react-admin](https://user-images.githubusercontent.com/85912934/208585613-58ee59cb-5cf6-4a9c-b0d2-62a18e0e159d.png)

The project was built with JavaScript, Prettier to make the code easier 
to read, Eslint (Airbnb and Prettier configurations) to find problems in the code, Material-UI with Emotion for styling, Material-UI Data Grid for table UI and functionality, dnd-kit for the Kanban board's dragging and dropping functionality, FullCalendar for the calendar UI and functionality, Nivo and Recharts for respective chart UI and functionality, Formik and Yup for form validations, Jodit for the text editor UI and functionality, react-circular-progressbar for the Dashboard's progress bar, react-pro-sidebar for the sidebar, and Google Fonts.

## How to run this project
1. Open your terminal and type: git clone https://github.com/christiandeandemesa/react-admin.git
2. To download the dependencies, cd into the react-admin folder and type: npm install
3. Run this project by typing: npm run dev

## Features
- User can view dummy data related to a faux e-commerce application in the Dashboard.
- User can navigate the application using the expandable sidebar.
- User can switch between day and night mode.
- User can view dummy data related to current users (viz. administrators and customers), products, and orders.
- User can view a dummy overview for any specific user, product, or order.
- User can view a form for creating new users and products.
- User can create, edit, and delete events on the calendar.
- User can create, move, and delete cards on the Kanban board.
- User can edit text in the text editor.
- User can view a list of dummy FAQs.
- User can view various charts displaying dummy data.


## Upcoming Features
- Responsive web design for smaller viewports.
- Cross browser support for Chrome, Firefox, Opera, and Safari.
- User can reorder the cards in any lane on the Kanban board.

## Bugs
- There is currently an unresolved [issue](https://github.com/jodit/jodit-react/issues/217) on the text editor where the cursor will randomly jump to the beginning of the first line.

## [Admin Dashboard Demo](https://christian-demesa-react-admin.netlify.app/)

## Author
- Christian Demesa: https://github.com/christiandeandemesa
