import { useEffect, useMemo, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import styles from './styles.module.scss';
import Header from "../../components/Header";
import Breadcrumbie from "../../components/Breadcrumbies";
import Filter from "./components/Filter";
import OrderList from "./components/OrderList";
import Card from "./components/Card";
import Footer from "../../components/Footer";
import Pagination from './components/Pagination';
import apllyFilters from './helpers/apllyFilters';
import getCurrentUsers from './helpers/getCurrentUsers';

const Home = () => {
  const { data, loading } = useFetch();
  const [list, setList] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(9);
  
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  const [states, setStates] = useState([
    { id: 1, checked: false, label: 'são paulo' },
    { id: 2, checked: false, label: 'rio de janeiro' },
    { id: 3, checked: false, label: 'minas gerais' }
  ]);
  
  const getUsers = () => {
    const updatedList = apllyFilters(data, states);
    setList(updatedList);
    setCurrentPage(1);

    return updatedList;
  }

  const handleCheckState = (id) => {
    const updatedStates = states.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setStates(updatedStates);
  };


  useEffect(()=> {
    if(data) {
      getUsers();
    }
  }, [data, states]);

  const currentUsers = useMemo(() => {
    if(list) {
      return getCurrentUsers(list, currentPage, usersPerPage);
    }
  }, [list, currentPage, usersPerPage]);

  return(
    <div className={styles.home}>
      <Header />
      <div className="container">
        <Breadcrumbie />

        <h1 className="section-title">
          Lista de membros
        </h1>

        <div className={styles.home__content}>
          <Filter states={states} checkState={handleCheckState}/>
          <div>
            {currentUsers &&
              <>  
                <OrderList currentPosts={currentUsers.length} totalPosts={list.length}/>  
                <div className={styles['home__content-cards']}>
                  {
                    currentUsers.map(item => 
                      <Card 
                        key={item.email} 
                        fname={item.name.first}
                        lname={item.name.last}
                        photo={item.picture.large}
                        street={item.location.street}
                        city={item.location.city}
                        state={item.location.state}
                        postcode={item.location.postcode}
                      />
                    )
                  }
                </div>

                <Pagination 
                  usersPerPage={usersPerPage}
                  totalUsers={list.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </>
            }
          </div>
        </div>
      </div>  
      <Footer />
    </div>
  )
}   

export default Home;