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
  const [search, setSearch] = useState('');
  
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  const [states, setStates] = useState([
    { id: 1, checked: false, label: 'Acre', value: 'acre' },
    { id: 2, checked: false, label: 'Alagoas', value: 'alagoas' },
    { id: 3, checked: false, label: 'Amapá', value: 'amapá' },
    { id: 4, checked: false, label: 'Amazonas', value: 'amazonas' },
    { id: 5, checked: false, label: 'Bahia', value: 'bahia' },
    { id: 6, checked: false, label: 'Ceará', value: 'ceará' },
    { id: 7, checked: false, label: 'Distrito Federal', value: 'distrito federal' },
    { id: 8, checked: false, label: 'Espírito Santo', value: 'espírito santo' },
    { id: 9, checked: false, label: 'Goiás', value: 'goiás' },
    { id: 10, checked: false, label: 'Maranhão', value: 'maranhão' },
    { id: 11, checked: false, label: 'Mato Grosso', value: 'mato grosso' },
    { id: 12, checked: false, label: 'Mato Grosso do Sul', value: 'mato grosso do sul' },
    { id: 13, checked: false, label: 'Minas Gerais', value: 'minas gerais' },
    { id: 14, checked: false, label: 'Pará', value: 'pará' },
    { id: 15, checked: false, label: 'Paraíba', value: 'paraíba' },
    { id: 16, checked: false, label: 'Paraná', value: 'paraná' },
    { id: 17, checked: false, label: 'Pernambuco', value: 'pernambuco' },
    { id: 18, checked: false, label: 'Piauí', value: 'piauí' },
    { id: 19, checked: false, label: 'Rio de Janeiro', value: 'rio de janeiro' },
    { id: 20, checked: false, label: 'Rio Grande do Norte', value: 'rio grande do norte' },
    { id: 21, checked: false, label: 'Rio Grande do Sul', value: 'rio grande do sul' },
    { id: 22, checked: false, label: 'Rondônia', value: 'rondônia' },
    { id: 23, checked: false, label: 'Roraima', value: 'roraima' },
    { id: 24, checked: false, label: 'Santa Catarina', value: 'santa catarina' },
    { id: 25, checked: false, label: 'São Paulo', value: 'são paulo' },
    { id: 26, checked: false, label: 'Sergipe', value: 'sergipe' },
    { id: 27, checked: false, label: 'Tocantins', value: 'tocantins' },
  ]);
  
  const getUsers = () => {
    const updatedList = apllyFilters(data, states, search);
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
  }, [data, states, search]);

  const currentUsers = useMemo(() => {
    if(list) {
      return getCurrentUsers(list, currentPage, usersPerPage);
    }
  }, [list, currentPage, usersPerPage]);

  return(
    <div className={styles.home}>
      <Header search={setSearch} />
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