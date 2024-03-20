import { useState } from "react";
import "../styles/formInputPanel.css";
import { displayName } from "../data/display";
import PropTypes from "prop-types";

const FormInputPanel = ({
  info,
  infoSetter,
  ind,
  miniDisplayKeys,
  showInd,
  showIndSetter,
}) => {
  const [localInfo, setLocalInfo] = useState(info[ind]);

  function handleChange(value, key) {
    setLocalInfo({ ...localInfo, [key]: value });
  }

  function handleSave() {
    const newInfo = [...info];
    newInfo[ind] = localInfo;
    infoSetter(newInfo);
  }

  function unShow() {
    showIndSetter(-1);
  }
  function show() {
    showIndSetter(ind);
  }

  if (showInd == -1) {
    return (
      <>
        <hr />
        <div className="formMini-container" onClick={show}>
          {miniDisplayKeys.map((displayKey) => (
            <div key={displayKey} className="miniContent">
              {info[ind][displayKey]}
            </div>
          ))}
        </div>
      </>
    );
  } else if (showInd === ind)
    return (
      <div className="formInput-container">
        <hr></hr>
        {Object.keys(localInfo)
          .filter((key) => key != "id")
          .map((key) => (
            <div key={key} className="formInputItem-Container">
              <label htmlFor={`${key}_${ind}`}>{displayName[key]}</label>
              <input
                id={`${key}_${ind}`}
                type="text"
                value={localInfo[key]}
                onChange={(e) => handleChange(e.target.value, key)}
              />
            </div>
          ))}
        <div className="button-container">
          <button
            className="Cancel-Button"
            onClick={() => {
              unShow();
              setLocalInfo(info[ind]);
            }}
          >
            Cancel
          </button>
          <button
            className="Save-Button"
            onClick={() => {
              handleSave();
              unShow();
            }}
          >
            Save
          </button>
        </div>
      </div>
    );
};

FormInputPanel.propTypes = {
  info: PropTypes.array.isRequired,
  infoSetter: PropTypes.func.isRequired,
  ind: PropTypes.number.isRequired,
  miniDisplayKeys: PropTypes.array.isRequired,
  showInd: PropTypes.number.isRequired,
  showIndSetter: PropTypes.func.isRequired,
};

export default FormInputPanel;
