// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AccessControl {
    // Mapping from user addresses to lists of addresses who can access their data
    mapping(address => mapping(address => bool)) private accessControlList;

    // Grant access to a user
    function grantAccess(address user) external {
        accessControlList[msg.sender][user] = true;
    }

    // Revoke access from a user
    function revokeAccess(address user) external {
        accessControlList[msg.sender][user] = false;
    }

    // Check if a user has access to another user's data
    function checkAccess(address owner, address user) external view returns (bool) {
        return accessControlList[owner][user];
    }
}
