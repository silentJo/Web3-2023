import { useContext } from 'react'
import countersContext from "../../contexts/CounterContext.jsx"


const BadButton = () => {

    const {
        increaseGoodScore
    } = useContext(countersContext)

    const handleClick = (e) => {
        e.preventDefault()
        increaseGoodScore()
    }

    return (
        <button onClick={handleClick}>
            increase good
        </button>
    );
}

export default BadButton;