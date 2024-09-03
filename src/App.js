import React, { useState } from "react";
import { connectWallet, getIdentityContract, getLocationContract } from "./smartContractsHandler";

function App() {
    const [location, setLocation] = useState("");
    const [locations, setLocations] = useState([]);

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
