import PropTypes from "prop-types";
import "../styles/preview.css";

const BasicInfoPreview = ({ info }) => {
  return (
    <div className="BasicInfo_container">
      <div className="BasicInfo_content BasicInfo_name">{info.FullName}</div>
      <div className="BasicInfo_content">
        <div>Tel: {info.PhoneNumber}</div>
        <div>Email: {info.Email}</div>
        <div>Address: {info.Address}</div>
      </div>
    </div>
  );
};

BasicInfoPreview.propTypes = {
  info: PropTypes.shape({
    FullName: PropTypes.string,
    Email: PropTypes.string,
    PhoneNumber: PropTypes.string,
    Address: PropTypes.string,
  }).isRequired,
};

export default BasicInfoPreview;
