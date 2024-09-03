import { ethers } from "ethers";

// Replace these with your contract addresses and ABIs
const identityContractAddress = "YOUR_IDENTITY_CONTRACT_ADDRESS";
const locationContractAddress = "YOUR_LOCATION_CONTRACT_ADDRESS";
const accessControlContractAddress = "YOUR_ACCESS_CONTROL_CONTRACT_ADDRESS";

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

export const connectWallet = async () => {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();
            console.log("Connected");
        } catch (error) {
            console.error("Error connecting to wallet:", error);
        }
    } else {
        console.error("Metamask not detected");
    }
};

export const getIdentityContract = () => {
    return new ethers.Contract(identityContractAddress, identityABI, signer);
};

export const getLocationContract = () => {
    return new ethers.Contract(locationContractAddress, locationABI, signer);
};

export const getAccessControlContract = () => {
    return new ethers.Contract(accessControlContractAddress, accessControlABI, signer);
};
