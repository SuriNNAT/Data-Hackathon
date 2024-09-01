# Future-Of-Data Hackathon - Location Tracking System

This system is designed to track and verify your location through a mobile app, checkpoints, and blockchain technology. It consists of three main components:

Mobile App: Functions as a digital ID or passport, allowing verification at various checkpoints.
Checkpoints: Locations where you scan the app to record your arrival, such as at airports, hotels, restaurants, etc.
Blockchain: Stores location and time data securely.

Workflow Example:
Airport Checkpoint: Scan the app to log arrival time and location. The checkpoint verifies your identity and uploads proof to the airport system while your app logs the data in your personal system.
Uber Ride: Scan the Uber driver’s checkpoint to record the use of the service. This information is added to both the Uber system and your app’s personal system.
Hotel: Scan the driver’s checkpoint upon arrival and departure, and also scan the app at check-in and check-out to log hotel stay details.
This system provides an accurate record of your movements, useful for purposes such as police investigations, health tracking, or verifying your presence at specific locations.

1. Pre Setup:
- Make sure you have Node.js, npm, and Hardhat versions up-to-date
- Install MetaMask extension and set up your wallet

2. Set up Polygon Project directory
   a. Do 'npx hardhat init' in command prompt or terminal
   b. Create folders "contracts", "migrations", and "test" inside the Polygon Project directory
   c. Open "hardhat.config".js or .ts file and add these lines:

require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

const { POLYGON_MAINNET_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.24",
  networks: {
    polygon: {
      url: POLYGON_MAINNET_URL || '',
      accounts: PRIVATE_KEY ? [`0x${PRIVATE_KEY}`] : [],
    },
  },
};

  d. Create a ".env" file inside the Polygon Project Directory and add these 2 lines:

POLYGON_MAINNET_URL=https://polygon-rpc.com
PRIVATE_KEY=your_private_key 

Note: your_private_key is the private key you obtained from your own MetaMask's Polygon's network

--> Try to compile the smart contracts by using "npx hardhat compile". If it's good then move on to Test and Deploy
