import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    const [counter, setCounter] = useState(initialValue)

}

export default useLocalStorage()
