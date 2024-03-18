import { useState } from "react";
import "../styles/formInputPanel.css";
import { displayName } from "../data/display";
import PropTypes from "prop-types";

const FormInputPanel = ({ info, infoSetter, ind }) => {
  const { showForm, showFormSetter } = useState(true);
  const { localInfo, setLocalInfo } = useState(info[ind]);

  function handleChange(value, key) {
    setLocalInfo({ ...localInfo, [key]: value });
  }

  function handleSave() {
    const newInfo = [...info];
    newInfo[ind] = localInfo;
    infoSetter(newInfo);
  }

  function unShow() {
    showFormSetter(false);
  }

  if (showForm == false) {
    return <></>;
  } else
    return (
      <div className="formInput-container">
        {Object.keys(localInfo)
          .filter((key) => key != "id")
          .map((key) => (
            <div key={key} className="formInputItem-Container">
              <label htmlFor="">{displayName[key]}</label>
              <input
                type="text"
                value={localInfo[key]}
                onChange={(e) => handleChange(e.target.value, key)}
              />
            </div>
          ))}
        <button
          onClick={() => {
            handleSave();
            unShow();
          }}
        >
          Save
        </button>
      </div>
    );
};

FormInputPanel.propTypes = {
  info: PropTypes.array.isRequired,
  infoSetter: PropTypes.func.isRequired,
  ind: PropTypes.number.isRequired,
};

export default FormInputPanel;
