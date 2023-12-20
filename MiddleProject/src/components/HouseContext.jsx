import React, { useEffect, useState, createContext } from 'react'
import axios from 'axios';
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
    const [houses, setHouses] = useState([]);
    const [country, setCountry] = useState('Location (any)');
    const [countries, setCountries] = useState([]);
    const [property, setProperty] = useState('property type (any)');
    const [properties, setProperties] = useState([])
    const [price, setPrice] = useState('price range (any)');
    const [loading, setLoading] = useState(false);
    const [filtered, setFiltered] = useState([]);

    console.log("filtered",filtered);
    useEffect(() => {
        const housesFetch = async () => {
            try {
                const response = await axios.get('https://6559b7d66981238d054ccc29.mockapi.io/houses');
                setHouses(response.data);
                const uniqueCountries = Array.from(new Set(response.data.map((house) => house.country)));
                setCountries(uniqueCountries.sort());
                setFiltered(response.data);

                const allProperties = Array.from(new Set(response.data.map((house) => house.type)));
                setProperties(allProperties.sort());

                console.log(response);

            }
            catch (err) {
                console.log("Error Fetching Houses", err);

            }

        }
        housesFetch();
    }, []);

    function handleClick() {
        setLoading(true)
        // console.log(country,property,price);
        const isDefault = (str) => {
            return str.split(' ').includes('(any)');
        };
        // console.log(isDefault(country));
        const minPrice = parseInt(price.split(' ')[0]);
        const maxPrice = parseInt(price.split(' ')[2]);
        // console.log(minPrice)
        const filteredHouses = filtered.filter((house) => {
            const housePrice = parseInt(house.price);
            if (house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice) {
                return house;
            }
            //if all values are default
           else if (isDefault(country) && isDefault(property) && isDefault(price)) {
                return house;
            }

            else if (!isDefault(country) && isDefault(property) && isDefault(price)) {
                return house.country === country;
            }

            else if (!isDefault(property) && isDefault(country) && isDefault(price)) {
                return house.type === property;
            }

           else  if (!isDefault(price) && isDefault(country) && isDefault(property)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house
                }
            }

            if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
                return house.country === country && house.type === property;
            }

            if (!isDefault(country) && !isDefault(price) && isDefault(property)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.country === country
                }
            }

            if (!isDefault(property) && !isDefault(price) && isDefault(country)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.type === property
                }
            }
        });
        // console.log(filteredHouses);
        setTimeout(() => {
            return filteredHouses.length < 1 ? setHouses([]) :
                setHouses(filteredHouses),
                setLoading(false)

        }, 1000)

    }

    return (
        <HouseContext.Provider value={{
            houses,setHouses, country, setCountry,
            countries, property,
            setProperty, properties,
            price, setPrice, loading, handleClick
        }} >
            {children}
        </HouseContext.Provider>
    )

}

export default HouseContextProvider;
