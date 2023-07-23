import { CityItem, Message, Spinner } from "../";
import { useCities } from "../../contexts/CitiesContext";
import styles from "./CityList.module.css";

const CityList = () => {
  const { cities, loading } = useCities();

  if (loading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities?.map((city) => (
        <>
          <CityItem city={city} key={city.id} />
        </>
      ))}
    </ul>
  );
};

export default CityList;
