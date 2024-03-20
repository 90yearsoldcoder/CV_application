import PropTypes from "prop-types";
import "../styles/preview.css";

const InfoPreview = ({ info, displayKeys, title }) => {
  return (
    <div className="infoPreview_container">
      <div className="infoPreview_title">{title}</div>
      {info.map((item, ind) => (
        <div key={item.id} className="infoPreview_item">
          <div className="infoPreview_item_left">
            <div>{`${info[ind].StartDate} - ${info[ind].EndDate}`}</div>
            <div>{info[ind].Location}</div>
          </div>
          <div className="infoPreview_item_right">
            {displayKeys.map((key, i) => {
              return i == 0 ? (
                <div key={key} className="bolder">
                  {info[ind][key]}
                </div>
              ) : (
                <div key={key}>{info[ind][key]}</div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

InfoPreview.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      StartDate: PropTypes.string,
      EndDate: PropTypes.string,
      Location: PropTypes.string,
    })
  ).isRequired,
  displayKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};
export default InfoPreview;
