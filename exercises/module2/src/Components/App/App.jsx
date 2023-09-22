import {useState} from "react";
import Display from '../Display/Display.jsx'
import Button from "../Button/Button.jsx";

const App = () => {
    const [counter, setCounter] = useState(0)

    const changeCount = (delta) => {
        const newCounter = counter + delta;
        setCounter(newCounter)
    }

    return (
        <div>
            <Display counter={counter} />
            <Button
                changeCount={changeCount}
                delta={1}
                text='plus'
            />
            <Button
                changeCount={changeCount}
                delta={-counter}
                text='zero'
            />
            <Button
                changeCount={changeCount}
                delta={-1}
                text='minus'
            />
        </div>
    )
}

export default App