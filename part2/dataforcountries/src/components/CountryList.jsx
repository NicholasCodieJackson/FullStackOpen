import Country from '../components/Country'

const CountryList = ({ countries }) => {
    return (
        <div>
            <p>{countries.length > 10 && 'Too many results, please refine search'}</p>

            <ul>{countries.length > 1 && countries.length <= 10 && (
                countries.map(country => <li key={country.name.common}>{country.name.common}</li>)
            )}</ul>

            {countries.length === 1 && <Country country={countries[0]}/>}
        </div>
    )
}

export default CountryList
