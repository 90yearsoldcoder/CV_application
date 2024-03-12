import "../styles/basicInfoPanel.css";
import PropTypes from "prop-types";
import { displayName } from "../data/display";

const BasicInfoPanel = ({ basicInfo, setBasicInfo }) => {
  function handleChange(value, key) {
    setBasicInfo({
      ...basicInfo,
      [key]: value,
    });
  }

  return (
    <div className="basicInfo-container">
      <div className="title">Personal Details</div>
      {Object.keys(basicInfo).map((key) => (
        <div key={key} className="inputItem-Container">
          <label htmlFor="">{displayName[key]}</label>
          <input
            type="text"
            value={basicInfo[key]}
            onChange={(e) => handleChange(e.target.value, key)}
          />
        </div>
      ))}
    </div>
  );
};

BasicInfoPanel.propTypes = {
  basicInfo: PropTypes.shape({
    fullName: PropTypes.string,
  }).isRequired,
  setBasicInfo: PropTypes.func.isRequired,
};

export default BasicInfoPanel;
