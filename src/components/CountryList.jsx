import Spinner from "./Spinner";

import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
    const { cities, isLoading } = useCities();

    if (isLoading) return <Spinner></Spinner>;

    if (!cities.length)
        return <Message message="Add your first city..."></Message>;

    const countries = cities.reduce((acc, cur) => {
        if (acc.map((el) => el.country).includes(cur.country)) return acc;
        else return [...acc, { country: cur.country, emoji: cur.emoji }];
    }, []);

    return (
        <ul className={styles.countryList}>
            {countries.map((country) => (
                <CountryItem
                    country={country}
                    key={country.country}
                ></CountryItem>
            ))}
        </ul>
    );
}

export default CountryList;
