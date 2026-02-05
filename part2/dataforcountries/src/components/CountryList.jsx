import {useState, useEffect} from 'react'
import Country from '../components/Country'

const CountryList = ({ countries }) => {
    const [selectedCountry, setSelectedCountry] = useState(null)

    const showCountry = (country) => {
        setSelectedCountry(country)
    }

    useEffect(() => {
        setSelectedCountry(null)
    }, [countries])

    if(selectedCountry) {
        return <Country country={selectedCountry}/>
    }

    if(countries.length > 10){
        return (
            <p>Too many results, refine search</p>
        )
    }

    if(countries.length === 1){
        return <Country country={countries[0]}/>
    }

    

    if(countries.length > 1 && countries.length <= 10){
        return (
            <ul>
                {countries.map(country => {
                    return (
                        <li key={country.name.common}>
                            {country.name.common}
                            <button onClick={() => showCountry(country)}>Show</button>
                        </li>
                    )
                })}
            </ul>
        )
    }

    return null
}

export default CountryList
