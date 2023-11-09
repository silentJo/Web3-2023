import React, {useState} from "react"
import { v4 as uuid } from 'uuid'

const OpinionContext = React.createContext(null)

const ProviderWrapper = (props) => {

    const [opinions, setOpinions] = useState([])

    const voteForOpinion = (id) => {
        const index = opinions.findIndex((opinion) => opinion.id === id)
        if (index === -1) {
            alert("Provided id does not exist")
            return
        }
        const opinion = opinions[index]
        const newOpinion = {
            ...opinion,
            score: opinion.score + 1
        }
        const newOpinions = [ ...opinions]
        newOpinions[index] = newOpinion
        setOpinions(newOpinions)
    }

    const addOpinion = (label) => {
        const labelExists = opinions.some((opinion) => opinion.label.toLowerCase() === label.toLowerCase())
        if(labelExists) {
            alert("this opinion is already added")
            return
        }
        if(label.trim()==='') {
            alert("label can't be empty")
            return
        }
        const newOpinion = {
            id: uuid(),
            label: label,
            score: 1
        }
        const newOpinions = opinions.concat(newOpinion)
        setOpinions(newOpinions)
    }

    const sortedOpinions = opinions.sort((a, b) => b.score - a.score)

    const exposedValue = {
        voteForOpinion,
        addOpinion,
        sortedOpinions
    }

    return (
        <OpinionContext.Provider value={exposedValue}>
            {props.children}
        </OpinionContext.Provider>
    )
}

export {
    OpinionContext,
    ProviderWrapper
}

export default OpinionContext
