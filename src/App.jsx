import { useState } from "react";
import "./App.css";
import { basicInfoExample } from "./data/data";
import BasicInfoPanel from "./components/basicInfoPanel";

function App() {
  // use example for now
  const [basicInfo, setBasicInfo] = useState(basicInfoExample);

  return (
    <>
      <div className="operatePanel">
        <BasicInfoPanel basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
      </div>
      <div className="previewContainer"></div>
    </>
  );
}

export default App;
