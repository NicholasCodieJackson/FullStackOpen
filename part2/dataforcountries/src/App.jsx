import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import CountryList from './components/CountryList'

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
            <Search search={search} onSearchChange={handleSearch}/>
            <CountryList countries={countriesToShow}/>
        </>

    )
}

export default App