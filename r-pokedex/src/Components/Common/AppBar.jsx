import propTypes from "prop-types";

const AppBar = ({ actions, header, settings }) => {
  return (
    <nav className="AppBar">
      <div className="AppBar__actions">{actions}</div>
      <div className="AppBar__header">{header}</div>
      <div className="AppBar__settingss">{settings}</div>
    </nav>
  );
};

AppBar.propTypes = {
  actions: propTypes.node,
  header: propTypes.node,
  settings: propTypes.node,
};

export default AppBar;
