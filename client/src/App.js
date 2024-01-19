import React from "react";
import Provider from "./Provider";
import Routing from "./Routing";
import './App.css'

function App() {

  return (
    <div className="App">
      <Provider>
        <Routing />
      </Provider>
    </div>
  );
};

export default App;
