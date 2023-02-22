const apllyFilters = (data, states) => {
  let updatedList = [...data];

  const statesChecked = states.filter(item => item.checked).map(item => item.label);

  if(statesChecked.length) {
    updatedList = updatedList.filter(item => statesChecked.includes(item.location.state));
  }

  // if(searchInput) {
  //   updatedList = updatedList.filter(
  //     (item) => 
  //       item.name.first.toLowerCase().search() !== -1
  //   );
  // }

  return updatedList;
};

export default apllyFilters;