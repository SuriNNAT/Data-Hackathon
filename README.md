# Future-Of-Data Hackathon - Location Tracking System![image](https://github.com/user-attachments/assets/6cea572b-2bda-4306-ba03-537832725908)
This system is designed to track and verify your location through a mobile app, checkpoints, and blockchain technology. It consists of three main components:
- Mobile App: Functions as a digital ID or passport, allowing verification at various checkpoints. 
- Checkpoints: Locations where you scan the app to record your arrival, such as at airports, hotels, restaurants, etc.
- Blockchain: Stores location and time data securely.
Workflow Example: Airport
- Checkpoint: Scan the app to log arrival time and location. The checkpoint verifies your identity and uploads proof to the airport system while your app logs the data in your personal system.
- Uber Ride: Scan the Uber driver’s checkpoint to record the use of the service. This information is added to both the Uber system and your app’s personal system.
- Hotel: Scan the driver’s checkpoint upon arrival and departure, and also scan the app at check-in and check-out to log hotel stay details. This system provides an accurate record of your movements, useful for purposes such as police investigations, health tracking, or verifying your presence at specific locations.
	1. Pre Setup:
	• Make sure you have Node.js, npm, and Hardhat versions up-to-date
	• Install MetaMask extension and set up your wallet
	2. Set up Polygon Project directory
	• Do 'npx hardhat init' in command prompt or terminal
	• Create folders "contracts", "migrations", and "test" inside the Polygon Project directory
	• Download "hardhat.config.js" in this repo and replace it with the one you have in the Polygon Project directory
	• Download a ".env" file and save it inside the Polygon Project Directory
Note: your_private_key in the ".env" file is the private key you obtained from your own MetaMask's Polygon's network
--> Try to compile the smart contracts by using "npx hardhat compile". If it's good then move on to Test and Deploy
![image](https://github.com/user-attachments/assets/b483ee80-86e0-46d9-bb19-0254e30f370a)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
