const apllyFilters = (data, states, search) => {
  let updatedList = [...data];

  const statesChecked = states.filter(item => item.checked).map(item => item.value);

  if(statesChecked.length) {
    updatedList = updatedList.filter(item => statesChecked.includes(item.location.state));
  }

  if(search) {
    updatedList = updatedList.filter(
      (item) => 
        item.name.first.toLowerCase().search(search.toLowerCase().trim()) !== -1
    );
  }

  return updatedList;
};

export default apllyFilters;