import "./App.css";
import React, { useState } from "react";
import CreateNewContact from "./components/CreateNewContact";
import Homepage from "./pages/Homepage";

function App() {
  const [isHome, setIsHome] = useState(true);

  const pageChange=()=>{
    setIsHome(!isHome)
  }
  return (
    <>
    {isHome ? <Homepage focus={isHome} pageChange={pageChange} /> : <CreateNewContact pageChange={pageChange} />}
      
    </>
    
  );
}

export default App;
