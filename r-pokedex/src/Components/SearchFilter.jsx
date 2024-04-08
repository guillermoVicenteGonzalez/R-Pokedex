import { useState, useEffect } from "react";
import PropTypes from "prop-types";

//gets an array ob objects.
//Filters them according to the listParam parameter

const SearchFilter = ({ list, listParam, onSearch }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    return () => {
      setInput("");
    };
  }, []);

  function onInputCB(e) {
    setInput(e.target.value);
    let filtered = filterList(list, listParam, input);
    console.log(filtered);
    onSearch(filtered);
  }

  function filterList(list, listParam, filter) {
    let regex = new RegExp(filter);
    console.log(regex);
    return list.filter((item) => {
      return regex.test(item[listParam]);
    });
  }

  return (
    <input
      className="searchBar"
      value={input}
      onInput={(e) => onInputCB(e)}
      placeholder="search here"
    ></input>
  );
};

SearchFilter.propTypes = {
  list: PropTypes.array,
  listParam: PropTypes.string,
  onSearch: PropTypes.func,
};

SearchFilter.defaultProps = {
  list: [],
  listParam: "name",
};

export default SearchFilter;
