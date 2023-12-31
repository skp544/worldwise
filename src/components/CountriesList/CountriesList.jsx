import { Message, Spinner, CountryItem } from "../";
import { useCities } from "../../contexts/CitiesContext";
import styles from "./CountriesList.module.css";

const CountriesList = () => {
  const { cities, loading } = useCities();

  if (loading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce(
    (arr, city) => {
      if (!arr.map((el) => el.country).includes(city.country))
        return [...arr, { country: city.country, emoji: city.emoji }];
      else {
        return arr;
      }
    },

    []
  );

  return (
    <ul className={styles.countriesList}>
      {countries?.map((country, i) => (
        <>
          <CountryItem country={country} key={i} />
        </>
      ))}
    </ul>
  );
};

export default CountriesList;
