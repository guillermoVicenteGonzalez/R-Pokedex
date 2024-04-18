import propTypes from "prop-types";

const Loading = ({ active }) => {
  return (
    <div className="loader">
      <svg className="circular">
        <circle
          className="path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth={5}
          strokeMiterlimit={10}
        ></circle>
      </svg>
    </div>
  );
};

Loading.propTypes = {
  active: propTypes.bool,
};

Loading.defaultProps = {
  active: true,
};

export default Loading;
