import { useContext } from 'react'
import countersContext from "../../contexts/CounterContext.jsx"

const ResetButton = () => {

    const {
        resetAll
    } = useContext(countersContext)

    const handleClick = (e) => {
        e.preventDefault()
        resetAll()
    }

    return (
        <button onClick={handleClick}>
            Reset scores
        </button>
    );
}

export default ResetButton;