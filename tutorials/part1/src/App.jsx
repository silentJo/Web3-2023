const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} year old</p>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            greeting app created by <a href='https://github.com/SilentJo'>SilentJo</a>
        </div>
    )
}

const App = () => {
    const name = 'Katelynn'
    const age = 9
    const friends = [
        { name : 'Virginia', age: 29 }
    ]
    return (
        <>
            <h1>Greetings</h1>
            <Hello name='Jonathan' age={28 + 10} />
            <Hello name={name} age={age} />
            <Hello name={friends[0].name} age={friends[0].age}/>
            <Footer />
        </>
    )
}

export default App