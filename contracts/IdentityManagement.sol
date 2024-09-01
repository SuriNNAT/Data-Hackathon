// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IdentityManagement {
    // Mapping from user addresses to their public key
    mapping(address => string) private userPublicKeys;

    // Register a new user with their public key
    function registerUser(string calldata publicKey) external {
        userPublicKeys[msg.sender] = publicKey;
    }

    // Verify a user by checking their public key
    function verifyUser(address user) external view returns (string memory) {
        return userPublicKeys[user];
    }

    // Get the public key of the caller
    function getUser() external view returns (string memory) {
        return userPublicKeys[msg.sender];
    }
}
