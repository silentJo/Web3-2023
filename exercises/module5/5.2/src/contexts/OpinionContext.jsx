import React, {useState} from "react"

const OpinionContext = React.createContext(null)

const ProviderWrapper = (props) => {
    const [opinions, setOpinions] = useState([])

    const voteForOpinion = (id) => {
        const index = opinions.findIndex((opinion) => opinion.id === id)
        if (index === -1) {
            alert("opinion with provided id does not exist")
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
        const labelExists = opinions.some((opinion) => opinion.label === label)
        if(labelExists) {
            alert("this opinion is already added")
            return
        }
        const newOpinion = {
            id: new Date().getTime(),
            label: label,
            score: 1
        }
        const newOpinions = opinions.concat(newOpinion)
        setOpinions(newOpinions)
    }

    const reset = () => {
        setOpinions([])
    }

    const sortedOpinions = opinions.sort((a, b) => b.score - a.score)

    const exposedValue = {
        sortedOpinions,
        voteForOpinion,
        addOpinion,
        reset
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
