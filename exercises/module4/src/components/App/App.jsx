import {useState} from 'react'
import Person from "../Person/Person.jsx";
import FilterPersons from "../FilterPersons/FilterPersons.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number:'040-1234567' ,id: 1}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterValue, setfiltervalue] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length +1
        }
        const nameExists = persons.some((person) => person.name === newName)
        if(nameExists) {
            const message = `${newName} is already added to phonebook`
            alert(message)
            return
        }
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
    }

    const lowerFilter = filterValue.toLowerCase()
    const filteredPersons = persons.filter((person) => {
        const lowerPersonName = person.name.toLowerCase()
        const keep = lowerPersonName.includes(lowerFilter)
        return keep
    })

    const changeFilter = (newFilter) => {
        setfiltervalue(newFilter)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                <FilterPersons changeFilter={changeFilter} filterValue={filterValue}/>
            </div>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h3>Numbers</h3>
            {filteredPersons.map(person =>
                <Person key={person.id} name={person.name} number={person.number}/>
            )}
        </div>
    )
}

export default App