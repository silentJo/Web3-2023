import { useContext } from 'react'
import countersContext from "../../contexts/CounterContext.jsx"
import GoodButton from '../GoodButton/GoodButton.jsx'
import OkButton from '../OkButton/OkButton'
import BadButton from '../BadButton/BadButton'
import ResetButton from '../ResetButton/ResetButton'



const App = () => {

    const {
        goodScore,
        okScore,
        badScore,
    } = useContext(countersContext);

    return (
        <div>
            <ul>
                <li>Good : {goodScore} <GoodButton /></li>
                <li>Ok : {okScore} <OkButton /></li>
                <li>Bad : {badScore} <BadButton /></li>
            </ul>
            <ResetButton />
        </div>
    );
}

export default App;