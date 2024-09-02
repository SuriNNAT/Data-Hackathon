import React, { useState } from "react";
import { connectWallet, getIdentityContract, getLocationContract } from "./smartContractsHandler";

function App() {
    const [userId, setUserId] = useState("");
    const [location, setLocation] = useState("");
    const [locations, setLocations] = useState([]);

    const handleRegisterUser = async () => {
        const contract = getIdentityContract();
        try {
            const tx = await contract.registerUser(userId);
            await tx.wait();
            console.log("User registered:", userId);
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    const handleLogLocation = async () => {
        const contract = getLocationContract();
        try {
            const tx = await contract.logLocation(userId, location);
            await tx.wait();
            console.log("Location logged:", location);
        } catch (error) {
            console.error("Logging location failed:", error);
        }
    };

    const handleViewLocations = async () => {
        const contract = getLocationContract();
        try {
            const logs = await contract.getLocationByUser(userId);
            setLocations(logs);
        } catch (error) {
            console.error("Failed to fetch locations:", error);
        }
    };

    return (
        <div className="App">
            <h1>Blockchain Location Logger</h1>
            <button onClick={connectWallet}>Connect Wallet</button>
            <div>
                <h2>Register User</h2>
                <input 
                    type="text" 
                    placeholder="User ID" 
                    value={userId} 
                    onChange={(e) => setUserId(e.target.value)} 
                />
                <button onClick={handleRegisterUser}>Register</button>
            </div>
            <div>
                <h2>Log Location</h2>
                <input 
                    type="text" 
                    placeholder="Location" 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)} 
                />
                <button onClick={handleLogLocation}>Log</button>
            </div>
            <div>
                <h2>View Locations</h2>
                <button onClick={handleViewLocations}>View Locations</button>
                <ul>
                    {locations.map((loc, index) => (
                        <li key={index}>{loc}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
