import {useState} from "react";
import Display from '../Display/Display.jsx'
import Button from "../Button/Button.jsx";

const App = () => {
    localStorage.setItem("counter", JSON.stringify(0))

    const [counter, setCounter] = useState(JSON.parse(localStorage.getItem("counter")))

    const changeCount = (delta) => {
        const newCounter = counter + delta;
        setCounter(newCounter)
        localStorage.setItem("counter", JSON.stringify(newCounter))
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