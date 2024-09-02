import { ethers } from "ethers";

// Replace these with your contract addresses and ABIs
const identityContractAddress = "YOUR_IDENTITY_CONTRACT_ADDRESS";
const locationContractAddress = "YOUR_LOCATION_CONTRACT_ADDRESS";
const accessControlContractAddress = "YOUR_ACCESS_CONTROL_CONTRACT_ADDRESS";

const identityABI = [ /* ABI for IdentityManagement contract */ ];
const locationABI = [ /* ABI for LocationLogging contract */ ];
const accessControlABI = [ /* ABI for AccessControl contract */ ];

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
