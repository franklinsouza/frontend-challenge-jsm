const apllyFilters = (data, states, search) => {
  let updatedList = [...data];

  const statesChecked = states.filter(item => item.checked).map(item => item.value);

  if(statesChecked.length) {
    updatedList = updatedList.filter(item => statesChecked.includes(item.location.state));
  }

  //console.log(search);

  if(search) {
    updatedList = updatedList.filter(
      (item) => 
        item.name.first.toLowerCase().search(search.toLowerCase().trim()) !== -1
    );

    console.log(updatedList);
  }

  return updatedList;
};

export default apllyFilters;