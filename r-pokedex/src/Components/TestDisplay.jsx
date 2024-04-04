import React from "react";
import PropTypes from "prop-types"

const Test = ({ pkmn }) => {
  return <div className="display">{JSON.stringify(pkmn)}</div>;
};

Test.propTypes = {
    pkmn:PropTypes.object
}

export default Test;
