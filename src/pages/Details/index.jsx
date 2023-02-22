import useFetch from "../../hooks/useFetch";
import Breadcrumbie from "../../components/Breadcrumbies";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Card from "../Home/components/Card";

const Details = () => {
  const {data, loading, error} = useFetch();

  return (
    <>
      <Header />

      <div className='container'>
        <Breadcrumbie />

        <h1 className="section-title">
          Detalhes do usuário
        </h1>

        {
          data &&
          <Card 
            key={data[198].email} 
            fname={data[198].name.first}
            lname={data[198].name.last}
            photo={data[198].picture.large}
            street={data[198].location.street}
            city={data[198].location.city}
            state={data[198].location.state}
            postcode={data[198].location.postcode}
          />
        }
      </div>

      <Footer />
    </>
  )
}

export default Details;