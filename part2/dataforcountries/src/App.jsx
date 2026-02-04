import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const [search, setSearch] = useState('')
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios
            .get('https://studies.cs.helsinki.fi/restcountries/api/all')
            .then((response) => {
                setCountries(response.data)
            })
    }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const countriesToShow = countries.filter((country) => {
        if(search === ''){
            return
        }
        return country.name.common.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <>
            <div>
                find countries:
                <input onChange={handleSearch} value={search}></input>
            </div>
            <div>
                <p>{countriesToShow.length > 10 && 'Too many results, please refine search'}</p>
                <ul>{countriesToShow.length > 1 && countriesToShow.length <= 10 && (
                    countriesToShow.map(country => <li>{country.name.common}</li>)
                )}</ul>
            </div>
        </>

    )
}

export default App