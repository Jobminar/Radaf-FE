import React from "react";
import Provider from "./Provider";
import Routing from "./Routing";

function App() {

  return (
    <div>
      <Provider>
        <Routing />
      </Provider>
    </div>
  );
};

export default App;
