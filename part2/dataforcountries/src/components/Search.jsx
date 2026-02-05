const Search = ({ search, onSearchChange}) => {
    return (
        <div>
            find countries:
            <input value={search} onChange={onSearchChange} ></input>
        </div>
    )
}

export default Search