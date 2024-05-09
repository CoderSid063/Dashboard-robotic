import "../styles/home.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const Home = () => {
  const data = useSelector((state) => state.data);
  const [selectedRobot, setSelectedRobot] = useState(null);

  const handleRobotChange = (event) => {
    const robotId = event.target.value;
    const selectedRobotData = data.find((robot) => robot.robot_id === robotId);
    setSelectedRobot(selectedRobotData);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <label htmlFor="robotDropdown">Select a Robot:</label>
        <select id="robotDropdown" onChange={handleRobotChange}>
          <option value="">Select Robot</option>
          {/* Map over data array to populate dropdown options */}
          {data.map((robot, index) => (
            <option key={index} value={robot.robot_id}>
              {robot.robot_id}
            </option>
          ))}
        </select>
      </div>
      <div className="main">
        {selectedRobot && (
          <div>
            <h2>{selectedRobot.robot_id}</h2>
            <p>Battery Level: {selectedRobot.battery_level}</p>
            <p>Operational Status: {selectedRobot.operational_status}</p>
            <p>Timestamp: {selectedRobot.timestamp}</p>
            <ul>
              {selectedRobot.activity_log.map((activity, index) => (
                <li key={index}>
                  {activity.timestamp}: {activity.activity}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
