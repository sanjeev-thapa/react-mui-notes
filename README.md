# React MUI Notes App

Simple and easy to use note saving app that records thoughts, ideas and reminders.


* Frontend - [React](https://reactjs.org/), [MUI](https://mui.com/)
* Backend - [JSON Server](https://github.com/typicode/json-server/)

## 📜 Table of content

- [Setup](#-setup)
- [Available Scripts](#-available-scripts)
- [License](#-license)

## ⚙️ Setup

1. Frontend - React
	* Install dependencies:\
     `npm install`
     
	* Start the development mode:\
   	`npm start`

2. Backend - JSON Server
	* Start the json-server:\
    `npx json-server --watch data/db.json --port 8000`

## 📄 Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## ⚠️ License
This project is free and open-source software licensed under the [MIT licensed](https://github.com/sanjeev-thapa/react-mui-notes/blob/main/LICENSE).