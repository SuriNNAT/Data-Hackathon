import { ethers } from "ethers";

// Replace these with your contract addresses and ABIs
const identityContractAddress = "";
const locationContractAddress = "";
const accessControlContractAddress = "";

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

provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
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
