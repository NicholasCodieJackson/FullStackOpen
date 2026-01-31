import Person from '../components/Person'

const Persons = ({persons, nameSearch, deletePerson}) => {
    return (
        <div>
            {persons.filter(person =>
                person.name.toLowerCase().includes(nameSearch.toLowerCase())
            ).map((person) => <Person key={person.id} person={person} deletePerson={deletePerson}/>)}

            {persons.length === 0 ? 'No people in phone book' : ''}
        </div>
    )
}

export default Persons