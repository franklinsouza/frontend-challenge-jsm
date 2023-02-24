import { useParams } from "react-router-dom"; 
import useFetch from "../../hooks/useFetch";
import Breadcrumbie from "../../components/Breadcrumbies";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Card from "../Home/components/Card";

const Details = () => {
  const { id } = useParams();
  const {data} = useFetch();

  return (
    <>
      <Header />

      <div className='container'>
        <Breadcrumbie />

        <h1 className="section-title">
          Detalhes do usuário
        </h1>

        {data &&
        <>
          <img src={data[id].picture.large} />
          <h1>{data[id].name.first} {data[id].name.last}</h1>
          {data[id].email}
          {data[id].location.street}
          {data[id].location.city}
          {data[id].location.state}
          {data[id].location.postcode}
        </>}
      </div>

      <Footer />
    </>
  )
}

export default Details;