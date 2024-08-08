import React from "react"; 
import "./Search.css"; 

function Search({ handleSearch }) {
  // Function to handle changes in the input field
  function handleChange(event) {
    // Call handleSearch with the current value of the input field
    handleSearch(event.target.value);
  }

  // basically shows the search input field
  return (
    <div className="fluid icon input"> 
      <input
        type="text" 
        placeholder="Search your Recent Transactions" 
        onChange={handleChange} // Call handleChange when input value changes
      />
      <i className="circular search link icon"> 
        <i className="fa-brands fa-searchengin"></i> 
      </i>
    </div>
  );
}

export default Search;