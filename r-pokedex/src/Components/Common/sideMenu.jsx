import propTypes from "prop-types";
import { useState } from "react";

const SideMenu = ({ visible, children, onClose, sidebar }) => {
  //   const [trigger, setTrigger] = useState(false);

  return (
    <div
      className={`sideMenu ${visible ? `sideMenu--visible` : `sideMenu--hidden`}`}
    >
      <div className="sideMenu__sidebar">{sidebar}</div>

      <div className="sideMenu__body">
        <button className="sideMenu__toggle" onClick={() => onClose()}>
          close
        </button>
        {children}
      </div>
    </div>
  );
};

SideMenu.propTypes = {
  children: propTypes.object,
  visible: propTypes.bool,
};

SideMenu.defaultProps = {
  children: {},
  visible: false,
};

export default SideMenu;
