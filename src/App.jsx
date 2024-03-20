import { useState } from "react";
import "./App.css";
import { basicInfoExample, EduInfoExample, ExpInfoExample } from "./data/data";
import BasicInfoPanel from "./components/basicInfoPanel";
import InfoInputPanel from "./components/infoInputPanel";
import BasicInfoPreview from "./components/basicInfoPreview";
import InfoPreview from "./components/infoPreview";

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
        <InfoInputPanel
          title="Experience"
          info={ExpInfo}
          infoSetter={setExpInfo}
          miniDisplayKeys={["CompanyName", "PositionTitle"]}
        ></InfoInputPanel>
      </div>
      <div className="previewContainer">
        <BasicInfoPreview info={basicInfo}></BasicInfoPreview>
        <InfoPreview
          info={EduInfo}
          title="Education"
          displayKeys={["School", "Degree"]}
        ></InfoPreview>
        <InfoPreview
          info={ExpInfo}
          title="Experience"
          displayKeys={["CompanyName", "PositionTitle", "Description"]}
        ></InfoPreview>
      </div>
    </>
  );
}

export default App;
