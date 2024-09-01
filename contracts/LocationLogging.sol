// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LocationLogging {
    // Struct to hold location data
    struct Location {
        string place;
        uint256 timestamp;
    }

    // Mapping from user addresses to their location data
    mapping(address => Location[]) private userLocations;

    // Log a new location for the caller
    function logLocation(string calldata place) external {
        userLocations[msg.sender].push(Location(place, block.timestamp));
    }

    // Get all locations logged by a specific user
    function getLocationByUser(address user) external view returns (Location[] memory) {
        return userLocations[user];
    }
}
