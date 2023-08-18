import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CityList() {
    const { cities, isLoading } = useCities();

    if (isLoading) return <Spinner></Spinner>;

    if (!cities.length)
        return <Message message="Add your first city..."></Message>;

    return (
        <ul className={styles.cityList}>
            {cities.map((city) => (
                <CityItem city={city} key={city.id}></CityItem>
            ))}
        </ul>
    );
}

export default CityList;
