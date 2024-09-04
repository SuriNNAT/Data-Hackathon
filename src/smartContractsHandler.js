import { ethers } from "ethers";

// Replace these with your contract addresses and ABIs
const identityContractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
const locationContractAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";
const accessControlContractAddress = "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0";

const identityABI = [ {
    "inputs": [],
    "name": "getUser",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "publicKey",
        "type": "string"
      }
    ],
    "name": "registerUser",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "verifyUser",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  } ];
const locationABI = [ {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getLocationByUser",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "place",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          }
        ],
        "internalType": "struct LocationLogging.Location[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "place",
        "type": "string"
      }
    ],
    "name": "logLocation",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  } ];
const accessControlABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "checkAccess",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "grantAccess",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "revokeAccess",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ] ;

let provider;
let signer;

provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
signer = provider.getSigner();
export const getIdentityContract = () => {
  return new ethers.Contract(identityContractAddress, identityABI, signer);
};

export const getLocationContract = () => {
  return new ethers.Contract(locationContractAddress, locationABI, signer);
};

export const getAccessControlContract = () => {
  return new ethers.Contract(accessControlContractAddress, accessControlABI, signer);
};

// Example function to interact with the Identity contract
async function interactWithIdentityContract() {
  const identityContract = getIdentityContract();
  if (identityContract) {
    // Call a function from the Identity contract
    const result = await identityContract.someFunction();
    console.log(result);
  } else {
    console.error("Failed to get Identity contract instance");
  }
}

// Example function to interact with the Location contract
async function interactWithLocationContract() {
  const locationContract = getLocationContract();
  if (locationContract) {
    // Call a function from the Location contract
    const result = await locationContract.someFunction();
    console.log(result);
  } else {
    console.error("Failed to get Location contract instance");
  }
}

// Example function to interact with the AccessControl contract
async function interactWithAccessControlContract() {
  const accessControlContract = getAccessControlContract();
  if (accessControlContract) {
    // Call a function from the AccessControl contract
    const result = await accessControlContract.someFunction();
    console.log(result);
  } else {
    console.error("Failed to get AccessControl contract instance");
  }
}

// Call the example functions
// interactWithIdentityContract();
interactWithLocationContract();
interactWithAccessControlContract();
