const Navbar = () => {
  return (
    <div id="dropdowns-container">
      <div class="dropdown">
        <label for="end-year-dropdown">Add end year:</label>
        <select id="end-year-dropdown">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div class="dropdown">
        <label for="topics-dropdown">Add topics:</label>
        <select id="topics-dropdown">
        
        </select>
      </div>
      <div class="dropdown">
        <label for="sector-dropdown">Add sector:</label>
        <select id="sector-dropdown"></select>
      </div>
      <div class="dropdown">
        <label for="region-dropdown">Add region:</label>
        <select id="region-dropdown"></select>
      </div>
      <div class="dropdown">
        <label for="source-dropdown">Add Source:</label>
        <select id="source-dropdown"></select>
      </div>
      <div class="dropdown">
        <label for="country-dropdown">Country:</label>
        <select id="country-dropdown"></select>
      </div>
    </div>
  );
};

export default Navbar;
