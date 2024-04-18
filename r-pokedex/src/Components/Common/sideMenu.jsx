import propTypes from "prop-types";

const SideMenu = ({ visible, children, onClose, sidebar }) => {
  //   const [trigger, setTrigger] = useState(false);

  return (
    <div
      className={`sideMenu ${visible ? `sideMenu--visible` : `sideMenu--hidden`}`}
    >
      <div className="sideMenu__sidebar">{sidebar}</div>

      <div className="sideMenu__body">
        <button className="sideMenu__toggle closeBtn" onClick={() => onClose()}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

SideMenu.propTypes = {
  children: propTypes.object,
  visible: propTypes.bool,
  onClose: propTypes.func,
  sidebar: propTypes.node,
};

SideMenu.defaultProps = {
  children: {},
  visible: false,
  onClose: () => "",
  sidebar: {},
};

export default SideMenu;
