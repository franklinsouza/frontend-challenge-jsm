const getCurrentUsers = (list, currentPage, usersPerPage) => {
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  return list.slice(indexOfFirstUser, indexOfLastUser);
};

export default getCurrentUsers;