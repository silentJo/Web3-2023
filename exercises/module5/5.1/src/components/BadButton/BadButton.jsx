import { useContext } from 'react'
import countersContext from "../../contexts/CounterContext.jsx"


const BadButton = () => {

    const {
        increaseBadScore
    } = useContext(countersContext)

    const handleClick = (e) => {
        e.preventDefault()
        increaseBadScore()
    }

    return (
        <button onClick={handleClick}>
            increase bad
        </button>
    );
}

export default BadButton;