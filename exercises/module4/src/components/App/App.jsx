import {useState} from 'react'
import Person from "../Person/Person.jsx";
import FilterPersons from "../FilterPersons/FilterPersons.jsx";
import AddPerson from "../AddPerson/AddPerson.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number:'040-1234567' ,id: 1}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterValue, setfiltervalue] = useState('')

    const addPerson = () => {
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
        return lowerPersonName.includes(lowerFilter)
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
            <h2>Add new</h2>
            <AddPerson
                newName={newName}
                setNewName={setNewName}
                newNumber={newNumber}
                setNewNumber={setNewNumber}
                addPerson={addPerson}
            />
            <h3>Numbers</h3>
            {filteredPersons.map(person =>
                <Person key={person.id} name={person.name} number={person.number}/>
            )}
        </div>
    )
}

export default App