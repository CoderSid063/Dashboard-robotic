import { useState } from "react";

const Dashboard = () => {
  // State for selected PEST categories
  const [selectedPESTCategories, setSelectedPESTCategories] = useState([]);

  // Handler for updating selected PEST categories
  const handlePESTFilterChange = (category) => {
    // Check if the category is already selected
    if (selectedPESTCategories.includes(category)) {
      // Remove the category if it's already selected
      setSelectedPESTCategories(
        selectedPESTCategories.filter((item) => item !== category)
      );
    } else {
      // Add the category if it's not already selected
      setSelectedPESTCategories([...selectedPESTCategories, category]);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      {/* PEST Filter */}
      <div className="pest-filter">
        <h2>PEST Filter</h2>
        <label>
          <input
            type="checkbox"
            checked={selectedPESTCategories.includes("Political")}
            onChange={() => handlePESTFilterChange("Political")}
          />
          Political
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedPESTCategories.includes("Economic")}
            onChange={() => handlePESTFilterChange("Economic")}
          />
          Economic
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedPESTCategories.includes("Social")}
            onChange={() => handlePESTFilterChange("Social")}
          />
          Social
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedPESTCategories.includes("Technological")}
            onChange={() => handlePESTFilterChange("Technological")}
          />
          Technological
        </label>
        {/* Additional PEST Categories */}
        <label>
          <input
            type="checkbox"
            checked={selectedPESTCategories.includes("Industries")}
            onChange={() => handlePESTFilterChange("Industries")}
          />
          Industries
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedPESTCategories.includes("Environmental")}
            onChange={() => handlePESTFilterChange("Environmental")}
          />
          Environmental
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedPESTCategories.includes("Organization")}
            onChange={() => handlePESTFilterChange("Organization")}
          />
          Organization
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedPESTCategories.includes("Lifestyles")}
            onChange={() => handlePESTFilterChange("Lifestyles")}
          />
          Lifestyles
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedPESTCategories.includes("Healthcare")}
            onChange={() => handlePESTFilterChange("Healthcare")}
          />
          Healthcare
        </label>
      </div>

      {/* Display Selected PEST Categories */}
      <div className="selected-pest-categories">
        <h2>Selected PEST Categories</h2>
        <ul>
          {selectedPESTCategories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
