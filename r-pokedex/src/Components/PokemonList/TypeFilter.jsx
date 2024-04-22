import propTypes from "prop-types";

const TypeFilter = ({ options, list, onFilterSelect, parameter }) => {
  function filterList(list, option) {
    list.filter((item) => {
      if (Array.isArray(item[parameter])) {
        return item[parameter].includes(option) ? item : null;
      } else {
        return item[parameter] == option ? item : null;
      }
    });
  }

  function onSelectCB(selection) {
    // alert("it changed")
    console.log(list);
    let filteredList = filterList(list, selection);
    onFilterSelect(filteredList);
    // onFilterSelect(selection);
  }

  return (
    <select
      className="pkmnList__type-filter"
      onInput={(e) => onSelectCB(e.target.value)}
    >
      {options.length > 0
        ? options.map((o) => <option key={o}>{o}</option>)
        : ""}
    </select>
  );
};

TypeFilter.propTypes = {
  options: propTypes.array,
  onFilterSelect: propTypes.func,
  list: propTypes.arrayOf({}),
};

TypeFilter.defaultProps = {
  options: [],
  onFilterSelect: () => {},
  list: [],
};

export default TypeFilter;
