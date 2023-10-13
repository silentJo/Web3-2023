import { useContext } from 'react'
import countersContext from "../../contexts/CounterContext.jsx"


const OkButton = () => {

    const {
        increaseOkScore
    } = useContext(countersContext)

    const handleClick = (e) => {
        e.preventDefault()
        increaseOkScore()
    }

    return (
        <button onClick={handleClick}>
            increase ok
        </button>
    );
}

export default OkButton;