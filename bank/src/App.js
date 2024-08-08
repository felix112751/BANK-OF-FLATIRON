import React from "react";
import "./App.css"
import AccountContainer from "./components/AccountContainer";
function App() {
    return (
      <div className="App-design">
        <div className=" headerApp">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer/>
      </div>
    );
  }

  export default App;