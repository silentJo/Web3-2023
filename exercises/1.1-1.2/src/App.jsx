
import Content from "./components/content/content.jsx";
import Total from "./components/total/total.jsx";
import Header from "./components/header/header.jsx";

const App = () => {
    const name = 'Half Stack application development'
    const parts = [
        { name : 'Fundamentals of React', exercises : 10 },
        { name : 'Using props to pass data', exercises: 10 },
        { name : 'State of a component', exercises: 15 }
    ]
    const total= parts[0].exercises + parts[1].exercises + parts[2].exercises

    return (
        <>
            <Header name = { name } />
            <Content parts = { parts } />
            <Total total = { total } />
        </>
    )
}

export default App