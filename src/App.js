import React, { useState } from "react";
import { getLocationContract } from "./smartContractsHandler";

function App() {
    const [location, setLocation] = useState("");
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogLocation = async () => {
        const contract = getLocationContract();
        setLoading(true);
        setError(null);
        try {
            const tx = await contract.logLocation(location);
            await tx.wait();
            console.log("Location logged:", location);
            setLocation(""); // Clear input after logging
        } catch (error) {
            console.error("Logging location failed:", error);
            setError("Logging location failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleViewLocations = async () => {
        const contract = getLocationContract();
        setLoading(true);
        setError(null);
        try {
            const logs = await contract.getLocationByUser();
            setLocations(logs);
        } catch (error) {
            console.error("Failed to fetch locations:", error);
            setError("Failed to fetch locations. Please try again.");
        } finally {
            setLoading(false);
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
                <button onClick={handleLogLocation} disabled={loading}>
                    {loading ? "Logging..." : "Log"}
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
            <div>
                <h2>View Locations</h2>
                <button onClick={handleViewLocations} disabled={loading}>
                    {loading ? "Loading..." : "View Locations"}
                </button>
                <ul>
                    {locations.map((loc, index) => (
                        <li key={index}>{loc}</li>
                    ))}
                </ul>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
        </div>
    );
}

export default App;