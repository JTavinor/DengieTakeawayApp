// Formats the options list for the menu modal when an item has options
export const renderOptions = (options, selectedOption, selectOption) => {
  var optionsList = [];
  for (const option in options) {
    optionsList.push(
      <li className="optionsListItem" key={option}>
        <button
          style={{ outline: "none" }}
          onClick={() => selectOption(option)}
          onMouseDown={(e) => e.preventDefault()}
          className={
            selectedOption === option
              ? "itemCardContainer shadow optionPlus"
              : "itemCardContainer shadow option"
          }
        >
          <p style={{ margin: 0 }}>
            {selectedOption === option && "• "}
            {option}
          </p>{" "}
          <p style={{ margin: 0 }}> £{options[option].toFixed(2)}</p>
        </button>
      </li>
    );
  }
  return (
    <ul className="subMenuList" style={{ width: "70%", marginBottom: "15px" }}>
      {optionsList}
    </ul>
  );
};
