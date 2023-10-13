import {useContext, useState} from 'react'
import countersContext from "../../contexts/OpinionContext.jsx"


const AddOpinionForm = () => {

    const [label, setLabel] = useState("")

    const {addOpinion} = useContext(countersContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addOpinion(label);
        setLabel("");
    }

    const handleLabelChange = (e) => {
        e.preventDefault();
        const newValue = e.target.value;
        setLabel(newValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleLabelChange} value={label} />
            <button type="submit">
                Add Opinion
            </button>
        </form>
    );
}

export default AddOpinionForm;