import { useState } from "react";
import "./App.css";
import { basicInfoExample, EduInfoExample, ExpInfoExample } from "./data/data";
import BasicInfoPanel from "./components/basicInfoPanel";
import InfoInputPanel from "./components/infoInputPanel";

function App() {
  // use example for now
  const [basicInfo, setBasicInfo] = useState(basicInfoExample);
  const [EduInfo, setEduInfo] = useState(EduInfoExample);
  const [ExpInfo, setExpInfo] = useState(ExpInfoExample);

  return (
    <>
      <div className="operatePanel">
        <BasicInfoPanel basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
        <InfoInputPanel
          title="Education"
          info={EduInfo}
          infoSetter={setEduInfo}
          miniDisplayKeys={["School", "Degree"]}
        ></InfoInputPanel>
      </div>
      <div className="previewContainer"></div>
    </>
  );
}

export default App;
