import { useState } from "react";
import "./App.css";
import { basicInfoExample } from "./data";

function App() {
  // use example for now
  // const [basicInfo, setBasicInfo] = useState(basicInfoExample);

  return (
    <>
      <div className="operatePanel"></div>
      <div className="previewContainer"></div>
    </>
  );
}

export default App;
