import FormInputPanel from "./formInputPanel";
import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/infoInputPanel.css";

const InfoInputPanel = ({ title, info, infoSetter, miniDisplayKeys }) => {
  const [showInd, showIndSetter] = useState(-1);
  return (
    <div className={`info-container`}>
      <div className="title">{`${title}`}</div>
      {info.map((item, ind) => {
        //console.log(ind);
        return (
          <FormInputPanel
            key={item.id}
            info={info}
            infoSetter={infoSetter}
            ind={ind}
            miniDisplayKeys={miniDisplayKeys}
            showInd={showInd}
            showIndSetter={showIndSetter}
          ></FormInputPanel>
        );
      })}
    </div>
  );
};

InfoInputPanel.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.array.isRequired,
  infoSetter: PropTypes.func.isRequired,
  miniDisplayKeys: PropTypes.array.isRequired,
};

export default InfoInputPanel;
